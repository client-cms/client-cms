<template>
        <div>
            <template>
                <el-tabs :tab-position="tabPosition" style="height: 100%;">
                    <el-tab-pane label="文档分类管理">
                        <h3 style="font-size:24px;color:#409eff">文档分类管理</h3>
                        <el-button type="success" @click="dialogFormVisible = true" ><i class=" el-icon-plus"></i> 新增分类</el-button>

                        <el-dialog title="新增文档分类" :visible.sync="dialogFormVisible">
                            <el-form :model="form">
                                <el-form-item label="文档分类名称" :label-width="formLabelWidth">
                                    <el-input v-model="list.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="上级分类" :label-width="formLabelWidth">
                                    <el-tree
                                            :data="data"
                                            show-checkbox
                                            node-key="id"
                                            :default-expanded-keys="[2, 3]"
                                            :default-checked-keys="[5]"
                                            :props="defaultProps">
                                    </el-tree>

                                </el-form-item>
                            </el-form>

                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="Edit">确 定</el-button>
                            </div>
                        </el-dialog>
                            <el-dropdown trigger="click" v-for="v in list">
                                <el-button type="primary">
                                    {{v.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </el-button>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>{{v.down}}</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                    </el-tab-pane>
                    <el-tab-pane label="文档列表" style="font-size:24px;color:#409eff">
                        <h3 style="font-size:24px">文档列表</h3>
                        <div class="serves">
                            <a href="" class="plus">新增文档</a>
                            <div class="right">
                                <el-input placeholder="标题" v-model="input"></el-input>
                                <el-button type="primary" icon="el-icon-search" class="serve"></el-button>
                            </div>
                        </div>
                        <div class="client"></div>
                    </el-tab-pane>
                </el-tabs>
            </template>





        </div>
</template>


<script>
    export default {
        data() {
            return {
                tabPosition: 'left',
                input: '',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                list:[
                    {id:1,name:'打打打',down:'fa'},
                    {id:2,name:'计算机',down:'hsu'},
                ],
                data: [{
                    id: 1,
                    label: 'list.name',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                formLabelWidth: '120px',
                dialogFormVisible: false,


            };
                },

        methods: {

            openHTML() {
                this.$message({
                    dangerouslyUseHTMLString: true,
                });
            },
            Edit(){
                let id = 0;
                if (this.list.length > 0) {
                    id = this.list[this.list.length - 1].id + 1;
                }
                let name = this.list.name;
                let down = this.list.down;
                this.list.push({id: id, name: name,down: down})

            }


        }

    };


</script>

<style scoped>
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
  .el-button--success{
      background: #fcfcfc;
      width: 700px;
      height: 50px;
      border-color: #e1e1e1;
      color: #959595;
      font-size: 16px;
      margin-top: 20px;
  }
    .el-button.el-button--primary.el-dropdown-selfdefine{
        width: 700px;
        height: 50px;
        margin-top: 20px;
    }
    .el-popper{
        width: 700px;
        text-align: center;
    }
    .el-button--default,.el-button--primary{
        width: 50px;
        height: 30px;
    }
    .plus{
        display: block;
        width: 90px;
        height: 40px;
        background: #7d7d7d;
        font-size: 14px;
        color: #fff;
        text-align: center;
        line-height: 40px;
        border-radius: 10px;
    }
    .serves{
        display: flex;
        height: 40px;
        margin-top: 20px;
        justify-content: space-between;
        padding: 0 20px;
    }
    .right{
        display: flex;
    }
    .el-input.el-input__inner{
        width: 200px;
        height: 40px;
    }
    .el-button--primary.serve{
        width: 50px;
        height: 40px;
        margin-left: 10px;
    }
    .client{
        width: 80%;
        height: 180px;
        border: 1px solid #e1e1e1;
        border-radius: 10px;
        margin: 20px auto;
    }
</style>