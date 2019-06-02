<template>
  <div>
    <div class="lunbo">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="https://topic.camel.com.cn/module/wap_home_banner_main/946a00c3-318f-47e7-b645-fb7a5226fac4.jpg!/fw/540"
            alt
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://topic.camel.com.cn/module/wap_home_banner_main/392843d4-375b-41eb-a772-bf4d1d7e3b59.jpg!/fw/540"
            alt
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://topic.camel.com.cn/module/wap_home_banner_main/c01f9edf-725c-4edc-b584-6e78e5ba0e32.jpg!/fw/540"
            alt
          >
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="slogan">
      <span>骆驼自营爆品</span>
      <span>7天无忧退换货</span>
      <span>快递包邮</span>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(li,i) in lis" :key="i">
            <a><img :src="li.img" alt="" @click="toGoodsList(li.id)">{{li.txt}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      lis: [
        {
          id: 1,
          txt: "户外",
          path: "outdoors",
          name: "outdoors",
          img:
            "https://img01.camel.com.cn/product_class/20181211/ed9afc8b-d748-4331-be00-bfb05cc9babe.jpg!/fw/86"
        },
        {
          id: 2,
          txt: "运动",
          path: "outdoors",
          name: "outdoors",
          img:
            "https://img01.camel.com.cn/product_class/20181211/9fcc8c3d-39b8-4b20-993f-e8f4480c12e7.jpg!/fw/86"
        },
        {
          id: 3,
          txt: "瑜伽",
          path: "app/home/outdoors",
          name: "outdoors",
          img:
            "https://img01.camel.com.cn/product_class/20181211/e54aab9b-1791-4047-8879-c67ab9eb0681.jpg!/fw/86"
        },
        {
          id: 4,
          txt: "男鞋",
          path: "app/home/outdoors",
          name: "outdoors",
          img:
            "https://img01.camel.com.cn/product_class/20181211/41096cf2-593c-44f8-be2b-73431194bae7.jpg!/fw/86"
        },
        {
          id: 5,
          txt: "男装",
          path: "app/home/outdoors",
          name: "outdoors",
          img:
            "https://img01.camel.com.cn/product_class/20181211/c38d7b64-191e-4402-9330-ade2046ecd74.jpg!/fw/86"
        },
        {
          id: 6,
          txt: "女鞋",
          path: "app/home/outdoors",
          name: "outdoors",
          img:
            "https://img01.camel.com.cn/product_class/20181211/bb71ce69-5da2-4f00-95a5-7e07a5b48bde.jpg!/fw/86"
        },
        {
          id: 7,
          txt: "箱包",
          path: "app/home/outdoors",
          name: "outdoors",
          img:
            "https://img01.camel.com.cn/product_class/20181211/2a605e94-8f70-4e09-8d90-ae8c1da3f6d6.jpg!/fw/86"
        },
        {
          txt: "全部",
          path: "classify",
          name: "classify",
          img: "https://img01.camel.com.cn/images/product_category_all_02.jpg"
        }
      ]
    };
  },
  methods:{
      toGoodsList(id){
          console.log(id)
          console.log("这是商品id")
      }
  }
};
</script>

 <style scoped>
.lunbo {
  margin-top: 50px;
  /* height: 100%; */
}
.lunbo img {
  width: 100%;
}
.slogan {
  width: 100%;
  height: 0.8rem;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #fff;
  line-height: 0.8rem;
}
.slogan span {
  color: #7f2400;
  padding-left: 0.32rem;
  background: url("../assets/homeimg/1.png") no-repeat left center;
  background-size: 0.2rem 0.2rem;
}
.nav ul {
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #fff;
  margin-top: 0.3rem;
  padding-bottom: 0.2rem;
}
.nav ul li {
  width: 25%;
}
.nav ul li a {
  display: block;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  align-items: center;
  color: #333;
  padding-top: 0.2rem;
}
.nav ul li a img {
  width: 1.2rem;
  height: 1.2rem;
}
</style>



