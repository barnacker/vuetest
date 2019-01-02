<template>
  <v-card :color="backColor" @dragover="$emit('dragOverList',$event, list)">
    <v-container
      :class="{ 'pa-3': $vuetify.breakpoint.xsOnly, 'pa-2': $vuetify.breakpoint.smAndUp}"
    >
      <v-layout justify-space-between row>
        <v-flex
          xs12
          pl-1
          :class="{ 'pt-1': $vuetify.breakpoint.xsOnly, 'pt-0': $vuetify.breakpoint.smAndUp}"
        >
          <header :style="'background-color: '+ backColor">
            <span
              :style="'font-size:' + ($vuetify.breakpoint.xsOnly ? '1.8rem' : '1rem')"
              class="auto-invert"
            >{{list.name}}</span>
          </header>
        </v-flex>
        <v-flex
          :class="{ 'pt-1': $vuetify.breakpoint.xsOnly,
                  'pt-0': $vuetify.breakpoint.smAndUp,
                  'pr-0': $vuetify.breakpoint.smAndUp  }"
        >
          <v-menu
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
            :style="'background-color: '+ backColor"
          >
            <v-icon
              :large="$vuetify.breakpoint.xsOnly"
              slot="activator"
              class="auto-invert"
            >more_horiz</v-icon>
            <v-card>
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <v-avatar>
                      <v-gravatar email="habib.tremblay@gmail.com"/>
                    </v-avatar>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>Owner</v-list-tile-title>
                    <!-- eslint-disable-next-line -->
                    <v-list-tile-sub-title>{{ list.updatedAt | moment("from") }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-card :color="backColor">
                  <v-menu
                    :close-on-content-click="false"
                    offset-x
                    offset-y
                    pa-0
                  >
                    <v-btn block flat slot="activator">
                      <span
                        class="auto-invert"
                        :style="'background-color: '+ backColor"
                      >Background Color</span>
                      <v-icon right>format_color_fill</v-icon>
                    </v-btn>
                    <sketch-picker
                      v-model="list.color"
                      @input="updateValue({ saveList: saveList, list: list })"
                    />
                  </v-menu>
                </v-card>
              </v-list>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  flat
                  color="error"
                  @click="menu = false, $emit('removeList')"
                >
                  <v-icon dark right>remove_circle</v-icon>Delete Card
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container pa-0>
      <v-layout column v-if="loadingCard">
        <v-flex pb-4>
          <v-layout column align-center>
            <v-progress-circular indeterminate color="primary"/>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout column v-if="!loadingCard">
        <v-flex v-for="card in cards" :key="card._id" ml-2 mr-2 pb-0 pt-1>
          <v-card
            draggable
            @dragstart="$emit('startDraggingCard',card)"
            @dragend="$emit('dropDraggedCard',card)"
          >
            <v-flex
              pa-2
              v-if="$vuetify.breakpoint.xsOnly"
              class="subheadings"
            >{{card.content}}</v-flex>

            <v-flex pa-1 v-else class="caption">{{card.content}}</v-flex>
          </v-card>
        </v-flex>
        <v-flex ml-0 mr-0 pb-0>
          <card-create
            :list="list"
            v-on:deactivateCreateMode="$emit('deactivateCreateMode')"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
import _ from 'lodash';
import { mapState, mapActions, mapGetters } from 'vuex';
import { Chrome } from 'vue-color';
import CardCreate from './CardCreate.vue';

export default {
  name: 'list-card',
  props: ['list', 'dragOrigin', 'dragTarget'],
  components: {
    CardCreate,
    'sketch-picker': Chrome,
  },
  data: () => ({
    //
    pickedColor: '',
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
    backColor() {
      const color = this.list.color.hex8 ? this.list.color.hex8 : this.list.color;
      // eslint-disable-next-line
      return (this.dragOrigin !== this.dragTarget && this.dragTarget === this.list._id)
        ? 'green lighten-2'
        : color;
    },
  },
  methods: {
    ...mapActions(['addBlindActivities']),
    ...mapActions('cards', { findCards: 'find' }),
    saveList() {
      this.$emit('saveList');
    },
    updateValue: _.debounce(({ saveList, list }) => {
      const updatedList = list;
      updatedList.color = list.color.hex8 ? list.color.hex8 : list.color;
      saveList();
    }, 500),
  },
};
</script>
<style>
.auto-invert {
  height: inherit;
  background: inherit;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  filter: invert(1) grayscale(1) contrast(9);
}
.v-menu__activator {
  background: inherit;
}
</style>
