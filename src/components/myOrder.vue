<template>
  <div>
    <ul class="u1">
      <li>我的订单</li>
      <li class="li1">
        <van-icon name="peer-pay" info="9" class="i1"/>待付款
        <van-icon name="arrow" class="i2"/>
      </li>
      <li class="li1">
        <van-icon name="tosend" info="9" class="i1"/>待发货
        <van-icon name="arrow" class="i2"/>
      </li>
      <li class="li1">
        <van-icon name="logistics" info="9" class="i1"/>已发货
        <van-icon name="arrow" class="i2"/>
      </li>
    </ul>
    <ul class="u1">
      <li>我的服务</li>
      <li class="li1">
        <van-icon name="service-o" class="i1"/>在线客服
        <van-icon name="arrow" class="i2"/>
      </li>
      <li class="li1">
        <van-icon name="coupon-o" class="i1"/>优惠券
        <van-icon name="arrow" class="i2"/>
      </li>
      <li class="li1">
        <van-icon name="like-o" class="i1"/>收藏夹
        <van-icon name="arrow" class="i2"/>
      </li>
      <li class="li1">
        <van-icon name="location-o" class="i1"/>地址管理
        <van-icon name="arrow" class="i2"/>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.u1 {
  margin: 0.25rem 0;
  background-color: #fff;
}
.u1 li {
  height: 1rem;
  line-height: 1rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  color: #999;
}
.u1 .li1 {
  border-top: 1px solid #eee;
  font-size: 0.26rem;
}
.u1 li .i1 {
  float: left;
  margin-right: 0.2rem;
  font-size: 0.4rem;
  margin-top: 0.3rem;
  color: #666;
}
.u1 li .i2 {
  float: right;
  font-size: 0.4rem;
  margin-top: 0.3rem;
  color: #ccc;
}
</style>
