<template>
<div class=''>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="部门">
    <el-input v-model="form.depa"></el-input>
  </el-form-item>
  <el-form-item label="剩余天数">
    <el-input v-model="form.lady"></el-input>
  </el-form-item>

  <el-form-item label="具体时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.stime" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
   
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
 import Cart from '../../api/cart.js';

 let {insert}=Cart;
  export default {
    data() {
      return {
        form: {
          depa:'',
          lady:'',
          stime:'',
          standard:'',
          about:'',
          activity:'',
          aims:'',
        }
      }
    },
    
    methods: {
      onSubmit(){
      insert(this.form).then(res=>{
        if(res.data.code==0){
          this.$message.success(res.data.msg)
        }else{
          this.$message.warning(res.data.msg)
        }
      })
    },
    }
  }
</script>
<style  scoped>

</style>