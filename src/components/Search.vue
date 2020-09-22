<template>
    <el-col class="col-search" :span="16" :offset="4">
        <h1>Поиск видео</h1>
        <div style="margin-top: 15px;">
            <el-input placeholder="Что хотите посмотреть?" v-model="input">
            <el-button 
                class="btn-search" 
                slot="append"
            >Найти</el-button>
        </el-input>
        </div>
    </el-col>
</template>

<script>
export default{
    name:"Search",
    data(){
        return{
            input:''
        }
    }
}
</script>

<style lang="scss">
.col-search{
    // border: 1px solid red;
    text-align: center;
    padding-top: 200px;
}
.btn-search{
    background: #1390E5 !important;
    color: #fff !important;
}  
</style>