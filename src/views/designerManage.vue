<style scoped>
    .title{
      margin-left: 10px;
      margin-top: 10px;
      margin-bottom: 5px;
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

    .panel{
      margin-top: 10px;
    }

    .conditionItem{
      width: 100px;
      margin-right: 30px;
    }

    .Button{
      width: 60px;
      margin-left: 10px;
      margin-right: 10px;
      text-align: center;
    }

    .addDesigner{
      margin-left: 10px;
      margin-top: 10px;
    }

    .layout-breadcrumb{
        padding: 10px 15px 10px;
    }
</style>
<template>
    <div>
      <div class="layout-breadcrumb">
          <Breadcrumb>
              <Breadcrumb-item id="BreadcrumbItem1" href="/"><Icon type="ios-home-outline"></Icon>首页</Breadcrumb-item>
              <Breadcrumb-item id="BreadcrumbItem2" href="/designerManage"><Icon type="social-buffer-outline"></Icon>设计师管理</Breadcrumb-item>
          </Breadcrumb>
      </div>
      <hr style="height:1px;border:none;border-top:1px dashed #dddee1;"/>
      <div style="margin-top:10px">
          <Button type="primary" class="addDesigner" @click="addDesigner">+ 添加设计师</Button>
          <Button type="primary" icon="ios-search" class="searchBtn">搜索</Button>
          <Input placeholder="请输入..." class="serarchText"></Input>
      </div>
      <div style="margin-top:20px">
          <Table border :columns="columns" :data="data"></Table>
          <Page class="page" :total="100" show-elevator></Page>
      </div>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
            data () {
                return {
                    columns: [
                        {
                            title: '用户名',
                            key: 'username',
                            align: 'center',
                            render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.username)
                            ]);
                        }
                        },
                        {
                            title: '真实姓名',
                            key: 'realname',
                            align: 'center',
                            render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.realname)
                            ]);
                        }
                        },
                        {
                            title: '描述',
                            key: 'describtion',
                            align: 'center'
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
                            username: 'cidic',
                            realname:'中意工业设计（湖南）有限责任公司',
                            describtion:'习近平新时代中国特色社会主义思想'
                        },{
                            username: 'cidic',
                            realname:'中意工业设计（湖南）有限责任公司',
                            describtion:'习近平新时代中国特色社会主义思想'
                        },{
                            username: 'cidic',
                            realname:'中意工业设计（湖南）有限责任公司',
                            describtion:'习近平新时代中国特色社会主义思想'
                        },{
                            username: 'cidic',
                            realname:'中意工业设计（湖南）有限责任公司',
                            describtion:'习近平新时代中国特色社会主义思想'
                        },{
                            username: 'cidic',
                            realname:'中意工业设计（湖南）有限责任公司',
                            describtion:'习近平新时代中国特色社会主义思想'
                        },{
                            username: 'cidic',
                            realname:'中意工业设计（湖南）有限责任公司',
                            describtion:'习近平新时代中国特色社会主义思想'
                        },{
                            username: 'cidic',
                            realname:'中意工业设计（湖南）有限责任公司',
                            describtion:'习近平新时代中国特色社会主义思想'
                        },{
                            username: 'cidic',
                            realname:'中意工业设计（湖南）有限责任公司',
                            describtion:'习近平新时代中国特色社会主义思想'
                        },{
                            username: 'cidic',
                            realname:'中意工业设计（湖南）有限责任公司',
                            describtion:'习近平新时代中国特色社会主义思想'
                        },{
                            username: 'cidic',
                            realname:'中意工业设计（湖南）有限责任公司',
                            describtion:'习近平新时代中国特色社会主义思想'
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
                },
                ButtonClick(){
                  alert('Button click');
                },
                addMaterial(){
                  this.$router.push('addMaterial');
                }
            }
        }
</script>
