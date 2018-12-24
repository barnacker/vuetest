<template>
  <v-card color="grey lighten-2">
    <v-container pa-1>
      <v-layout justify-space-between row>
        <v-flex xs12 pl-3 pt-3>
          <h4 class="ma-0">{{list.name}}</h4>
        </v-flex>
        <v-flex pa-0>
          <v-btn fab flat small color="red" @click="removeList(list._id)">
            <v-icon>delete_forever</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container pa-0>
      <v-layout column>
        <v-flex v-for="card in cards" :key="card._id" pl-2 pr-2 pb-1>
          <v-card>
            <v-card-title>{{card.content}}</v-card-title>
          </v-card>
        </v-flex>
        <v-flex>
          <card-create :list="list"/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import CardCreate from './CardCreate.vue';

export default {
  name: 'list-card',
  props: ['list'],
  components: {
    CardCreate,
  },
  data: () => ({
    cardMode: false,
  }),
  mounted() {
    this.findCards({
      query: {
        // eslint-disable-next-line
        listId: this.list._id,
      },
    });
  },
  computed: {
    ...mapState('cards', { loadingCard: 'isFindPending' }),
    ...mapGetters('cards', { findCardsInStore: 'find' }),
    cards() {
      const retval = this.findCardsInStore({
        query: {
          // eslint-disable-next-line
          listId: this.list._id,
        },
      }).data;
      return retval;
    },
  },
  methods: {
    ...mapActions('cards', { findCards: 'find' }),
  },
};
</script>
