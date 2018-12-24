<template>
  <v-card
    v-if="!createMode"
    flat
    ripple
    @click.stop="$emit('activateCreateMode')"
    color="blue lighten-5"
    style="cursor: pointer;"
  >
    <v-card-title>
      <div>
        <h3 class="mb-0 black--text">Create a list....</h3>
      </div>
    </v-card-title>
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
                v-model="list.name"
                :rules="[notEmptyRules]"
                label="Name"
                required
              ></v-text-field>
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
  name: 'list-create',
  props: ['createMode', 'board'],
  data: () => ({
    valid: false,
    notEmptyRules: value => !!value || 'Cannot be empty',
  }),
  computed: {
    ...mapState('lists', { creating: 'isCreatePending' }),
  },
  methods: {
    createList() {
      if (this.validList) {
        const { List } = this.$FeathersVuex;
        const list = new List(this.list);
        // eslint-disable-next-line
        list.boardId = this.board._id;
        list.save().then(() => {
          this.$refs.form.reset();
        });
      }
    },
  },
};
</script>
