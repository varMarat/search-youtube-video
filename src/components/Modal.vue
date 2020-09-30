<template>
    <el-dialog
        title="Сохранить запрос"
        :visible.sync="active"
        width="30%"
        center
        :modal="false"
        :close-on-click-modal="false"
        :show-close="false"
        >
        <p>Запрос</p>
        <el-input :placeholder="getQuery" v-model="inputQuery"></el-input>
        <p>Название</p>
        <el-input placeholder="Укажите название" v-model="inputTitle"></el-input>
        <p>Сортировать по</p>
        <el-select v-model="value" placeholder="Select">
        <el-option
            v-for="(item, index) in options"
            :key="index"
            :label="item.label"
            :value="item.value"
            width="100%">
        </el-option>
  </el-select>
  <div class="block">
    <el-slider
      v-model="valueSlider"
      show-input>
    </el-slider>
  </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="doNotSave">Не сохранять</el-button>
            <el-button @click="saveQuerie" type="primary">Сохранить</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default{
    name: 'Modal',
    props:['active'],
    data(){
        return{
            valueSlider:0,
            inputQuery:'',
            inputTitle:'',
            options: [
            {
                value: 'Option1',
                label: 'Option1'
            }, 
            {
                value: 'Option2',
                label: 'Option2'
            },
            ],
            value: 'value'
        }
    },
    methods : {
        doNotSave(){
            this.$emit('doNotSave')
        },
        saveQuerie(){
            this.$store.commit('requestList', {
                query: this.inputQuery,
                title: this.inputTitle!=''? this.$store.getters.doneSavedQuery:this.inputTitle,
                numberOfVideos: this.valueSlider
            })
            this.$emit('doNotSave')
        }
    },
    computed:{
        getQuery(){
            return this.$store.getters.doneSavedQuery
        }
    }
}
</script>

<style lang="scss">
  
</style>