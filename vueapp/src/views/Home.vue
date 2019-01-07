<template>
  <v-container fill-height fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center>
        <v-flex>
          <v-img
            :src="require('../assets/blue-labs-plain.svg')"
            class="my-3"
            contain
            height="200"
          ></v-img>
          <br>
          <h1 class="text-xs-center">
            <br>Vous présente un prototype de "Real Time Application" avec WebSockets
            <br>
            <br>
            <br>
          </h1>
          <v-layout align-center justify-center row fill-height>
            <v-flex></v-flex>
            <v-flex>
              <v-img
                :src="require('../assets/logo.svg')"
                class="my-3"
                contain
                height="200"
              ></v-img>
              <h1 class="text-xs-center">Vuetify</h1>
            </v-flex>
            <v-flex>
              <h1 class="text-xs-center">+</h1>
            </v-flex>
            <v-flex>
              <v-img
                :src="require('../assets/feathersjs.svg')"
                class="my-3"
                contain
                height="200"
              ></v-img>
              <h1 class="text-xs-center">FeathersJS</h1>
            </v-flex>
            <v-flex>
              <h1 class="text-xs-center">+</h1>
            </v-flex>
            <v-flex>
              <v-img
                :src="require('../assets/mongodb.svg')"
                class="my-3"
                contain
                width="200"
              ></v-img>
            </v-flex>
            <v-flex></v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
