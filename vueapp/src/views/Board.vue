<template>
  <v-container fluid>
    <div v-if="loading">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
      <h3 row class="headline mb-0">Loading...</h3>
    </div>
    <v-form
      v-if="!loading"
      v-model="valid"
      @keydown.prevent.enter>
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
    <v-container fluid>
      <v-layout justify-start row wrap>
        <v-flex xs4>
          <v-form
                  v-model="valid"
                  @submit.prevent="createList"
                  @keydown.prevent.enter>
            <v-card>
              <v-card-title>
                <div>
                  <h3 class="headline mb-0">Create a List</h3>
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
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  name: 'board',
  data: () => ({
    valid: false,
    board: {},
    notEmptyRules: value => !!value || 'Cannot be empty',
  }),
  mounted() {
    this.getBoard(this.$route.params.id)
      .then((response) => {
        this.board = response.data || response;
      });
  },
  computed: {
    ...mapState('boards', { loading: 'isGetPending' }),
    
  },
  methods: {
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
  },
};
</script>
