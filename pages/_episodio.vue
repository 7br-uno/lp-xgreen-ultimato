<template>
  <div>
    <main-baner />
  </div>
</template>
<script>
import mainBaner from "~/components/episodio/mainBaner";
export default {
  components:{
    mainBaner
  },
  mounted() {
    console.log(this.$route.params.episodio);
  }
}
</script>
