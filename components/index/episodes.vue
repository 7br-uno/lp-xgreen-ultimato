<template>
  <v-container class="accent" fluid py-16>
    <v-row>
      <v-col cols="12" class="d-flex align-center flex-column">
        <div class="primary--text text-uppercase font-weight-bold text-h4 mb-6">O que vai acontecer?</div>
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
        <div
          :style="`background: #ffffff`"
          class="episode pa-10"
        >
          <div>
            <img :src="card.episode" alt="">
          </div>
          <div v-if="card.episode === '' " class="title font-weight-bold text-uppercase text-left primary--text" >
            {{card.title}}
          </div>
          <div>
              <img :src="card.cadeado" alt="">
          </div>
        </div>

        <div class="c-description primary--text my-3">
          {{card.description}}
        </div>
        <div class="c-description white--text mb-6">
          {{card.text}}
        </div>
      </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      cardsEpisodes: [
        {
          episode: "/ultimato/img/ep_01.png",
          description: "Itaque commodi quod debitis aliquam error id rerum laborum",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          cadeado:"/ultimato/img/cadeado_aberto.png"
        },
        {
          episode: "/ultimato/img/ep_02.png",
          description: "Itaque commodi quod debitis aliquam error id rerum laborum",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          cadeado:"/ultimato/img/cadeado_aberto.png"
        },
        {
          episode: '',
          title: "03/07 - 19h",
          description: "Itaque commodi quod debitis aliquam error id rerum laborum",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          cadeado:"/ultimato/img/cadeado_fechado.png"
        },

      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .c-episode{
   display: flex;
   flex-direction: column;
  }
  .episode {
    height: 400px;
    width: 300px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .c-description {
    width: 240px;
    margin: 0 auto;
  }
</style>
