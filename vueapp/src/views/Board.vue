<template>
  <v-container
    fill-height
    fluid
    pa-0
    :style="'background-image: url('+board.background+'); background-size:cover;'"
  >
    <error-alert v-if="boardsError" :message="boardsError.message"/>
    <error-alert v-else-if="listsError" :message="listsError.message"/>
    <v-layout v-else column>
      <v-flex xs12>
        <v-form v-model="valid" @submit.prevent @keydown.prevent.enter>
          <v-text-field
            dark
            class="headline mb-0"
            solo-inverted
            v-model="board.name"
            :rules="[notEmptyRules]"
            label="Name"
            required
            @change="myPatch()"
            :loading="loadingBoard"
            color="orange"
          >
            <v-progress-linear
              slot="progress"
              height="2"
              indeterminate
              color="primary"
            />
          </v-text-field>
        </v-form>
        <v-flex v-if="!loadingBoard" xs12 pa-0></v-flex>
        <list-list
          :board="board"
          v-on:refreshActivities="debouncedLoadActivities"
        ></list-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { log } from 'util';
import { notEmptyRules } from '../rules';
import ListList from '../components/ListList.vue';
import ErrorAlert from '../components/ErrorAlert.vue';

export default {
  name: 'board',
  components: {
    ListList,
    ErrorAlert,
  },
  data: () => ({
    dragOrigin: '',
    dragTarget: '',
    draggingCard: null,
    valid: false,
    validList: false,
    createMode: false,
    cardMode: false,
    board: {},
    list: {},
    notEmptyRules,
  }),
  mounted() {
    this.loadBoard();
    this.resetBlindActivities();
  },
  watch: {
    board() {
      console.log('board');
      this.debouncedLoadActivities();
    },
  },
  computed: {
    ...mapState('boards', { loadingBoard: 'isGetPending', boardsError: 'errorOnGet' }),
    ...mapState('lists', { listsError: 'errorOnFind' }),
    ...mapState('activities', { creatingActivities: 'isCreatePending' }),
  },
  methods: {
    ...mapActions(['setActiveListCreateCard', 'addBlindActivities', 'resetBlindActivities']),
    ...mapActions('boards', { getBoard: 'get' }),
    ...mapActions('activities', { findActivities: 'find' }),
    loadBoard() {
      this.getBoard(this.$route.params.id).then((response) => {
        this.board = response.data || response;
      });
    },
    loadActivities() {
      this.findActivities({
        query: {
          boardId: this.$route.params.id,
          $sort: {
            updatedAt: -1,
          },
        },
      });
    },
    // eslint-disable-next-line
    debouncedLoadActivities: _.debounce(function () {
      console.log('loadActivities');
      this.loadActivities();
    }, 100),
    async myPatch() {
      // eslint-disable-next-line
      if (this.board._id) {
        await this.board.patch();
        console.log('patch');
        this.debouncedLoadActivities();
      }
    },
  },
};
</script>
