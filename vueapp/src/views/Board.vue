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
        <v-form v-model="valid" @keydown.prevent.enter>
          <v-text-field
            dark
            prepend-icon="dashboard"
            class="headline mb-0"
            solo-inverted
            v-model="board.name"
            :rules="[notEmptyRules]"
            label="Name"
            required
            @input="myPatch()"
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
          grid-list-md
          fluid
          @click="createMode = false, setActiveListCreateCard('')"
        >
          <v-layout align-start justify-start row wrap>
            <v-flex v-for="list in lists" :key="list._id" xs6 md2 xl1>
              <list-card
                :list="list"
                :dragOrigin="dragOrigin"
                :dragTarget="dragTarget"
                v-on:deactivateCreateMode="createMode = false"
                v-on:startDraggingCard="startDraggingCard"
                v-on:dropDraggedCard="dropDraggedCard"
                v-on:dragOverList="dragOverList"
              />
            </v-flex>
            <v-flex xs6 md2 xl1>
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
    notEmptyRules: value => !!value || 'Cannot be empty',
  }),
  mounted() {
    this.getBoard(this.$route.params.id).then((response) => {
      this.board = response.data || response;
    });
    this.findLists({
      query: {
        boardId: this.$route.params.id,
      },
    });
  },
  computed: {
    ...mapState('boards', { loadingBoard: 'isGetPending', boardsError: 'errorOnGet' }),
    ...mapState('lists', { loadingLists: 'isFindPending', listsError: 'errorOnFind' }),
    ...mapGetters('lists', { findListsInStore: 'find' }),
    lists() {
      return this.findListsInStore({
        query: {
          boardId: this.$route.params.id,
        },
      }).data;
    },
  },
  methods: {
    ...mapActions(['setActiveListCreateCard']),
    ...mapActions('lists', { findLists: 'find' }),
    ...mapActions('boards', { getBoard: 'get' }),
    ...mapActions('boards', { patchBoard: 'patch' }),
    ...mapActions('cards', { patchCard: 'patch' }),
    myPatch() {
      // eslint-disable-next-line
        if (this.board._id) {
        // eslint-disable-next-line
          let id = this.board._id;
        this.patchBoard([id, { name: this.board.name }, {}]);
      }
    },
    createList() {
      if (this.validList) {
        const { List } = this.$FeathersVuex;
        const list = new List(this.list);
        list.boardId = this.$route.params.id;
        list.save().then(() => {
          this.$refs.form.reset();
        });
      }
    },
    startDraggingCard(card) {
      this.dragOrigin = card.listId;
      this.draggingCard = card;
    },
    dropDraggedCard(card) {
      // eslint-disable-next-line
      this.patchCard([card._id, { listId: this.dragTarget }, {}]).then(() => {
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
  },
};
</script>
