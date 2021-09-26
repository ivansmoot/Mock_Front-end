<template>
  <div name="whole_login_area" class="whole_login_area">
    <div name="area_account" class="area_account">
      <el-image
        class="icons"
        :src="'/src/assets/account_icon.svg'" />
      <el-input
        v-model="user_account"
        placeholder="请输入账号"
        clearable
        class="input_account" />
    </div>
    <div name="area_password" class="area_password">
      <el-image
        class="icons"
        :src="'/src/assets/password_icon.svg'" />
      <el-input
        v-model="user_password"
        placeholder="请输入密码"
        show-password
        class="input_password" />
    </div>
    <div name="button_area" class="area_login_button">
      <el-button
      type="primary"
      class="button_login"
      round>
        登录
      </el-button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const user_account = ref('')
  const user_password = ref('')
</script>

<style scoped>
.whole_login_area {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.area_account {
  width: 100%;
}
.area_password {
  width: 100%;
}
.icons {
  width: 30px;
  height: 30px;
  margin-right: 20px;
  vertical-align: middle;
}
.area_login_button {
  width: 100%;
  height: 100%;
}
.button_login {
  width: 15%;
  margin-top: 20px;
}
.button_login:active {
  width: 13%;
}
.input_account {
  width: 30%;
  margin-top: 100px;
}
.input_password {
  width: 30%;
  margin-top: 30px;
}
</style>