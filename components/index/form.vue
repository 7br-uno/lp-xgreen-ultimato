<template>
  <v-container class="accent" fluid>
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-center flex-column">
          <div class="text-lg-subtitle-1 text-sm-body-1 text-uppercase white--text mt-6 mb-2">
            Garanta já sua vaga
          </div>
          <div class="text-lg-h2 text-sm-h4 text-uppercase primary--text font-weight-bold">
            01 a 04 de Julho
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="2" lg="2" >
        <v-text-field
          color="primary"
          tile
          label="Nome"
          outlined
          dark
        />
      </v-col>
      <v-col cols="12" md="2" lg="2" >
        <v-text-field
          label="Outlined"
          single-line
          outlined
        />
      </v-col>
      <v-col cols="12" md="2" lg="2" >
        <v-text-field
          label="Outlined"
          single-line
          outlined
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
</style>
