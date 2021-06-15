<template>
  <div class="black">
    <v-container pb-16>
      <v-row>
        <v-col cols="12" class="d-flex align-center flex-column">
          <div
            class="primary--text text-uppercase text-h5 description text-center"
          >
            Por que você
            <span
              ><img
                src="/ultimato/img/texto_chamada _naopode.png"
                class="img-nao-pode"
            /></span>
            perder essa?
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex align-center flex-column">
          <div
            class="
              white--text
              text-uppercase text-center text-body-2
              description
              mx-auto
              mb-6
            "
          >
            Você vai entender como a X-Green, desde 2018, teverendimento demais
            de 2500% e conseguiu lucro em mais de 95% dosdias.
          </div>
        </v-col>
      </v-row>
      <v-row class="width-row">
        <v-col
          cols="12"
          md="4"
          lg="4"
          sm="6"
          class="d-flex justify-center mx-0"
          v-for="card in cards"
          :key="card.desc"
        >
          <v-hover open-delay="200" v-slot="{ hover }">
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              color="grey darken-3"
              class="white--text rounded-md pa-7 mb-3 c-card"
            >
              <img :src="card.img" class="mb-2" />
              <p>
                {{ card.desc }}
              </p>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          img: "/ultimato/img/01_np_dinheiro.png",
          desc: "Como ter uma lucratividade incrível",
        },
        {
          img: "/ultimato/img/02_np_dinheiro.png",
          desc: "Como melhorar de vida e de patamar financeiro",
        },
        {
          img: "/ultimato/img/03_np_celular.png",
          desc: "Como trabalhar com um celular, internet e poucos minutos",
        },
        {
          img: "/ultimato/img/04_np_dinheiro.png",
          desc: "Aprenda uma nova profissão investindo o que cabe nobolso",
        },
        {
          img: "/ultimato/img/05_np_relogio.png",
          desc: "Trabalhe em qualquer local e monte seu próprio horário",
        },
        {
          img: "/ultimato/img/06_np_estrategia.png",
          desc: "Pare de ser enganado por tipster que só perdem",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.description {
  width: 700px;
}

.c-card {
  height: 200px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>
