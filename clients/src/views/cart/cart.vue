<template>
    <div>
        <div class="c_box">
            <div class="c_boxs">销售任务</div>
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">
                    <el-button type="info" index="caetInsert">新建任务</el-button>
                </el-menu-item>
                <el-menu-item>
                    <div class="block">
                        <el-date-picker
                                v-model="value2"
                                type="daterange"
                                align="right"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :picker-options="pickerOptions">
                        </el-date-picker>
                    </div>
                </el-menu-item>
            <el-button el-button type="info" icon="el-icon-search" circle></el-button>
        </el-menu>
         <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="部门"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="剩余天数"
        >
      </el-table-column>
      <el-table-column
        prop="date"
        label="具体时间"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="已达标"
        >
      </el-table-column>
        <el-table-column
        prop="name"
        label="未达标"
        >
      </el-table-column>  <el-table-column
        prop="name"
        label="关联产品"
        >
      </el-table-column>  <el-table-column
        prop="name"
        label="目标"
        >
      </el-table-column>  <el-table-column
        prop="name"
        label="完成度"
        >
      </el-table-column>  <el-table-column
        prop="name"
        label="操作"
        >
      </el-table-column> 
    </el-table>
    </div>
</template>


<script>
 import Goods from '../../api/cart.js';
    export default {
        data() {
            return {
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value1: '',
                value2: '',
                
                
            };
        },
        mounted:{

        }
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