<template>
  <v-card
    v-if="!createMode"
    flat
    ripple
    @click.stop="$emit('activateCreateMode'), cardHover = false"
    :style="
      'text-decoration: ' + (cardHover ? 'underline' : 'none') + ';'
      + 'cursor: pointer;'
      + 'color: ' + (cardHover ? 'black' : 'grey') + ';'"
    @mouseenter="cardHover = true"
    @mouseleave="cardHover = false"
    :color="cardHover ? 'grey lighten-1' : 'grey lighten-2'"
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
import { notEmptyRules } from '../rules';

export default {
  name: 'board-create',
  props: ['createMode'],
  data: () => ({
    cardHover: false,
    valid: false,
    board: {
      name: '',
      background: 'https://images.unsplash.com/photo-1544604860-206456f08229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    },
    notEmptyRules,
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
