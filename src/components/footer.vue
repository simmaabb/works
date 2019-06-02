<template>
  <footer>
    <div v-for="(foot,i) in foots" :key="i">
      <router-link :to="{name:foot.name}">
        <i class="iconfont" v-html="foot.icon"></i>
        <span>{{foot.txt }}</span>
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {

  data() {
    return {
      tab: "home",
      foots: [
        { txt: "首页", path: "/app/home", name: "home", icon: "&#xe619;" },
        {
          txt: "分类",
          path: "/app/classify",
          name: "classify",
          icon: "&#xe778;"
        },
        { txt: "购物车", path: "/app/shopping-cart", name: "ShoppingCart", icon: "&#xe614;" },
        { txt: "我的", path: "/app/personal", name: "personal", icon: "&#xe60c;" }
      ]
    };
  },
  mounted(){
    this.active=this.$route.name
  }
};
</script>


<style lang="scss" scoped>
footer{
	position:fixed;
	width:100%;
	height:.9rem;
	left:0;
	bottom:0;
	background:#fff;
	display:flex !important;
    z-index:100;

	div{
		flex:1;
		height:0.9rem;
		a{
			display: block;
			width:100%;
			height:100%;
			display:flex;
			flex-direction:column;
			box-sizing:border-box;
			padding:0.06rem 0;
			text-align:center;
			font-family:"微软雅黑";
			color:#999;
			position: relative;
			i{
			width:100%;
			height:0.45rem;
			line-height:0.45rem;
			font-size:0.42rem !important;
			}
			span{
				width:100%;
				height:0.35rem;
				line-height:0.35rem;
				font-size:0.26rem;
			}
			.hot{
				position: absolute;
				top:0;
				left:60%;
				display: inline;
				width:.25rem;
			}
		}
		.nav-active,.router-link-exact-active{
			color:#d2ab44;
		    border-color:#d2ab44;
		}
	}
}
</style>