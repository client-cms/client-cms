<template>
  <div>
    <div class="c_box">
      <div class="c_boxs">销售任务</div>
    </div>
    <el-menu
     
      class="el-menu-demo"
      mode="horizontal"
      
    >
      <el-menu-item index="1">
        <el-button type="info" >新建任务</el-button>
      </el-menu-item>
      <el-menu-item>
        <div class="block">
          <el-date-picker
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
      </el-menu-item>
      <el-button el-button type="info" icon="el-icon-search" circle></el-button>
    </el-menu>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="depa" label="部门"></el-table-column>
      <el-table-column prop="lady" label="剩余天数"></el-table-column>
      <el-table-column prop="stime" label="具体时间"></el-table-column>
      <el-table-column prop="standard" label="达标没有"></el-table-column>
      <el-table-column prop="about" label="关联产品"></el-table-column>
      <el-table-column prop="activity" label="活动形式"></el-table-column>
      <el-table-column prop="aims" label="目标"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button  type="text" size="small">编辑</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import Cart from '../../api/cart.js';

 let {query}=Cart;
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      tableData: [{
        depa: "",
        lady: "",
        stime: "",
        standard: "",
        about: "",
        activity: "",
        aims: ""
      }]
    };
  },
  methods: {
     getData(){
          query().then(res=>{
              this.tableData=res.data.data;
          })
      }
  },
     
  
  beforeMount() {
     this.getData()
  },
};
</script>
<style scoped>
.c_box {
  width: 1295px;
  height: 70px;
  background: #fafafa;
}
.c_boxs {
  width: 918px;
  height: 40px;
  float: left;
  margin-top: 15px;
  font-size: 24px;
  color: #00b8ec;
}
</style>