<template>
  <v-container class="accent" fluid py-16>
    <div class="mb-16">
      <v-row>
        <v-col cols="12" class="d-flex align-center flex-column">
          <div
            class="white--text text-uppercase text-center text-body-2 mx-auto"
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
              text-uppercase text-h3 text-center
              font-weight-bold
            "
          >
            01 a 04 de julho
          </div>
        </v-col>
      </v-row>
      <my-form />
    </div>
    <v-row>
      <v-col
        offset-md="3"
        lg="6"
        md="6"
        class="d-flex justify-center flex-xs-column align-xs-center"
      >
        <div class="d-flex align-center mr-8">
          <img src="/ultimato/img/logo_xg.png" alt="" />
        </div>
        <div class="white--text">
          <p class="font text-justify">
            Resultados passados não são garantias de resultadosfuturos. As
            informaçõesdeste site destinam-se ao seu conhecimento geral enão
            garantimos resultadosespecíficos e valores exatos de lucro. Os
            resultadossão de inteiraresponsabilidade do assinante e/ou aluno que
            realizaas suas própriasoperações.O nosso conteúdo tem fins de
            conhecimento e cultura.São voltados àintrodução aos conhecimentos em
            educação e mercadosfinanceiros, dentrodos melhores valores éticos e
            morais, com o objetivode promover ashabilidades necessárias para o
            correto entendimentoem educação financeira.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
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

