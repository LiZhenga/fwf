<template>
  <div class="top">
    <div class="logo">

    </div>
    <nav>
      <router-link to="/">组队论坛</router-link> 
      <router-link to="/match">比赛信息</router-link>
      <router-link to="/news">消息中心</router-link>
      <router-link to="/individual">个人主页</router-link>
    </nav>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<style>

</style>
