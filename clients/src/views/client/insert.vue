<template>
    <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="客户名称:">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="公司法人:">
            <el-input v-model="form.legal"></el-input>
        </el-form-item>
        <el-form-item label="公司网址:">
            <el-input v-model="form.url"></el-input>
        </el-form-item>
        <el-form-item label="公司规模:">
            <el-input v-model="form.scale"></el-input>
        </el-form-item>
        <el-form-item label="来源:">
            <el-input v-model="form.source"></el-input>
        </el-form-item>
        <el-form-item label="行业:">
            <el-input v-model="form.trade"></el-input>
        </el-form-item>
        <el-form-item label="地区:">
            <el-input v-model="form.area"></el-input>
        </el-form-item>
        <el-form-item label="地址:">
            <el-input v-model="form.site"></el-input>
        </el-form-item>
        <el-form-item label="阶段:">
                <el-select v-model="form.stage" placeholder="请选择活动区域">
                    <el-option :label="item.name" :value="item.sid" v-for="(item,index) in stageDate" :key="index"></el-option>
                </el-select>
        </el-form-item>
        <el-form-item label="手机号:">
            <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="意向:">
            <el-radio-group v-model="form.intention">
                <el-radio label="强烈" value="强烈"></el-radio>
                <el-radio label="一般" value="一般"></el-radio>
                <el-radio label="已合作" value="已合作"></el-radio>
                <el-radio label="无" value="无"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="下次回访时间:">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.nvisit" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="头像:">
            <el-upload
                    class="avatar-uploader"
                    action="/upload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    >
                <img v-if="headimg" :src="headimg" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label="备注:">
            <el-input v-model="form.remark"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import Client from '../../api/client';
    let {stagequery,insert}=Client;
    export default {
        name: "insert",
        data() {
            return {
                form: {
                    name: '',
                    legal:'',
                    url:'',
                    scale:'',
                    source:'',
                    trade:'',
                    area:'',
                    site:'',
                    stage:'',
                    phone:'',
                    intention:'',
                    nvisit:'',
                    headimg:'',
                    remark:'',
                },
                headimg:'',
                stageDate:[],
            }
        },
        methods: {
            onSubmit() {
                insert(this.form).then(res=>{
                    if(res.data.code==0){
                        this.$message.success(res.data.msg);
                    }else {
                        this.$message.warning(res.data.msg);
                    }
                })
            },
            handleAvatarSuccess(res, file) {
                this.headimg=res.url;
                this.form.headimg=res.url;
            },
            // 获取阶段数据
            stagequery(){
                stagequery().then(res=>{
                    if(res.data.code==0){
                        this.stageDate=res.data.data;
                    }
                })
            }
        },
        created() {
            this.stagequery();
        }
    }
</script>

<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>