<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    router
  >
    <el-sub-menu index="1">
      <template #title>数据Mock</template>
      <el-menu-item index="/mock/interfacecapture">已有数据查询</el-menu-item>
      <el-menu-item index="/mock/dataselect">接口抓包</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/save">预留</el-menu-item>
    
    <el-button 
      type="primary" 
      plain 
      class="login-button"
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
</script>

<style scoped>
.login-button {
  position: absolute;
  right: 0px;
  top: 10px;
}
</style>