<template>
  <v-row class="d-flex justify-center">
    <v-col cols="12" md="3" lg="3">
      <v-text-field color="primary" label="Nome" outlined dark />
    </v-col>
    <v-col cols="12" md="3" lg="3">
      <v-text-field color="primary" label="E-mail" outlined dark />
    </v-col>
    <v-col cols="12" md="3" lg="3">
      <v-text-field color="primary" label="Celular" outlined dark />
    </v-col>
    <v-col cols="12" md="3" lg="3" >
      <v-btn tile color="primary" block x-large class="black--text">
        Enviar
        <v-icon right>mdi-arrow-right</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>
