<template>
  <v-card
    :style="'color: ' + fgcolor.hex8 + ';'"
    :color="(dragOrigin !== dragTarget && dragTarget===list._id )
      ? 'green lighten-2'
      : bgcolor.hex8 "
    @dragover="$emit('dragOverList',$event, list)"
  >
    <v-container pa-1>
      <v-layout justify-space-between row>
        <v-flex xs12 pl-2 pt-1>
          <h4 class="ma-0">{{list.name}}</h4>
        </v-flex>
        <v-flex pa-1>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
          >
            <v-icon small slot="activator">ballot</v-icon>
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
                    <v-list-tile-sub-title>{{ list.updatedAt | moment("from") }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Background Color</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-menu :close-on-content-click="false" offset-x offset-y>
                      <v-btn icon slot="activator">
                        <v-icon>format_color_fill</v-icon>
                      </v-btn>
                      <sketch-picker v-model="bgcolor"/>
                    </v-menu>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Text Color</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-menu :close-on-content-click="false" offset-x offset-y>
                      <v-btn icon slot="activator">
                        <v-icon>format_color_text</v-icon>
                      </v-btn>
                      <sketch-picker v-model="fgcolor"/>
                    </v-menu>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  flat
                  color="error"
                  @click="menu = false, $emit('removeList',list._id)"
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
      <v-layout column>
        <v-flex v-if="loadingCard">
          <v-layout column align-center>
            <v-progress-circular indeterminate color="primary"/>
          </v-layout>
        </v-flex>
        <v-flex v-for="card in cards" :key="card._id" pl-2 pr-2 pb-1>
          <v-card
            draggable
            @dragstart="$emit('startDraggingCard',card)"
            @dragend="$emit('dropDraggedCard',card)"
          >
            <v-card-title class="caption">{{card.content}}</v-card-title>
          </v-card>
        </v-flex>
        <v-flex>
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
import { mapState, mapActions, mapGetters } from 'vuex';
import { Sketch } from 'vue-color';
import CardCreate from './CardCreate.vue';

export default {
  name: 'list-card',
  props: ['list', 'dragOrigin', 'dragTarget'],
  components: {
    CardCreate,
    'sketch-picker': Sketch,
  },
  data: () => ({
    //
    bgcolor: { hex8: '#E0E0E0FF' },
    fgcolor: { hex8: '#000000FF' },
  }),
  mounted() {
    this.findCards({
      query: {
        // eslint-disable-next-line
        listId: this.list._id,
      },
    });
  },
  watch: {
    // eslint-disable-next-line
    cards() {
      this.$emit('refreshActivities');
    },
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
