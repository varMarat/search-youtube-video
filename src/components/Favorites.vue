<template>
    <div>
        <h1>Избранное</h1>
        <ul class="list">
            <li 
                class="list__item"
                v-for="(item, index) in getRequestList"
                :key="index"
                @click="change"
            >{{item.title}}</li>
            
        </ul>
    </div>
</template>

<script>
export default{
    name:'Favorites',
    methods:{
        change(){
            console.log('list')
        }
    },
    computed:{
        getRequestList(){
            return this.$store.getters.requestList
        }
    }
}
</script>

<style lang="scss">
.list{
    padding: 0;
    &__item{
        list-style: none;
        background: #fff;
        padding: 15px;
        margin-bottom: 5px;
        text-transform: uppercase;
        font-weight: bold;
    }
}
</style>