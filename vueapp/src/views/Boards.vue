<template>
  <v-container grid-list-md fluid>
    <v-layout justify-start wrap v-if="!loading">
      <v-flex xs12 sm6 md4 lg2 xl1 v-for="board in boards" :key="board._id">
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
      <v-flex xs12 sm6 md4 lg2 xl1>
        <v-form
          ref="form"
          v-model="valid"
          @submit.prevent="createBoard"
          @keydown.prevent.enter
        >
          <v-card @click="createMode = !createMode">
            <v-card-title>
              <div>
                <h3
                  class="mb-0 grey--text"
                >Create a board...
                </h3>
                <v-text-field
                    v-if="createMode"
                    v-model="board.name"
                    :rules="[notEmptyRules]"
                    label="Name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-if="createMode"
                    v-model="board.background"
                    :rules="[notEmptyRules]"
                    label="Background"
                    required
                  ></v-text-field>
              </div>
            </v-card-title>
            <v-card-actions v-if="createMode">
              <v-btn
                flat
                color="secondary"
                type="submit"
                :loading="creating"
                :disabled="!valid || creating"
              >
              Create
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
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
  </v-container>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'boards',
  data: () => ({
    valid: false,
    createMode: false,
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
    ...mapState('boards', { creating: 'isCreatePending' }),
    ...mapState('boards', { loading: 'isFindPending' }),
    ...mapGetters('boards', { findBoardsInStore: 'find' }),
    boards() {
      return this.findBoardsInStore({ query: {} }).data;
    },
    diplayMode() {
      const binding = {};
      binding.column = !this.$vuetify.breakpoint.mdAndUp;
      return binding;
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
            this.$refs.form.reset();
          });
      }
    },
  },
};
</script>
