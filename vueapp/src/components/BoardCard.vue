<template>
  <v-card>
    <v-img class="white--text" height="200px" :src="board.background">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline">{{ board.name }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-actions>
      <v-container pa-0>
        <v-layout justify-space-between row>
          <v-flex xs12>
            <v-btn flat :to="{ name: 'board', params: { id: board._id}}">Edit</v-btn>
          </v-flex>
          <v-flex pa-0>
            <v-btn fab flat small color="red" @click="removeBoard(board._id)">
              <v-icon>delete_forever</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'board-card',
  props: ['board'],
  methods: {
    ...mapActions('boards', { removeBoard: 'remove' }),
  },
};
</script>
