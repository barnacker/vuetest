<template>
  <v-container grid-list-md fluid @click="createMode = false">
    <v-layout v-if="!loading" wrap justify-start>
      <v-flex xs12 sm6 v-for="board in boards" md4 :key="board._id" lg2 xl1>
        <v-card>
          <v-img class="white--text" height="200px" :src="board.background">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{ board.name }}</span>
                </v-flex>
                <v-btn icon flat color="white" @click="removeBoard(board._id)">
                  <v-icon>delete_forever</v-icon>
                </v-btn>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-actions>
            <v-btn
              flat
              color="secondary"
              :to="{ name: 'board', params: { id: board._id}}"
            >Edit</v-btn>
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
          <v-card :ripple="!createMode" @click.stop="createMode = true">
            <v-card-title>
              <div>
                <h3 class="mb-0 grey--text">Create a board...</h3>
                <v-text-field
                  v-if="createMode"
                  v-model="board.name"
                  :rules="[notEmptyRules]"
                  label="Name"
                  required
                />
                <v-text-field
                  v-if="createMode"
                  v-model="board.background"
                  :rules="[notEmptyRules]"
                  label="Background"
                  required
                />
              </div>
            </v-card-title>
            <v-card-actions v-if="createMode">
              <v-btn
                flat
                color="secondary"
                type="submit"
                :loading="creating"
                :disabled="!valid || creating"
              >Create</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout v-if="loading" row text-xs-center>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <v-img
              :src="require('../assets/logo.svg')"
              class="my-3"
              contain
              height="200"
            />
          </v-card-title>
          <v-card-text>
            <v-progress-circular indeterminate color="primary"/>
            <span>Loading Boards...</span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'Boards',
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
        board.save().then(() => {
          this.$refs.form.reset();
        });
      }
    },
  },
};
</script>
