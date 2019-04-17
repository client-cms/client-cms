<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="4">
                    <h3 style="height: 60px; line-height: 60px">VICTOR 后台管理系统</h3>
                </el-col>
                <el-col :span="10">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                             @select="handleSelect">
                        <el-menu-item index="1">个人中心</el-menu-item>
                        <el-menu-item index="2" >密码修改</el-menu-item>
                        <el-menu-item index="3" >消息中心</el-menu-item>

                    </el-menu>
                </el-col>
                <el-col :span="10">
                    <el-menu class="el-menu-demo" mode="horizontal"
                             @select="handleSelect">
                        <el-menu-item index="2" class="message">退出登录</el-menu-item>
                        <el-menu-item index="1" class="message"></el-menu-item>
                        <el-menu-item index="3" class="message">

                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>

        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-row class="tac">
                    <el-col :span="24">
                        <el-menu
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose"
                                :router=true
                                default-active="1"
                                >
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-document"></i>
                                    <span>客户管理</span>
                                </template>
                                <el-menu-item index="/mains/clientinsert">添加客户</el-menu-item>
                                <el-menu-item index="/mains/clientquery">查看客户</el-menu-item>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-document"></i>
                                    <span>销售管理</span>
                                </template>
                                <el-menu-item index="/mains/sellinsert">添加任务</el-menu-item>
                                <el-menu-item index="/mains/sellquery">查看任务</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="/mains/contract">
                                <i class="el-icon-menu"></i>
                                <span slot="title">合同管理</span>
                            </el-menu-item>
                            <el-submenu index="6">
                                <template slot="title">
                                    <i class="el-icon-document"></i>
                                    <span>轮播管理</span>
                                </template>
                                <el-menu-item index="/mains/bannerinsert">添加轮播</el-menu-item>
                                <el-menu-item index="/mains/bannerquery">查看轮播</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>
    export default {
        name: "mains",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .message{
        float: right;
    }
    .message img{
        width: 50px;
        height: 50px;
        display: block;
        border-radius: 50%;
        margin-top: 5px;
    }
</style>