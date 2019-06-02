<template>
  <div class="home">
    <Header></Header>
    <HomeNav></HomeNav>
    <ul class="goods">
      <li class="li1">户外系列<van-icon name="arrow" class="i2"/></li>
      <li><img src="https://topic.camel.com.cn/module/wap_index_column01_main/60551fc1-6575-4541-b8f3-ab0a8885c654.jpg!/fw/540" alt=""></li>
      <li class="li1">男装系列<van-icon name="arrow" class="i2"/></li>
      <li><img src="https://topic.camel.com.cn/module/wap_index_column03_main/2f5d92da-be45-4093-9a57-6e897d21c174.jpg!/fw/540" alt=""></li>
      <li class="li1">女鞋系列<van-icon name="arrow" class="i2"/></li>
      <li><img src="https://topic.camel.com.cn/module/wap_index_column04_main/b381182c-8232-4417-9475-70f96cfcaf22.jpg!/fw/540" alt=""></li>
      <li class="li1">瑜伽系列<van-icon name="arrow" class="i2"/></li>
      <li><img src="https://topic.camel.com.cn/module/wap_index_yundong_yujia/015d84cf-befb-4c11-a97f-2729d13652a2.jpg!/fw/540" alt=""></li>
    </ul>
    <div class="mfoot">
      <p>客服电话:15670275287</p>
      <p>京ICP备12001814号 Copyright © 北京骆驼鞋业有限公司</p>
    </div>
    <router-view></router-view>
    <Footer></Footer>
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
.goods .li1{
  height: .9rem;
  line-height: .9rem;
  margin: 0 .3rem;
  font-size: .36rem;
}
.goods .li1 .i2 {
  float: right;
  font-size: 0.4rem;
  margin-top: 0.3rem;
  color: #ccc;
}
li img{
  width: 100%;
}
.mfoot{
  text-align: center;
  margin-bottom: 1rem;
  font-size: .22rem;
  padding: .2rem 0;
}
.mfoot p{
  line-height: .4rem;
}
</style>
