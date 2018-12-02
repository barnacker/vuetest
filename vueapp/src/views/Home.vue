<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-btn :to="{ name: 'login' }">Login</v-btn>
        <v-btn :to="{ name: 'signup' }">Sign up</v-btn>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
