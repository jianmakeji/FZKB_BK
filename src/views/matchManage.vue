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
              <Breadcrumb-item id="BreadcrumbItem2" href="/matchManage"><Icon type="social-buffer-outline"></Icon>搭配管理</Breadcrumb-item>
          </Breadcrumb>
      </div>
      <hr style="height:1px;border:none;border-top:1px dashed #dddee1;"/>
      <div>
          <Button type="text" class="title" >搭配管理</Button>
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
import materialImage from '../resources/image/material-1.png'

export default {
        data () {
            return {
                columns: [
                    {
                        title: '图片',
                        key: 'pic',
                        align: 'center',
                        render: (h, params) => {
                            return  h('img', {
                                    attrs: {
                                      src: params.row.pic
                                    },
                                    style: {
                                      width:'100px',
                                      height:'100px'
                                    }
                                  })
                        }
                    },
                    {
                        title: '内搭素材',
                        key: 'innerMaterial',
                        align: 'center',
                        render: (h, params) => {
                            return  h('img', {
                                    attrs: {
                                      src: params.row.innerMaterial
                                    },
                                    style: {
                                      width:'100px',
                                      height:'100px'
                                    }
                                  })
                        }
                    },
                    {
                        title: '外搭素材',
                        key: 'outterMaterial',
                        align: 'center',
                        render: (h, params) => {
                            return  h('img', {
                                    attrs: {
                                      src: params.row.outterMaterial
                                    },
                                    style: {
                                      width:'100px',
                                      height:'100px'
                                    }
                                  })
                        }
                    },
                    {
                        title: '下装素材',
                        key: 'underMaterial',
                        align: 'center',
                        render: (h, params) => {
                            return  h('img', {
                                    attrs: {
                                      src: params.row.underMaterial
                                    },
                                    style: {
                                      width:'100px',
                                      height:'100px'
                                    }
                                  })
                        }
                    },
                    {
                        title: '设计师',
                        align: 'center',
                        key: 'designer'
                    },
                    {
                        title: '创建时间',
                        align: 'center',
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
                                }, '查看')
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        pic: 'http://oaycvzlnh.bkt.clouddn.com/5963804709496.png',
                        innerMaterial:materialImage,
                        outterMaterial:materialImage,
                        underMaterial:materialImage,
                        designer:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'http://oaycvzlnh.bkt.clouddn.com/5963804709496.png',
                        innerMaterial:materialImage,
                        outterMaterial:materialImage,
                        underMaterial:materialImage,
                        designer:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'http://oaycvzlnh.bkt.clouddn.com/5963804709496.png',
                        innerMaterial:materialImage,
                        outterMaterial:materialImage,
                        underMaterial:materialImage,
                        designer:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'http://oaycvzlnh.bkt.clouddn.com/5963804709496.png',
                        innerMaterial:materialImage,
                        outterMaterial:materialImage,
                        underMaterial:materialImage,
                        designer:'2',
                        createDate:'2017-11-22'
                    },
                    {
                        pic: 'http://oaycvzlnh.bkt.clouddn.com/5963804709496.png',
                        innerMaterial:materialImage,
                        outterMaterial:materialImage,
                        underMaterial:materialImage,
                        designer:'2',
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
