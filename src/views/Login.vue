<template>
    <div class="login">
        <el-col :span="8">
            <div class="login__cart">
                <img src="../assets/sibdev-logo.png" alt="">
                <h1>Вход</h1>
                <el-input placeholder="введите логин" v-model="loginInput"></el-input>
                <el-input placeholder="введите пароль" v-model="pass" type="password"></el-input>
                <el-button
                    @click="login" 
                    size="medium" 
                    type="primary"
                    class="login__btn"
                >Войти</el-button>
            </div>
        </el-col>
    </div>
</template>

<script>
export default{
    name:'Login',
    data(){
        return{
            loginInput: '',
            pass: ''
        }
    },
    methods:{
        login(e){
            this.$store.commit('login', {
                login: this.loginInput,
                password: this.pass
            })
        }
    }
}
</script>

<style lang="scss">
    .login{
        max-width: 1440px;
        height: 100vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &__cart{
            padding: 15px;
            background: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
        }
    }
    .el-input{
        margin-bottom: 15px;
    }
    .login__btn{
        margin-bottom: 35px !important;
        font-size: 18px !important;
    }
</style>