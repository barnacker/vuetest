<template>
  <v-card
    v-if="!createMode"
    flat
    ripple
    @click.stop="$emit('activateCreateMode')"
    style="cursor: pointer;"
    @mouseenter="cardHover = true"
    @mouseleave="cardHover = false"
    :color="cardHover ? 'blue lighten-4' : 'blue lighten-5'"
  >
    <v-container pa-1>
      <v-layout column>
        <v-flex>
          <span class="caption ma-0">Add a board...</span>
        </v-flex>
      </v-layout>
    </v-container>
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
  name: 'board-create',
  props: ['createMode'],
  data: () => ({
    cardHover: false,
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
