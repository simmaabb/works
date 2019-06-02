<template>
  <div>
    <Header></Header>
    <van-tabs @click="onClick" class="nav">
      <van-tab title="登录">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名/手机号"
            @click-right-icon="$toast('用户名输入框被清空')"
          />
          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
          <div style="text-align:center;line-height:70px;height:70px">
            <van-button
              :loading="loading"
              type="default"
              plain
              hairline="true"
              size="large"
              loading-type="spinner"
              loading-text="登录中..."
              text="登录"
              @click="handleLogin"
            />
          </div>

          <!-- <van-button loading type="danger" loading-type="spinner" loading-text="加载中..."/> -->
        </van-cell-group>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('用户名输入框被清空')"
          />
          <van-field
            v-model="usertel"
            required
            clearable
            label="手机号"
            right-icon="question-o"
            placeholder="请输入手机号"
            @click-right-icon="$toast('手机号输入框被清空')"
          />

          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
          <van-field
            v-model="password"
            type="password"
            label="确认密码"
            placeholder="请确认输入密码"
            required
          />
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      loginForm: {
        username: '',
        password: '',
      },
      registerForm: {
        username: '',
        usertel: ''
      },
    };
  },
  methods: {
    onClick(index, title) {
      this.$toast.loading({
        duration: 500, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        mask: true,
        message: "加载中..."
      });
    }
  },
  handleLogin(){

  }
};
</script>

<style scoped>
.nav {
  margin-top: 0.8rem;
}
</style>

