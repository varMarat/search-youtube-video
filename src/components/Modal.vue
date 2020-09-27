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
        <el-input ></el-input>
        <p>Название</p>
        <el-input ></el-input>
        <p>Сортировать по</p>
        <el-select v-model="value" placeholder="Select">
        <el-option
            v-for="item in options"
            :key="item.value"
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
            <el-button type="primary">Сохранить</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default{
    name: 'Modal',
    props:['active'],
    data(){
        return{
            valueSlider:0
        }
    },
    methods:{
        doNotSave(){
            this.$emit('doNotSave')
        }
    }
}
</script>

<style lang="scss">
  
</style>