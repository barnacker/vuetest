<template>
  <v-container
    pt-0
    :class="{'grid-list-xl': $vuetify.breakpoint.xsOnly,
           'grid-list-md': $vuetify.breakpoint.smAndUp }"
    fluid
    @click="createMode = false, setActiveListCreateCard('')"
  >
    <v-layout align-start justify-start row wrap>
      <v-flex v-for="list in lists" :key="list._id" xs12 sm3 md2 xl1>
        <list-card
          :list="list"
          :dragOrigin="dragOrigin"
          :dragTarget="dragTarget"
          v-on:deactivateCreateMode="createMode = false"
          v-on:startDraggingCard="startDraggingCard"
          v-on:dropDraggedCard="dropDraggedCard"
          v-on:dragOverList="dragOverList"
          v-on:saveList="saveList(list)"
          v-on:removeList="removeListTree(list)"
          v-on:refreshActivities="$emit('refreshActivities');"
        />
      </v-flex>
      <v-flex xs12 sm3 md2 xl1>
        <list-create
          :board="board"
          :createMode="createMode"
          v-on:activateCreateMode="createMode = true, setActiveListCreateCard('')"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import { log } from 'util';
import { notEmptyRules } from '../rules';
import ListCard from './ListCard.vue';
import ListCreate from './ListCreate.vue';

export default {
  name: 'list-list',
  props: ['board'],
  components: {
    ListCard,
    ListCreate,
  },
  data: () => ({
    dragOrigin: '',
    dragTarget: '',
    draggingCard: null,
    validList: false,
    createMode: false,
    cardMode: false,
    list: {},
    notEmptyRules,
  }),
  mounted() {
    this.loadLists();
  },
  watch: {
    lists() {
      this.$emit('refreshActivities');
    },
  },
  computed: {
    ...mapGetters('lists', { findListsInStore: 'find' }),
    ...mapGetters('lists', { getListInStore: 'get' }),
    lists() {
      return this.findListsInStore({
        query: {
          boardId: this.$route.params.id,
        },
      }).data;
    },
  },
  methods: {
    ...mapActions(['setActiveListCreateCard']),
    ...mapActions('lists', { findLists: 'find' }),
    ...mapActions('cards', { findCards: 'find' }),
    async loadLists() {
      await this.findLists({
        query: {
          boardId: this.$route.params.id,
        },
      });
    },
    async createList() {
      if (this.validList) {
        const { List } = this.$FeathersVuex;
        const list = new List(this.list);
        list.boardId = this.$route.params.id;
        list.save().then(() => {
          this.$refs.form.reset();
        });
      }
    },
    async saveList(list) {
      list.save();
    },
    async removeListTree(list) {
      // eslint-disable-next-line
      const listId = list._id;
      list.remove();
      this.findCards({
        query: {
          listId,
        },
      }).then((cards) => {
        Object.entries(cards.data).forEach((card) => {
          // eslint-disable-next-line
          card[1].remove();
        });
      });
    },
    startDraggingCard(card) {
      this.dragOrigin = card.listId;
      this.draggingCard = card;
    },
    async dropDraggedCard(draggedCard) {
      const card = draggedCard;
      card.listId = this.dragTarget;
      // eslint-disable-next-line
      card.boardId = this.board._id; // for server hooks
      card.move = true; // for server hooks
      await card.save();
      this.dragOrigin = '';
      this.dragTarget = '';
      this.draggingCard = null;
    },
    dragOverList(event, list) {
      // eslint-disable-next-line
      this.dragTarget = list._id
      if (this.dragTarget !== this.dragOrigin) {
        event.preventDefault();
      }
    },
  },
};
</script>
