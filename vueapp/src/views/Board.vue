<template>
  <v-container
    fill-height
    fluid
    pa-0
    :style="'background-image: url('+board.background+'); background-size:cover;'"
  >
    <v-layout v-if="boardsError" fill-height column class="grey darken-3">
      <v-flex xs12 pa-0>
        <v-alert :value="true" type="error">{{ boardsError.message }}</v-alert>
      </v-flex>
      <v-flex xs12>
        <v-img
          :src="require('../assets/error.gif')"
          class="my-3"
          contain
          height="100"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-layout v-if="!boardsError" column>
      <v-flex xs12 v-if="!boardsError">
        <v-form v-model="valid" @submit.prevent @keydown.prevent.enter>
          <v-text-field
            dark
            class="headline mb-0"
            solo-inverted
            v-model="board.name"
            :rules="[notEmptyRules]"
            label="Name"
            required
            @change="myPatch()"
            :loading="loadingLists || loadingBoard"
            color="orange"
          >
            <v-progress-linear
              slot="progress"
              height="2"
              indeterminate
              color="primary"
            />
          </v-text-field>
        </v-form>
        <v-flex xs12 pa-0></v-flex>
        <v-container
          pt-0
          :class="{'grid-list-xl': $vuetify.breakpoint.xsOnly, 'grid-list-md': $vuetify.breakpoint.smAndUp }"
          fluid
          @click="createMode = false, setActiveListCreateCard('')"
        >
          <v-layout align-start justify-start row wrap>
            <v-flex v-for="list in lists" :key="list._id" xs12 sm3 md2 xl1>
              <list-card
                :list="list"
                :dragOrigin="dragOrigin"
                :dragTarget="dragTarget"
                v-on:deactivateCreateMode="createMode = false"
                v-on:startDraggingCard="startDraggingCard"
                v-on:dropDraggedCard="dropDraggedCard"
                v-on:dragOverList="dragOverList"
                v-on:saveList="saveList(list)"
                v-on:removeList="removeListTree(list)"
                v-on:refreshActivities="debouncedLoadActivities()"
              />
            </v-flex>
            <v-flex xs12 sm3 md2 xl1>
              <list-create
                :board="board"
                :createMode="createMode"
                v-on:activateCreateMode="createMode = true, setActiveListCreateCard('')"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import { log } from 'util';
import { notEmptyRules } from '../rules';
import ListCard from '../components/ListCard.vue';
import ListCreate from '../components/ListCreate.vue';

export default {
  name: 'board',
  components: {
    ListCard,
    ListCreate,
  },
  data: () => ({
    dragOrigin: '',
    dragTarget: '',
    draggingCard: null,
    valid: false,
    validList: false,
    createMode: false,
    cardMode: false,
    board: {},
    list: {},
    notEmptyRules,
  }),
  mounted() {
    this.loadBoard();
  },
  watch: {
    // eslint-disable-next-line
    board() {
      this.debouncedLoadActivities();
    },
    // eslint-disable-next-line
    lists() {
      this.debouncedLoadActivities();
    },
  },
  computed: {
    ...mapState('boards', { loadingBoard: 'isGetPending', boardsError: 'errorOnGet' }),
    ...mapState('lists', { loadingLists: 'isFindPending', listsError: 'errorOnFind' }),
    ...mapGetters('lists', { findListsInStore: 'find' }),
    ...mapGetters('lists', { getListInStore: 'get' }),
    ...mapState('activities', { creatingActivities: 'isCreatePending' }),
    lists() {
      log('compute lists');
      return this.findListsInStore({
        query: {
          boardId: this.$route.params.id,
        },
      }).data;
    },
  },
  methods: {
    ...mapActions(['setActiveListCreateCard', 'addBlindActivities']),
    ...mapActions('lists', { findLists: 'find' }),
    ...mapActions('boards', { getBoard: 'get' }),
    ...mapActions('cards', { findCards: 'find' }),
    ...mapActions('activities', { findActivities: 'find' }),
    loadBoard() {
      this.getBoard(this.$route.params.id).then((response) => {
        this.board = response.data || response;
        this.loadLists();
      });
    },
    loadLists() {
      this.findLists({
        query: {
          boardId: this.$route.params.id,
        },
      });
    },
    loadActivities() {
      log('loadActivities');
      this.findActivities({
        query: {
          boardId: this.$route.params.id,
          $sort: {
            updatedAt: -1,
          },
        },
      });
    },
    // eslint-disable-next-line
    debouncedLoadActivities: _.debounce(function () {
      this.loadActivities();
      this.addBlindActivities();
    }, 100),
    myPatch() {
      // eslint-disable-next-line
      if (this.board._id) {
        this.board.patch().then(() => {
          this.debouncedLoadActivities();
        });
      }
    },
    createList() {
      if (this.validList) {
        const { List } = this.$FeathersVuex;
        const list = new List(this.list);
        list.boardId = this.$route.params.id;
        list.save().then(() => {
          this.$refs.form.reset();
          // this.loadActivities();
        });
      }
    },
    saveList(list) {
      log('saveList');
      list.save();
    },
    startDraggingCard(card) {
      this.dragOrigin = card.listId;
      this.draggingCard = card;
    },
    dropDraggedCard(draggedCard) {
      const card = draggedCard;
      card.listId = this.dragTarget;
      // eslint-disable-next-line
      card.boardId = this.board._id; // for server hooks
      card.move = true; // for server hooks
      card.save().then(() => {
        this.dragOrigin = '';
        this.dragTarget = '';
        this.draggingCard = null;
      });
    },
    dragOverList(event, list) {
      // eslint-disable-next-line
      this.dragTarget = list._id
      if (this.dragTarget !== this.dragOrigin) {
        event.preventDefault();
      }
    },
    async removeListTree(list) {
      // eslint-disable-next-line
      const listId = list._id;
      await list.remove();
      await this.findCards({
        query: {
          listId,
        },
      }).then((cards) => {
        Object.entries(cards.data).forEach((card) => {
          // eslint-disable-next-line
          card[1].remove();
        });
      });
    },
  },
};
</script>
