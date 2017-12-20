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

  .tag{
    width: 45px;
    height: 25px;
    line-height: 25px;
    border: dashed 1px #c7c7ce;
    display: inline-block;
    margin: 8px;
    text-align: center;
    font-size: 12px;
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
            <div class="tagSection">
              <Button type="text" class="conditionItem">种类：</Button>
              <div class="tag" v-for="item in category" @click="TagClick" :id="0" name="categoryName">{{item}}</div>
              </div>
            <div class="tagSection">
              <Button type="text" class="conditionItem">简单-复杂：</Button>
              <div class="tag" v-for="item in style1" @click="TagClick" :id="0" name="style1Name">{{item}}</div>
            </div>

            <div class="tagSection">
              <Button type="text" class="conditionItem">硬朗-圆润：</Button>
              <div class="tag" v-for="item in style2" @click="TagClick" :id="0" name="style2Name">{{item}}</div>
            </div>
            <div class="tagSection">
              <Button type="text" class="conditionItem">冷酷-温暖：</Button>
              <div class="tag" v-for="item in style3" @click="TagClick" :id="0" name="style3Name">{{item}}</div>
            </div>
          </div>
          <div style="text-align:center;margin-top:30px" id="arrowArea" @click="arrowAreaClick"><Icon id="arrowIcon" type="chevron-up"></Icon></div>
        </Card>
      </div>
      <div style="margin-top:10px">
          <Table border :columns="columns" :data="data"></Table>
          <Page class="page" :total="dataCount" :page-size="pageSize" show-elevator @on-change="pageChange"></Page>
      </div>
    </div>
</template>
<script>
import $ from 'jquery'
import materialImage from '../resources/image/material-1.png'
var collapse = 1;
var categoryCondition = "";
var style1Condition = "";
var style2Condition = "";
var style3Condition = "";

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
                category:['艺术品','建筑','动物','植物','风景'],
                style1:[-3,-2.5,-2,-1.5,-1,-0.5,0,0.5,1,1.5,2,2.5,3],
                style2:[-3,-2.5,-2,-1.5,-1,-0.5,0,0.5,1,1.5,2,2.5,3],
                style3:[-3,-2.5,-2,-1.5,-1,-0.5,0,0.5,1,1.5,2,2.5,3],
                dataCount:300,
                pageSize:10
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
            TagClick(event){
              var tagValue = $(event.currentTarget).text();
              var categoryName = $(event.currentTarget).attr('name');
              var id = $(event.currentTarget).attr('id');

              if (id == 0){
                $(event.currentTarget).css({'background-color':'#2d8cf0','color':'white'});
                $(event.currentTarget).attr('id','1');
                if(categoryName == 'categoryName'){
                  categoryCondition = categoryCondition + tagValue + ",";
                }
                else if (categoryName == 'style1Name') {
                  style1Condition = style1Condition + tagValue + ",";
                }
                else if (categoryName == 'style2Name') {
                  style2Condition = style2Condition + tagValue + ",";
                }
                else if (categoryName == 'style3Name') {
                  style3Condition = style3Condition + tagValue + ",";
                }
              }
              else{
                $(event.currentTarget).css({'background-color':'#FFFFFF','color':'#495060'});
                $(event.currentTarget).attr('id','0');
                if(categoryName == 'categoryName'){
                  categoryCondition = categoryCondition.split(tagValue + ",").join("");
                }
                else if (categoryName == 'style1Name') {
                  style1Condition = style1Condition.split(tagValue + ",").join("");
                }
                else if (categoryName == 'style2Name') {
                  style2Condition = style2Condition.split(tagValue + ",").join("");
                }
                else if (categoryName == 'style3Name') {
                  style3Condition = style3Condition.split(tagValue + ",").join("");
                }
              }
              console.log(categoryCondition);
              console.log(style1Condition);
              console.log(style2Condition);
              console.log(style3Condition);
            },
            addMaterial(){
              this.$router.push('addMaterial');
            },
            pageChange(pageNum){
              console.log(pageNum);
              //this.$options.methods.loadMatchData(10,1);
              //this.loadMatchData(10,2);
            },

            loadMatchData(pageSize,pageNum){

              let limit = pageSize;
              let offset = pageSize * (pageNum - 1);
              this.$Loading.start();
              $.ajax({
                type: 'POST',
                url: 'url',
                data: {limit: limit, offset:offset},
                dataType: 'json',
                success: function(result){
                  this.$Loading.finish();
                },
                error:function (XMLHttpRequest, textStatus, errorThrown) {
                  this.$Loading.error();
                }

              });
            },
            loadMatchBySearchData(keyward,pageSize,pageNum){
              let limit = pageSize;
              let offset = pageSize * (pageNum - 1);
              this.$Loading.start();
              $.ajax({
                type: 'POST',
                url: 'url',
                data: {limit: limit, offset:offset,keyward:keyward},
                dataType: 'json',
                success: function(result){
                  this.$Loading.finish();
                },
                error:function (XMLHttpRequest, textStatus, errorThrown) {
                  this.$Loading.error();
                }

              });
            },
            arrowAreaClick(){
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
            }
        },
        created(){
          //第一次加载初始化表格数据
          categoryCondition = "";
          style1Condition = "";
          style2Condition = "";
          style3Condition = "";
          //this.loadMatchData(10,12);
        }

    }
</script>
