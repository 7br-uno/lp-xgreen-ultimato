<template>
  <div>
    <main-baner />
    <special-offer />
    <official-telegran />
    <my-footer />
  </div>
</template>
<script>
import mainBaner from "~/components/episodio/mainBaner";
import officialTelegran from "~/components/episodio/officialTelegran.vue"
import specialOffer from "~/components/episodio/specialOffer.vue"
import myFooter from "~/components/episodio/footer.vue"
export default {
  components:{
    mainBaner,
    officialTelegran,
    specialOffer,
    myFooter
  },
  mounted() {
    console.log(this.$route.params.episodio);
  }
}
</script>
