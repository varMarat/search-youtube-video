<template>
    <div>
        <h1>Favorites</h1>
        <div>{{getRequestList}}</div>
    </div>
</template>

<script>
export default{
    name:'Favorites',
    data(){
        return{

        }
    },
    computed:{
        getRequestList(){
            return this.$store.getters.requestList
        }
    }
}
</script>

<style>

</style>