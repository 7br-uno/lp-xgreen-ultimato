<template>
  <div class="black">
    <v-container class="" py-16>
      <div class="banner">
        <header class="white--text d-flex justify-center">
          LOGO
        </header>
        <div>

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
                text-uppercase text-center text-body-2
                description
                mx-auto
                mb-6
              "
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              quasi aliquid quod nobis quo saepe laborum ratione nemo, quia
              culpa repudiandae cumque
            </div>
          </v-col>
        </v-row>
        <my-form />
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import myForm from './form.vue'

export default {
  components: {
    myForm
  }
}
</script>

<style lang="scss" scoped>
  .description {
    width: 600px;
  }
  .banner {
    position: relative;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
