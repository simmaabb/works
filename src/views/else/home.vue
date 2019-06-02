<template>
  <div class="home">
    <Header></Header>
    <HomeNav></HomeNav>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from "@/components/home_nav.vue"

export default {
  name: "home",
  components:{
    HomeNav
  },
};
</script>

<style scoped>


</style>
