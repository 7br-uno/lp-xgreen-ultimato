<template>
  <div class="accent">
    <v-container py-16>
      <v-row>
        <v-col cols="12" class="d-flex align-center flex-column">
          <div
            class="primary--text text-uppercase font-weight-bold text-h4 mb-6"
          >
            O que vai acontecer?
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
          lg="4"
          v-for="card in cardsEpisodes"
          :key="card.episode"
          class="d-flex justify-center"
        >
          <div class="c-episode">
            <v-hover v-slot="{ hover }">
              <v-card
                class="episode"
              >
              <div :style="`background: url(${card.img}); background-size: cover; background-position: center`" class="container-hover">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="
                      transition-fast-in-fast-out
                      green
                      accent-2
                      v-card--reveal
                    "
                    style="height: 30%"
                  />
                </v-expand-transition>
                <div class="container-cadeado">
                  <div>
                    <img :src="card.episode" alt="" />
                  </div>
                  <div
                    v-if="card.episode === ''"
                    class="
                      title
                      font-weight-bold
                      text-uppercase text-left
                      primary--text
                    "
                  >
                    {{ card.title }}
                  </div>
                  <div>
                    <img :src="card.cadeado" alt="" />
                  </div>
                </div>
              </div>
              </v-card>
            </v-hover>
            <div class="c-description primary--text font-weight-bold my-3">
              {{ card.description }}
            </div>
            <div class="c-description white--text mb-6">
              {{ card.text }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      cardsEpisodes: [
        {
          episode: "/ultimato/img/ep_01.png",
          description:
            "Itaque commodi quod debitis aliquam error id rerum laborum",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          cadeado: "/ultimato/img/cadeado_aberto.png",
          img: "/img/bg_jotamoney.png",
        },
        {
          episode: "/ultimato/img/ep_02.png",
          description:
            "Itaque commodi quod debitis aliquam error id rerum laborum",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          cadeado: "/ultimato/img/cadeado_aberto.png",
          img: "/img/bg_jotamoney.png",
        },
        {
          episode: "",
          title: "03/07 - 19h",
          description:
            "Itaque commodi quod debitis aliquam error id rerum laborum",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          cadeado: "/ultimato/img/cadeado_fechado.png",
          img: "/img/bg_jotamoney.png",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.v-card--reveal {
  bottom: 0;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.c-episode {
  display: flex;
  flex-direction: column;
}

.episode {
  height: 400px;
  width: 300px;
  overflow: hidden;
}

.c-description {
  width: 240px;
  margin: 0 auto;
}

.container-cadeado {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 90px;
  padding: 0 40px;
}
.container-hover {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  transition: all 1s;
  &:hover {
    transform: scale(1.2);
    .container-cadeado {
      padding: 70px 40px;
    }
  }
}
</style>

