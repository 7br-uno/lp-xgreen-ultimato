<template>
  <v-container class="accent" fluid py-16>
    <div class="mb-16">
      <v-row>
        <v-col cols="12" class="d-flex align-center flex-column">
          <div
            class="white--text text-uppercase text-center text-body-2 mx-auto"
          >
            Lorem ipsum dolor sit
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
      <v-col cols="4" class="d-flex justify-center">
        <div class="d-flex align-center">
          <img src="/img/logo_xgreen_rodape.png" alt=""/>
        </div>
      </v-col>
      <v-col cols="6" class="white--text">
        <p class="font text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint
        minus amet odio culpa natus illo repellendus optio! Similique rerum
        pariatur voluptas veritatis laboriosam dicta deserunt aspernatur iste
        quod reprehenderit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint
        minus amet odio culpa natus illo repellendus optio! Similique rerum
        pariatur voluptas veritatis laboriosam dicta deserunt aspernatur iste
        quod reprehenderit?
        </p>
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
.font{
  font-size: 12px;
}
</style>

