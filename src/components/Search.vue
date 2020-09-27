<template>
    <div class="search">
        <div class="search__field"  :style="modificationSearchField">
            <h1>Поиск видео</h1>
            <div class="search__panel">
                <el-input 
                    placeholder="Что хотите посмотреть?" 
                    v-model="input"
                    class="search__panel__input"
                    >
                <el-button 
                    class="btn-search" 
                    slot="append"
                    @click="requestApi"
                >Найти</el-button>
                </el-input>
                <svg 
                    class="search__panel__icon" 
                    stroke="#1390E5" viewBox="0 0 24 22" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    @click="save"
                    :style="isActive?{display:'block'}:{display:'block'}"
                >
                    <path d="M20.8401 3.60999C20.3294 3.099 19.7229 2.69364 19.0555 2.41708C18.388 2.14052 17.6726 1.99817 16.9501 1.99817C16.2276 1.99817 15.5122 2.14052 14.8448 2.41708C14.1773 2.69364 13.5709 3.099 13.0601 3.60999L12.0001 4.66999L10.9401 3.60999C9.90843 2.5783 8.50915 1.9987 7.05012 1.9987C5.59109 1.9987 4.19181 2.5783 3.16012 3.60999C2.12843 4.64169 1.54883 6.04096 1.54883 7.49999C1.54883 8.95903 2.12843 10.3583 3.16012 11.39L4.22012 12.45L12.0001 20.23L19.7801 12.45L20.8401 11.39C21.3511 10.8792 21.7565 10.2728 22.033 9.60535C22.3096 8.93789 22.4519 8.22248 22.4519 7.49999C22.4519 6.77751 22.3096 6.0621 22.033 5.39464C21.7565 4.72718 21.3511 4.12075 20.8401 3.60999V3.60999Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="videos__results" v-if="isActive">
            <div class="videos__results__panel">
                <p>видео по запросу:</p>
                <div class="videos__results__panel-icons">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                        @click="list"
                        :style="isList?'fill:black':'fill:#BABABA'"
                        >
                        <path  d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"/>
                    </svg>
                    <svg
                        :style="!isList?'fill:black':'fill:#BABABA'"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                        @click="grid"
                        >
                        <path d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"/>
                    </svg>
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
        <Modal :active=activeModal @doNotSave="save"/>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Modal from './Modal'
export default{
    name:"Search",
    components:{
        Modal
    },
    data(){
        return{
            input:'',
            videos:[],
            url:'https://www.youtube.com/embed/',
            isList: true,
            activeModal: false
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
        },
        save(){
            this.activeModal= !this.activeModal
            console.log('save')
        }
    },
    computed:{
        isActive(){
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
        },
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
    &__panel{
        position: relative;
        &__input{
            margin-bottom: 0 !important;
        }
        &__icon{
            position: absolute;
            right: 100px;
            top:50%;
            transform: translate(0, -50%);
            width: 24px; 
            height: 22px;
            &:hover{
                stroke: red;
            }
        }
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
        svg{
            margin-right: 10px;
            width: 24px; 
            height: 24px;
        }
    }
}  
</style>