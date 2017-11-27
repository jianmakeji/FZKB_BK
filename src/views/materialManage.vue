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

  .tagSection{
    margin-top:5px;
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
            <Breadcrumb-item id="BreadcrumbItem2" href="#"><Icon type="social-buffer-outline"></Icon>灵感素材管理</Breadcrumb-item>
        </Breadcrumb>
    </div>
    <hr style="height:1px;border:none;border-top:1px dashed #dddee1;"/>
    <div>
        <Button type="primary" class="addMaterial" @click="addMaterial">+ 新建素材</Button>
        <Button type="primary" icon="ios-search" class="searchBtn">搜索</Button>
        <Input placeholder="请输入..." class="serarchText"></Input>
    </div>
    <div class="panel">
      <Card>
        <p slot="title">
            <Icon type="eye"></Icon>
            筛选面板
        </p>
        <div id="conditionPanel">
          <p class="tagSection">
            <Button type="text" class="conditionItem">种类：</Button>
            <Button type="dashed" v-on:click="ButtonClick">艺术品</Button>
            <Button type="dashed" >建筑</Button>
            <Button type="dashed" >动物</Button>
            <Button type="dashed" >植物</Button>
            <Button type="dashed" >风景</Button>
          </p>
          <p class="tagSection">
            <Button type="text" class="conditionItem">简单-复杂：</Button>
            <Button type="dashed" >-3</Button>
            <Button type="dashed" >-2.5</Button>
            <Button type="dashed" >-2</Button>
            <Button type="dashed" >-1.5</Button>
            <Button type="dashed" >-1</Button>
            <Button type="dashed" >-0.5</Button>
            <Button type="dashed" >0</Button>
            <Button type="dashed" >0.5</Button>
            <Button type="dashed" >1</Button>
            <Button type="dashed" >1.5</Button>
            <Button type="dashed" >2</Button>
            <Button type="dashed" >2.5</Button>
            <Button type="dashed" >3</Button>
          </p>

          <p class="tagSection">
            <Button type="text" class="conditionItem">硬朗-圆润：</Button>
            <Button type="dashed" >-3</Button>
            <Button type="dashed" >-2.5</Button>
            <Button type="dashed" >-2</Button>
            <Button type="dashed" >-1.5</Button>
            <Button type="dashed" >-1</Button>
            <Button type="dashed" >-0.5</Button>
            <Button type="dashed" >0</Button>
            <Button type="dashed" >0.5</Button>
            <Button type="dashed" >1</Button>
            <Button type="dashed" >1.5</Button>
            <Button type="dashed" >2</Button>
            <Button type="dashed" >2.5</Button>
            <Button type="dashed" >3</Button>
          </p>
          <p class="tagSection">
            <Button type="text" class="conditionItem">冷酷-温暖：</Button>
            <Button type="dashed" >-3</Button>
            <Button type="dashed" >-2.5</Button>
            <Button type="dashed" >-2</Button>
            <Button type="dashed" >-1.5</Button>
            <Button type="dashed" >-1</Button>
            <Button type="dashed" >-0.5</Button>
            <Button type="dashed" >0</Button>
            <Button type="dashed" >0.5</Button>
            <Button type="dashed" >1</Button>
            <Button type="dashed" >1.5</Button>
            <Button type="dashed" >2</Button>
            <Button type="dashed" >2.5</Button>
            <Button type="dashed" >3</Button>
          </p>
        </div>
        <div style="text-align:center;margin-top:10px" id="arrowArea"><Icon id="arrowIcon" type="chevron-up"></Icon></div>
      </Card>
    </div>
    <div style="margin-top:10px">
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
                        title: '图片',
                        key: 'pic',
                        render: (h, params) => {
                            return
                                h('img', {
                                  attrs:{
                                    src:params.row.pic
                                  },
                                  
                                    style: {
                                        width: '100px',
                                        height:'100px'
                                    }
                                });
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
                    }

                ],
                value1: '1'
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

    $(document).ready(function(){
      BreadcrumbItem2.to = '/materialManage';
      var collapse = 1;
      $("#arrowArea").click(function(){
        if (collapse == 1){
          $("#conditionPanel").animate({
            height:'5px'
          }, function() {
            $("#conditionPanel").hide();
          });
          $("#arrowIcon").removeClass("ivu-icon-chevron-up");
          $("#arrowIcon").addClass("ivu-icon-chevron-down");
          collapse = 0;
        }
        else{
          $("#conditionPanel").show();
          $("#conditionPanel").animate({
            height:'150px'
          });
          $("#arrowIcon").removeClass("ivu-icon-chevron-down");
          $("#arrowIcon").addClass("ivu-icon-chevron-up");
          collapse = 1;
        }
      });
    });
</script>
