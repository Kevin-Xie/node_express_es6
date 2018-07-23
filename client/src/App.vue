<template>
  <div id="app">
    <v-head>
      <img src="./assets/logo.png" slot="logo" style="width: 50%;">
      <v-menubar slot="menubar"></v-menubar>
      <v-user-info slot="userInfo"></v-user-info>
    </v-head>
    <router-view/>
  </div>
</template>

<script>
import VHead from '@/components/common/layout/head';
import VMenubar from '@/components/common/layout/menubar';
import VUserInfo from '@/components/common/layout/userInfo';

export default {
  name: 'App',
  components: { VHead, VMenubar, VUserInfo },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
