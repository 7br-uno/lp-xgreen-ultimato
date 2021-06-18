<template>
  <div class="black">
    <v-container class="px-8 px-sm-16 py-1">
      <div class="banner">
        <header class="white--text d-flex justify-center">
          <img src="/ultimato/img/logo300x300_fundotransparente.png" />
        </header>
        <img src="/ultimato/img/bg_home_monstros.png" />
        <div class="bg-img">
          <v-row>
            <v-col cols="12" class="d-flex align-center flex-column">
              <div
                class="
                  primary--text
                  text-uppercase text-h3
                  description
                  text-center
                  font-weight-bold
                "
              >
                01 a 04 de julho
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center flex-column">
              <div
                class="
                  white--text
                  text-uppercase text-center text-body-1
                  description
                  mx-auto
                  mb-6
                "
              >
                <b>Saiba como lucrar com investimentos esportivos</b> e como a nossa metodologia aterrorizou o mercado e vai transformara sua vida
              </div>
            </v-col>
          </v-row>
          <my-form />
          <v-row>
            <v-col cols="12" class="d-flex align-center flex-column mt-2">
              <div
                class="
                  white--text
                  text-center text-body-2
                  description
                  mx-auto
                  mb-6
                "
              >
                <b>Evento online e gratuito.</b> Ao se cadastrar,você aceita os <u class="primary--text">Termos de Uso, Políticade Privacidade</u>, o uso de cookies e o envio decomunicações nos termos da LGPD.
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
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
.description {
  max-width: 520px;
}

.banner {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bg-img {
  margin-top: -120px;
}
</style>
