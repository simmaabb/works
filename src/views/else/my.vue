<template>
  <div>
    <div class="img">
      <img src="https://img02.camel.com.cn/image/headportrait345.png" alt>
      <span>登录/注册</span>
    </div>
    <MyOrder></MyOrder>
  </div>
</template>


<script>
import MyOrder from "@/components/myOrder.vue"
export default {
  components:{
    MyOrder
  }
}
</script>


<style scoped>
.img {
  height: 2rem;
  background-color: #d2ab44;
  line-height: 1rem;
  padding: 0.5rem 0 0 0.5rem;
  position: relative;
}
.img img {
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
}
.img span {
  position: absolute;
  left: 2.5rem;
  top: .9rem;
  /* margin-left: 0.5rem; */
  font-size: 0.4rem;
  color: #fff;
}
</style>
