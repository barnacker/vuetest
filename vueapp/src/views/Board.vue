<template>
  <v-container fluid>
    <v-layout v-if="loadingBoard" justify-center row text-xs-center>
      <v-flex xs12>
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
        <span class="headline mb-0">Loading...</span>
      </v-flex>
    </v-layout>
    <v-layout v-if="!loadingBoard" row wrap align-start justify-start>
      <v-flex xs12>
        <v-form v-model="valid" @keydown.prevent.enter>
          <v-text-field
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
      </v-flex>
      <v-flex xs12>
        <v-container
          fill-height
          fluid
          grid-list-md
          @click="createMode = false, cardMode = false"
          pa-0
        >
          <v-layout align-start justify-start row wrap fill-height>
            <v-flex xs6 md2 xl1 v-for="list in lists" :key="list._id">
              <v-card color="grey lighten-2">
                <v-container pa-1>
                  <v-layout justify-space-between row>
                    <v-flex xs12 pl-3 pt-3>
                      <h4 class="ma-0">{{list.name}}</h4>
                    </v-flex>
                    <v-flex pa-0>
                      <v-btn
                        fab
                        flat
                        small
                        color="red"
                        @click="removeList(list._id)"
                      >
                        <v-icon>delete_forever</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-card
                  v-if="!cardMode"
                  flat
                  ripple
                  @click.stop="cardMode = true"
                  color="grey lighten-2"
                >
                  <v-container pa-0>
                    <v-layout justify-space-between row>
                      <v-flex xs12 pl-3 pt-3>
                        <h5 class="ma-0">Add a card...</h5>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
                <v-card
                  v-else
                  flat
                  @click.stop="cardMode = true"
                  color="grey lighten-2"
                >
                  <v-container pa-1>
                    <v-layout row>
                      <v-flex xs12>
                        <v-textarea solo name="input-7-4"></v-textarea>
                        <v-btn
                          small
                          color="Primary"
                          type="submit"
                          :disabled="!valid"
                        >Add</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-card>
            </v-flex>
            <v-flex xs6 md2 xl1>
              <v-form
                ref="form"
                v-if="!creatingList"
                v-model="validList"
                @submit.prevent="createList"
                @keydown.prevent.enter
              >
                <v-card
                  v-if="!createMode"
                  ref="createCard"
                  flat
                  ripple
                  @click.stop="createMode = true"
                  color="blue lighten-5"
                >
                  <v-card-title>
                    <div>
                      <h3 class="mb-0 black--text">Create a list...</h3>
                    </div>
                  </v-card-title>
                </v-card>
                <v-card v-else ref="createCard" @click.stop="createMode = true">
                  <v-card-title>
                    <div>
                      <h3 class="mb-0 black--text">Create a list...</h3>
                      <v-text-field
                        v-if="createMode"
                        v-model="list.name"
                        :rules="[notEmptyRules]"
                        label="Name"
                        required
                      ></v-text-field>
                    </div>
                  </v-card-title>
                  <v-card-actions v-if="createMode">
                    <v-btn
                      flat
                      color="secondary"
                      type="submit"
                      :disabled="!valid"
                    >Create</v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'board',
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
    ...mapState('lists', { creatingList: 'isCreatePending' }),
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
    ...mapActions('lists', { removeList: 'remove' }),
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
