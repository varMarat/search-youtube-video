<template>
    <div class="search">
        <div class="search__field"  :style="modificationSearchField">
            <h1>Поиск видео</h1>
            <el-input placeholder="Что хотите посмотреть?" v-model="input">
            <el-button 
                class="btn-search" 
                slot="append"
                @click="requestApi"
            >Найти</el-button>
        </el-input>
        </div>
        <div class="videos__results" v-if="isActiv">
            <div class="videos__results__panel">
                <p>видео по запросу:</p>
                <div class="videos__results__panel-icons">
                    <img src="../assets/list.png" alt="" @click="list">
                    <img src="../assets/grid.png" alt="" @click="grid">
                </div>
            </div>
            <div :class="isList?'videos__results__wrapList':'videos__results__wrapGrid'">
                <div 
                    :class="isList?'videos__results__item-list':'videos__results__item-grid'"
                    v-for="(video, index) in videos" 
                    :key="index"
                >
                    <div>
                        <iframe 
                            width="100%" 
                            height="auto" 
                            :src="url + video.id.videoId"
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <p>{{video.snippet.title}}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
    name:"Search",
    data(){
        return{
            input:'',
            videos:[],
            url:'https://www.youtube.com/embed/',
            isList: true
        }
    },
    methods:{
        requestApi(){
            this.$store.dispatch('getVideosFromApi', this.input).then((res)=>{
                console.log(res)
                this.videos = res.data.items
            })
        },
        list(){
            this.isList = true
        },
        grid(){
            this.isList = false
        }
    },
    computed:{
        isActiv(){
            if(this.videos.length>0){
                return true
            }
        },
        modificationSearchField(){
            if(this.videos.length>0){
                return {
                    maxWidth: '100%',
                    paddingTop:'0'
                }
            }else{
                return{
                    paddingTop: '300px',
                    textAlign: 'left'
                }
            }
        }
    }
}
</script>

<style lang="scss">
.search{
    height: 100%;
    &__field{
        max-width: 700px;
        margin: 0 auto;
    }
}
.btn-search{
    background: #1390E5 !important;
    color: #fff !important;
}
.videos__results{
    width: 100%;
    height: auto;
    &__wrapGrid{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    &__wrapList{
        display: flex;
        flex-direction: column;
    }
    
    &__item-grid{
        width: 24%;
        height: auto;
        &-video{
            background: cornflowerblue;
        }
    }
    &__item-list{
        margin-bottom: 15px;
        display: flex;
        div{
            background: cornflowerblue;
            width: 30%;
            margin-right: 15px;
        }
        p{
            width: 40%;
            font-weight: bold;
            font-size: 16px;
        }
    }
    &__panel{
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-icons{
            img{
                margin-right: 5px;
            }
        }
    }
}  
</style>