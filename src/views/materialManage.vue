<style scoped>
  .addMaterial{
    margin-left: 10px;
    margin-top: 10px;
  }

  .serarchText{
    float:right;
    margin-top: 10px;
    width: 300px;
    margin-right:10px
  }

  .searchBtn{
    float:right;
    margin-right:10px;
    margin-top:10px
  }

  .page{
    float: right;
    margin-top: 10px;
  }
</style>
<template>
  <div>
    <div>
        <Button type="primary" class="addMaterial">+ 新建素材</Button>
        <Button type="primary" icon="ios-search" class="searchBtn">搜索</Button>
        <Input placeholder="请输入..." class="serarchText"></Input>
    </div>
    <div style="margin-top:10px">
        <Table border :columns="columns" :data="data"></Table>
        <Page class="page" :total="100" show-elevator></Page>
    </div>
  </div>
</template>
<script>
export default {
        data () {
            return {
                columns: [
                    {
                        title: '图片',
                        key: 'pic',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.pic)
                            ]);
                        }
                    },
                    {
                        title: '类别',
                        key: 'category'
                    },
                    {
                        title: '编号',
                        key: 'number'
                    },
                    {
                        title: '简单-复杂',
                        key: 'style1'
                    },
                    {
                        title: '硬朗-圆润',
                        key: 'style2'
                    },
                    {
                        title: '冷酷-温暖',
                        key: 'style3'
                    },
                    {
                        title: '建档日期',
                        key: 'createDate'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 180,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [

                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style:{
                                      marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.update(params.index)
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        pic: 'John Brown',
                        category:'植物',
                        number:'4-6',
                        style1:'0.5',
                        style2:'0.5',
                        style3:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'John Brown',
                        category:'植物',
                        number:'4-6',
                        style1:'0.5',
                        style2:'0.5',
                        style3:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'John Brown',
                        category:'植物',
                        number:'4-6',
                        style1:'0.5',
                        style2:'0.5',
                        style3:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'John Brown',
                        category:'植物',
                        number:'4-6',
                        style1:'0.5',
                        style2:'0.5',
                        style3:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'John Brown',
                        category:'植物',
                        number:'4-6',
                        style1:'0.5',
                        style2:'0.5',
                        style3:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'John Brown',
                        category:'植物',
                        number:'4-6',
                        style1:'0.5',
                        style2:'0.5',
                        style3:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'John Brown',
                        category:'植物',
                        number:'4-6',
                        style1:'0.5',
                        style2:'0.5',
                        style3:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'John Brown',
                        category:'植物',
                        number:'4-6',
                        style1:'0.5',
                        style2:'0.5',
                        style3:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'John Brown',
                        category:'植物',
                        number:'4-6',
                        style1:'0.5',
                        style2:'0.5',
                        style3:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'John Brown',
                        category:'植物',
                        number:'4-6',
                        style1:'0.5',
                        style2:'0.5',
                        style3:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'John Brown',
                        category:'植物',
                        number:'4-6',
                        style1:'0.5',
                        style2:'0.5',
                        style3:'2',
                        createDate:'2017-11-22'
                    }

                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
                })
            },
            update (index) {

            },
            remove (index) {
                this.data.splice(index, 1);
            }
        }
    }
</script>
