<template>
  <div id='app'>
    <Home v-if="flag" />
    <Login v-else />
  </div>
</template>

<script>
import Home from './views/Home'
import Login from './views/Login'
export default{
  name:'App',
  components:{
    Home, Login
  },
  computed:{
    flag(){
      return this.$store.state.flag
    }
  },
  beforeMount: function(){
    if(localStorage.token){
      this.$store.state.flag = true;
    }
    else{
      this.$store.state.flag = false;
    }
  }
}
</script>

<style lang="scss">
#app{
  font-family: 'Roboto', sans-serif;
}
  body{
    padding: 0;
    margin: 0;
    background: #FAFAFA;
  }
</style>
