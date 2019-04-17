<template>
<div class=''>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="部门">
    <el-input v-model="form.department"></el-input>
  </el-form-item>
  <el-form-item label="剩余天数">
    <el-input v-model="form.lday"></el-input>
  </el-form-item>

  <el-form-item label="具体时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
<el-form-item label="达标没有">
    <el-switch v-model="form.standard"></el-switch>
  </el-form-item>
  <el-form-item label="关联产品">
       <el-input v-model="form.about"></el-input>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input  v-model="form.activity"></el-input>
  </el-form-item>
  <el-form-item label="目标">
    <el-input  v-model="form.aims"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </el-form-item>
</el-form>

</div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          department:'',
          lday:'',
          standard:'',
          about:'',
          activity:'',
          aims:'',
        }
      }
    },
    
    methods: {
      onSubmit(){
      console.log(1)
    },
    }
  }
</script>
<style  scoped>

</style>