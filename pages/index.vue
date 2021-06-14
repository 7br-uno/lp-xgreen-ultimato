<template>
  <div>
    <main-baner />
    <cards />
    <episodes />
    <jota-money />
    <my-footer />
  </div>
</template>

<script>
import mainBaner from '/components/index/mainBaner'
import cards from '/components/index/cards'
import episodes from '/components/index/episodes'
import jotaMoney from '/components/index/jotaMoney'
import myFooter from '/components/index/footer'
export default {
  components: {
    mainBaner,
    cards,
    episodes,
    jotaMoney,
    myFooter
  }
}
</script>
