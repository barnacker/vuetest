<template>
  <v-container
    fill-height
    fluid
    pa-0
    :style="'background-image: url('+board.background+'); background-size:cover;'"
  >
    <wait-bar v-if="loadingBoard" text="Loading Lists..."/>
    <v-layout v-if="!loadingBoard" column>
      <v-flex xs12>
        <v-form v-model="valid" @keydown.prevent.enter>
          <v-text-field
            dark
            prepend-icon="dashboard"
            class="headline mb-0"
            single-line
            v-model="board.name"
            :rules="[notEmptyRules]"
            label="Name"
            required
            @change="myPatch()"
          ></v-text-field>
        </v-form>
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
                v-on:deactivateCreateMode="createMode = false"
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
import WaitBar from '../components/WaitBar.vue';


export default {
  name: 'board',
  components: {
    WaitBar,
    ListCard,
    ListCreate,
  },
  data: () => ({
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
    ...mapState('boards', { loadingBoard: 'isGetPending' }),
    ...mapState('lists', { loadingLists: 'isFindPending' }),
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
  },
};
</script>
