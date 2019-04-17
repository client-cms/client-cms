<template>
    <div class="box h">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-button type="info">新增合同</el-button>
            <el-form-item >
                <el-input v-model="formInline.user" placeholder="合同编号"></el-input>
            </el-form-item>
            <el-form-item >
                <el-input v-model="formInline.user" placeholder="合同名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="onSubmit">搜索</el-button>
            </el-form-item>
        </el-form>
        <template>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="name"
                        label="合同名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="number"
                        label="合同编号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="first"
                        label="甲方">
                </el-table-column>
                <el-table-column
                        prop="second"
                        label="乙方">
                </el-table-column>
                <el-table-column
                        prop="take"
                        label="生效日期">
                </el-table-column>
                <el-table-column
                        prop="cut"
                        label="截至日期">
                </el-table-column>
                <el-table-column
                        prop="client"
                        label="客户">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="200">
                    <template>
                        <el-button type="primary" icon="el-icon-edit" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>

<script>
    export default {
        name: "contract",
        data(){
            return{
                formInline: {
                    user: '',
                    region: ''
                },
                tableData: [{
                    name: '王小虎',
                    number: '1',
                    first:'甲方',
                    second:'乙方',
                    take:'2019-4-17',
                    cut:'2019-5-17',
                    client:'客户'
                }]
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>

</style>
<style>

</style>