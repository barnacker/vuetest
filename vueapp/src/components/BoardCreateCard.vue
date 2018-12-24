<template>
  <v-card
    v-if="!createMode"
    flat
    ripple
    @click.stop="$emit('activateCreateMode')"
    color="blue lighten-5"
    style="cursor: pointer;"
  >
    <v-card-title>
      <div>
        <h3 class="mb-0 black--text">Create a board...</h3>
      </div>
    </v-card-title>
  </v-card>
  <v-card v-else @click.stop="$emit('activateCreateMode')">
    <v-form
      ref="form"
      v-model="valid"
      @submit.prevent="createBoard"
      @keydown.prevent.enter
    >
      <v-card-title style="height: 200px">
        <v-container pa-0>
          <v-layout column>
            <v-flex>
              <v-text-field
                single
                v-model="board.name"
                :rules="[notEmptyRules]"
                label="Name"
                required
              />
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="board.background"
                :rules="[notEmptyRules]"
                label="Background"
                required
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-title>
      <v-card-actions>
        <v-btn
          color="success"
          type="submit"
          :loading="creating"
          :disabled="!valid || creating"
        >Create</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'board-create-card',
  props: ['createMode'],
  data: () => ({
    valid: false,
    board: {
      name: '',
      background: '',
    },
    notEmptyRules: value => !!value || 'Cannot be empty',
  }),
  computed: {
    ...mapState('boards', { creating: 'isCreatePending' }),
  },
  methods: {
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
