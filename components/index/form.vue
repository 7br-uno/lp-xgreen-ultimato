<template>
  <v-container fluid>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="2" lg="2">
        <v-text-field color="primary" label="Nome" outlined dark />
      </v-col>
      <v-col cols="12" md="2" lg="2">
        <v-text-field color="primary" label="E-mail" outlined dark />
      </v-col>
      <v-col cols="12" md="2" lg="2">
        <v-text-field color="primary" label="Celular" outlined dark />
      </v-col>
      <v-col cols="12" md="2" lg="2" >
        <v-btn tile color="primary" x-large class="black--text">
          Enviar
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
