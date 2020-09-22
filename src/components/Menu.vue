<template>
    <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item class="el-menu-logo">
            <img src="../assets/sibdev-logo.png" alt="">
        </el-menu-item>

          <el-menu-item to="/" index="1">
            <router-link class="rout" to="/search">Поиск</router-link>
          </el-menu-item>

          <el-menu-item index="2">
            <router-link class="rout" to="/favorites">Избранное</router-link>
          </el-menu-item>

        <el-menu-item class="el-menu-item-distance"></el-menu-item>
        
        <el-menu-item index="3" @click="$store.commit('logout')">Выйти
            <!-- <router-link class="rout" to="/login">Выйти</router-link> -->
        </el-menu-item>
    </el-menu>
</template>

<script>
export default{
    name:"Menu",
}
</script>

<style lang="scss">
.rout{
  vertical-align: auto;
  text-decoration: none;
}
.el-menu{
    max-width: 1040px;
    margin: 0 auto !important;
    display: flex;
  }
  .el-menu-item{
    font-size: 18px !important;
  }
  .el-menu-item-distance{
    flex-basis: 60%;
  }
  .el-menu-logo{
    cursor: default !important;
  }
</style>
