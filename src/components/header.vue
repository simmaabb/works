<template>
  <van-nav-bar left-text="返回" left-arrow fixed @click-left="goback">
    <van-icon name="search" slot="right" v-if="searchShow"   @click="goSearch"></van-icon>
  </van-nav-bar>
</template>

<script>
export default {
    props:{
        title:String,
        show:Boolean
    },
    data(){
        return {
            searchShow:true,
        }
    },
    mounted(){
        console.log(this.$route)
        this.searchShow = this.$router.name === 'search' ? false : true; 
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        goSearch(){
            this.$router.push({name:'search'})
        }
    }
}
</script>


<style>
.van-nav-bar__title{
    height: .8rem;
    background:url("https://img02.camel.com.cn/image/you_logo_20171109.jpg") no-repeat center center;
    background-size: 1.6rem .4rem;
}

</style>

