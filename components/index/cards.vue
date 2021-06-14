<template>
  <div class="black">
    <v-container pb-16>

      <v-row>
        <v-col cols="12" class="d-flex align-center flex-column">
          <div
            class="primary--text text-uppercase text-h5 description text-center"
          >
            Por que você <span><img src="/img/texto_chamada _naopode.png" class="img-nao-pode"></span> perder essa?
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            quasi aliquid quod nobis quo saepe laborum ratione nemo, quia culpa
            repudiandae cumque
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
              <img :src="card.img" class="mb-2"/>
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
          img: "/img/01_np_dinheiro.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: "/img/02_np_dinheiro.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: "/img/03_np_celular.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: "/img/04_np_dinheiro.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: "/img/05_np_relogio.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: "/img/06_np_estrategia.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
