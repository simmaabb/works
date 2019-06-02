<template>
  <div>
    <Header title="搜索"></Header>
    <form action="/">
  <van-search
    class="search"
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
  </div>
</template>


<style scoped>
.search{
  margin-top: .8rem;
}
</style>