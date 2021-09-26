<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    router >
    <el-image
        class="icon_home"
        :src="'/src/assets/home_icon.svg'"
        @click="toHome" />
    <el-sub-menu index="1">
      <template #title>数据Mock</template>
      <el-menu-item index="/mock/interfacecapture">已有数据查询</el-menu-item>
      <el-menu-item index="/mock/dataselect">接口抓包</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/save">预留</el-menu-item>
    
    <el-button 
      type="primary" 
      plain 
      class="login_button"
      @click="toLogin">
      登录
    </el-button>
  </el-menu>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  function toLogin(){
    router.push('/login')
  }
  function toHome(){
    router.push('/')
  }
</script>

<style scoped>
.icon_home {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-top: 15px;
}
.login_button {
  position: absolute;
  right: 0px;
  top: 10px;
}
</style>