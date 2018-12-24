<template>
  <v-container @click="createMode = false" fill-height fluid pa-0>
    <wait-bar v-if="loading" text="Loading Boards..."/>
    <v-layout v-if="!loading" column pa-0>
      <v-flex xs12>
        <v-container grid-list-md fluid>
          <v-layout align-start justify-start row wrap>
            <v-flex
              v-for="board in boards"
              :key="board._id"
              xs12
              sm6
              md4
              lg2
              xl1
            >
              <board-card :board="board"/>
            </v-flex>
            <v-flex xs12 sm6 md4 lg2 xl1>
              <board-create-card
                :createMode="createMode"
                v-on:activateCreateMode="createMode = true"
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
import BoardCard from '../components/BoardCard.vue';
import BoardCreateCard from '../components/BoardCreateCard.vue';
import WaitBar from '../components/WaitBar.vue';

export default {
  name: 'Boards',
  components: {
    BoardCard,
    BoardCreateCard,
    WaitBar,
  },
  data: () => ({
    valid: false,
    createMode: false,
    notEmptyRules: value => !!value || 'Cannot be empty',
  }),
  mounted() {
    this.findBoards({
      query: {
        // eslint-disable-next-line
        ownerId: this.user._id,
      },
    });
  },
  computed: {
    ...mapState('auth', { user: 'user' }),
    ...mapState('boards', { creating: 'isCreatePending' }),
    ...mapState('boards', { loading: 'isFindPending' }),
    ...mapGetters('boards', { findBoardsInStore: 'find' }),
    boards() {
      return this.user
        ? this.findBoardsInStore({
          query: {
            // eslint-disable-next-line
              ownerId: this.user._id,
          },
        }).data
        : [];
    },
  },
  methods: {
    ...mapActions('boards', { findBoards: 'find' }),
    ...mapActions('boards', { removeBoard: 'remove' }),
    createBoard() {
      if (this.valid) {
        const { Board } = this.$FeathersVuex;
        const board = new Board(this.board);
        board.save().then(() => {
          this.$refs.form.reset();
        });
      }
    },
  },
};
</script>
