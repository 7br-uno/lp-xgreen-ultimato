<template>
  <div :class="$vuetify.breakpoint.smAndUp ? 'bg-jmoney' : 'bg-personagem'">
    <v-container py-16>
      <v-row >
        <v-col cols="12" class="d-flex justify-center primary--text text-h2 font-weight-bold text-uppercase pb-0 mt-16">
          <img v-if="!$vuetify.breakpoint.smAndUp" src="/ultimato/img/titulo_jotamoney.png" alt="">
        </v-col>
      </v-row>
      <v-row class="">
        <v-col cols="12" class="d-flex justify-center white--text text-body-2 mb-16">
          <div class="mt-0 mt-sm-4" :class="$vuetify.breakpoint.smAndUp ? 'jmoney' : ''">
            Fundador da X-Green!
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset-sm="3" class="d-flex  grey--text text--lighten-1 text-body-1 mt-16 pb-0">
          <div class="desc mx-auto">
            "Vou te contar a minha história, como fazer você ganhar dinheiro
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset-sm="3" class="d-flex  primary--text font-weight-bold mb-16 text-body-1 pl-16">
         <div class="desc mx-auto">
            e se tornar o maior terror da Denise.”
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.desc {
  max-width: 300px;
}

.bg-jmoney {
  background: url("/img/bg_jotamoney_novo.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

}
.bg-personagem {
  background: url("/img/bg_jotamoney.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.jmoney {
  margin-top: -40px;
  width: 500px;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
</style>
