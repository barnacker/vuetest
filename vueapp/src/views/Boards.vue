<template>
  <v-container fluid grid-list-md>
    <v-layout row v-if="loading">
      <v-flex xs4>
        <v-card>
          <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
          ></v-img>
          <div class="text-xs-center">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </div>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Wecome!</h3>
              <div>Loading Boards...</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout justify-start row wrap v-if="!loading">
      <v-flex xs4>
        <v-form
                v-model="valid"
                @submit.prevent="createBoard"
                @keydown.prevent.enter>
          <v-card>
            <v-card-title>
              <div>
                <h3 class="headline mb-0">Create a board</h3>
                <v-text-field
                    v-model="board.name"
                    :rules="[notEmptyRules]"
                    label="Name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="board.background"
                    :rules="[notEmptyRules]"
                    label="Background"
                    required
                  ></v-text-field>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="secondary" type="submit" :disabled="!valid">Create</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
      <v-flex xs4 v-for="board in boards" :key="board._id">
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            :src="board.background"
          >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{board.name}}</span>
              </v-flex>
            </v-layout>
          </v-container>
          </v-img>
          <v-card-actions>
            <v-btn
              flat
              color="secondary"
              :to="{ name: 'board', params: { id: board._id}}"
            >Edit</v-btn>
            <v-btn flat color="red" @click="removeBoard(board._id)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'boards',
  data: () => ({
    valid: false,
    board: {
      name: '',
      background: '',
    },
    notEmptyRules: value => !!value || 'Cannot be empty',
  }),
  mounted() {
    this.findBoards({ query: {} });
  },
  computed: {
    ...mapState('boards', { loading: 'isFindPending' }),
    ...mapGetters('boards', { findBoardsInStore: 'find' }),
    boards() {
      return this.findBoardsInStore({ query: {} }).data;
    },
  },
  methods: {
    ...mapActions('boards', { findBoards: 'find' }),
    ...mapActions('boards', { removeBoard: 'remove' }),
    createBoard() {
      if (this.valid) {
        const { Board } = this.$FeathersVuex;
        const board = new Board(this.board);
        board.save()
          .then(() => {
            this.board = {
              name: '',
              background: '',
            };
          });
      }
    },
  },
};
</script>
