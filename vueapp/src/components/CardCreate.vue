<template>
  <v-card
    v-if="!($store.state.activeListCreateCard === this.list._id)"
    flat
    ripple
    @click.stop="activateCardMode"
    :color="cardHover ? 'grey lighten-1' : 'grey lighten-2'"
    @mouseenter="cardHover = true"
    @mouseleave="cardHover = false"
  >
    <v-container pa-0>
      <v-layout>
        <v-flex xs12 pl-2 pt-0>
          <span class="caption ma-0">Add a card...</span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
  <v-card v-else flat color="grey lighten-2" @click.stop>
    <v-container pa-0>
      <v-layout row>
        <v-flex xs12 pl-2 pr-2>
          <v-form ref="form" v-model="valid" @submit.prevent="createCard()">
            <v-textarea
              v-model="card.content"
              solo
              ref="newCardContent"
              :rules="[notEmptyRules]"
              auto-grow
              message
              autofocus
              clearable
            ></v-textarea>
            <v-btn small color="Primary" :disabled="!valid" type="submit">Add</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'card-create',
  props: ['list'],
  data: () => ({
    valid: false,
    cardHover: false,
    card: {
      content: '',
    },
    notEmptyRules: value => !!value || 'Cannot be empty',
  }),
  watch: {
    cardMode(newVal) { // watch it
      if (!newVal) { this.localCardMode = false; }
    },
  },
  computed: {
    ...mapState('cards', { creatingCard: 'isCreatePending' }),
  },
  methods: {
    ...mapActions(['setActiveListCreateCard']),
    activateCardMode() {
      // eslint-disable-next-line
      this.setActiveListCreateCard(this.list._id);
      this.$emit('deactivateCreateMode');
      this.cardHover = false;
    },
    createCard() {
      if (this.valid) {
        const { Card } = this.$FeathersVuex;
        const card = new Card(this.card);
        // eslint-disable-next-line
        card.listId = this.list._id;
        card.save().then(() => {
          this.$refs.form.reset();
          this.$refs.newCardContent.focus();
        });
      }
    },
  },
};
</script>
