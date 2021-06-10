<template>
  <div>
    <main-baner />
    <cards />
    <episodes />
    <jota-money />
    <my-form />
    <my-footer />
  </div>
</template>

<script>
import mainBaner from '/components/index/mainBaner'
import cards from '/components/index/cards'
import episodes from '/components/index/episodes'
import jotaMoney from '/components/index/jotaMoney'
import myForm from '/components/index/form'
import myFooter from '/components/index/footer'
export default {
  components: {
    mainBaner,
    cards,
    episodes,
    jotaMoney,
    myForm,
    myFooter
  }
}
</script>
