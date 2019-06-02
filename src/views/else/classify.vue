<template>
  <div>
    <Header></Header>
    <van-tabs class="nav1">
      <van-tab v-for="index in 8" title='标签' :key="index">内容 {{ index }}</van-tab>
    </van-tabs>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
.nav1{
  margin-top: .8rem;
}
</style>
