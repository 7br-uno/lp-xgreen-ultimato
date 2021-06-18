<template>
  <div class="accent pb-16 pt-8">
    <v-container class="px-8 px-sm-16">
      <div class="mb-16">
        <v-row>
          <v-col cols="12" class="d-flex align-center flex-column">
            <div
              class="white--text text-uppercase text-center title mx-auto"
            >
              Garanta já sua vaga
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex align-center flex-column">
            <div
              class="
                primary--text
                text-uppercase text-sm-h3 text-h4 text-center
                font-weight-bold mb-5
              "
            >
              01 a 04 de julho
            </div>
          </v-col>
        </v-row>
        <my-form />
      </div>
      <v-row>
        <v-col cols="12" sm="2" class="d-flex justify-center">
          <div class="d-flex align-center">
            <img src="/ultimato/img/logo_xg.png" alt="" />
          </div>
        </v-col>
        <v-col cols="12" offset-sm="1" sm="9" class="white--text">
          <p class="font text-justify">
            Resultados passados não são garantias de resultados futuros. As
            informações deste site destinam-se ao seu conhecimento geral e não
            garantimos resultados específicos e valores exatos de lucro. Os
            resultados são de inteira responsabilidade do assinante e/ou aluno
            que realiza as suas próprias operações. O nosso conteúdo tem fins de
            conhecimento e cultura. São voltados à introdução aos conhecimentos
            em educação e mercados financeiros, dentro dos melhores valores
            éticos e morais, com o objetivo de promover as habilidades
            necessárias para o correto entendimento em educação financeira.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import myForm from "./form.vue";

export default {
  components: {
    myForm,
  },
};
</script>

<style lang="scss" scoped>
.font {
  font-size: 12px;
}
</style>

