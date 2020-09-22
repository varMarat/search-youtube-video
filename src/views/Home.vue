<template>
  <div class="wrapper">
    <el-container>

      <el-header>
        <Menu />
      </el-header>

      <el-main>
        <el-row>
          <router-view></router-view>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Menu from '../components/Menu'
import Search from '../components/Search'
export default{
  name:'Home',
  components:{
    Menu, Search
  }
}
</script>

<style lang="scss">
.test{
  height: 500px;
  background: red;
}
.wrapper{
  max-width: 1440px;
  border: 1px solid red;
  margin: 0 auto;
}
 .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    height: 80px;
  }
  .el-main {
    background-color: #FAFAFA;
    height: 720px;
  }
  .el-row{
      max-width: 1040px;
      height: 100%;
      // background-color: #fff;
      margin: 0 auto
    }
</style>