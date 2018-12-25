<template>
  <v-card style="cursor: pointer;" @click="open">
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
        <v-layout align-center justify-space-between row fill-height>
          <v-flex xs12>
            <v-progress-circular
              v-if="loadingUser"
              :size="20"
              :width="2"
              color="primary"
              indeterminate
            ></v-progress-circular>
            <span class="body-1" v-if="!loadingUser">
              <v-avatar :size="20">
                <v-gravatar :email="ownerUser.email"/>
              </v-avatar>
              {{ owner }} - {{ board.updatedAt | moment("from") }}
            </span>
          </v-flex>
          <v-flex xs2 pa-0>
            <v-btn
              fab
              flat
              small
              color="red"
              @click.stop="removeBoard(board._id)"
            >
              <v-icon>delete_forever</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'board-card',
  props: ['board', 'currentUser'],
  data: () => ({
    ownerUser: '',
  }),
  computed: {
    ...mapState('users', { loadingUser: 'isGetPending' }),
    owner() {
      if (this.ownerUser === this.currentUser) {
        return 'You';
      }
      return this.ownerUser.displayname;
    },
  },
  methods: {
    ...mapActions('users', { getUser: 'get' }),
    ...mapActions('boards', { removeBoard: 'remove' }),
    open() {
      // eslint-disable-next-line
      this.$router.push({ name: 'board', params: { id: this.board._id } });
    },
    getOwner() {
      this.getUser(this.board.ownerId).then((user) => {
        this.ownerUser = user;
      });
    },
  },
  beforeMount() {
    this.getOwner();
  },
};
</script>
