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
            <Breadcrumb-item id="BreadcrumbItem2" href="#"><Icon type="social-buffer-outline"></Icon>灵感素材管理</Breadcrumb-item>
        </Breadcrumb>
    </div>
    <hr style="height:1px;border:none;border-top:1px dashed #dddee1;"/>
    <div>
        <Button type="primary" class="addMaterial" @click="addMaterial">+ 新建素材</Button>
        <Button type="primary" icon="ios-search" class="searchBtn" @click="searchData">搜索</Button>
        <Input placeholder="请输入..." class="serarchText" v-model="keyValue"></Input>
    </div>
    <div class="panel" v-show="conditionPanelVisible">
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
            <Button type="text" class="conditionItem">商务-休闲：</Button>
            <div class="tag" v-for="item in style1" @click="TagClick" :id="0" name="style1Name">{{item}}</div>
          </div>

          <div class="tagSection">
            <Button type="text" class="conditionItem">单色-杂色：</Button>
            <div class="tag" v-for="item in style2" @click="TagClick" :id="0" name="style2Name">{{item}}</div>
          </div>
          <div class="tagSection">
            <Button type="text" class="conditionItem">冷冬-暖夏：</Button>
            <div class="tag" v-for="item in style3" @click="TagClick" :id="0" name="style3Name">{{item}}</div>
          </div>
        </div>
        <div style="text-align:center;margin-top:30px" id="arrowArea" @click="arrowAreaClick"><Icon id="arrowIcon" type="chevron-up"></Icon></div>
      </Card>
    </div>
    <div style="margin-top:10px">
        <Table border :columns="columns" :data="data"></Table>
        <Page class="page" :total="dataCount" :page-size="pageSize" @on-change="pageChange" show-elevator></Page>
    </div>
    <Spin size="large" fix v-if="spinVisible"></Spin>
  </div>
</template>
<script>
import $ from 'jquery'
import util from '../libs/util';

var collapse = 1;
var categoryCondition = "";
var style1Condition = "";
var style2Condition = "";
var style3Condition = "";
var dataCondition = 0; //0：没有条件，查询全部 1：按照编号查询 2：按照标签查询
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
                                      src: params.row.imageUrl+"?x-oss-process=style/thumb-150"
                                    },
                                    style: {
                                      width:'100px',
                                      height:'100px'
                                    }
                                  })
                        }
                    },
                    {
                        title: '类别',
                        align: 'center',
                        key: 'categoryName'
                    },
                    {
                        title: '编号',
                        align: 'center',
                        key: 'number'
                    },
                    {
                        title: '商务-休闲',
                        align: 'center',
                        key: 'style1'
                    },
                    {
                        title: '单色-杂色',
                        align: 'center',
                        key: 'style2'
                    },
                    {
                        title: '冷冬-暖夏',
                        align: 'center',
                        key: 'style3'
                    },
                    {
                        title: '建档日期',
                        align: 'center',
                        key: 'createTime'
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
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style:{
                                      marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.$router.push('addMaterial/'+params.row.id);
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
                                            this.remove(params.row.id);
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data: [

                ],
                category:['艺术品','建筑','动物','植物','风景','外套','内搭','下装'],
                style1:[-3,-2.5,-2,-1.5,-1,-0.5,0,0.5,1,1.5,2,2.5,3],
                style2:[-3,-2.5,-2,-1.5,-1,-0.5,0,0.5,1,1.5,2,2.5,3],
                style3:[-3,-2.5,-2,-1.5,-1,-0.5,0,0.5,1,1.5,2,2.5,3],
                dataCount:0,
                pageSize:10,
                spinVisible:false,
                currentPage:0,
                keyValue:"",
                roleId:0,
                userId:0,
                conditionPanelVisible:true,
            }
        },
        methods: {
            remove (index) {
              this.spinVisible = true;
              let that = this;
              let message = this.$Message;
              util.ajax.delete('/material/deleteMaterial/'+index, {
                      headers: {
                          "Content-Type": "application/json"
                      }
                  })
                  .then(function(response) {
                      if (response.data.success == true) {
                        message.success("操作成功！");
                        that.loadMaterialByPage(that.pageSize,(that.currentPage - 1)*that.pageSize);
                      } else {
                        message.error(response.data.message);
                      }
                      that.spinVisible = false;
                  })
                  .catch(function(response) {
                      that.spinVisible = false;
                      message.error('获取数据操作失败!');
                  });
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
              this.currentPage = 1;
              let result1 = categoryCondition.length==0;
              let result2 = style1Condition.length==0;
              let result3 = style2Condition.length==0;
              let result4 = style3Condition.length==0;

              if (result1 && result2 && result3 && result4){
                    dataCondition = 0;
                    this.loadMaterialByPage(this.pageSize,0);
              }else{
                    dataCondition = 2;
                    this.loadMaterialByCondition(this.pageSize,0);
              }
            },
            searchData(){
              this.currentPage = 1;
              if (this.keyValue == ""){
                dataCondition = 0;
                this.loadMaterialByPage(this.pageSize,0);
              }else{
                dataCondition = 1;
                this.loadMatterialBySearchData(this.keyValue,0);
              }
            },
            addMaterial(){
              this.$router.push('addMaterial');
            },
            pageChange(pageNum){
              this.currentPage = pageNum;
              if (dataCondition == 0){
                this.loadMaterialByPage(this.pageSize,(pageNum - 1)*this.pageSize);
              }
              else if (dataCondition == 1){
                this.loadMatterialBySearchData(this.pageSize,(pageNum - 1)*this.pageSize);
              }
              else if (dataCondition == 2){
                this.loadMaterialByCondition(this.pageSize,(pageNum - 1)*this.pageSize);
              }

            },
            loadMaterialByPage(limit,offset){
              this.spinVisible = true;
              let that = this;
              let message = this.$Message;
              util.ajax.get('/material/getDataByPage', {
                      params:{
                        limit: limit,
                        offset: offset,
                        userId:that.userId,
                      }
                  }, {
                      headers: {
                          "Content-Type": "application/json"
                      }
                  })
                  .then(function(response) {
                      if (response.data.success == true) {
                        that.data = response.data.aaData;
                        that.dataCount = response.data.iTotalRecords;
                      } else {
                        message.error(response.data.message);
                      }
                      that.spinVisible = false;
                  })
                  .catch(function(response) {
                      that.spinVisible = false;
                      message.error('获取数据操作失败!');
                  });
            },
            loadMaterialByCondition(limit,offset){
              this.spinVisible = true;
              let that = this;
              let message = this.$Message;
              util.ajax.get('/material/getDataPageByTag', {
                      params:{
                        limit: limit,
                        offset: offset,
                        category:categoryCondition,
                        style1:style1Condition,
                        style2:style2Condition,
                        style3:style3Condition,
                        userId:that.userId,
                      }
                  }, {
                      headers: {
                          "Content-Type": "application/json"
                      }
                  })
                  .then(function(response) {
                      if (response.data.success == true) {
                        that.data = response.data.aaData;
                        that.dataCount = response.data.iTotalRecords;
                      } else {
                        message.error(response.data.message);
                      }
                      that.spinVisible = false;
                  })
                  .catch(function(response) {
                      that.spinVisible = false;
                      message.error('获取数据操作失败!');
                  });
            },
            loadMatterialBySearchData(number,pageNum){
              this.spinVisible = true;
              let that = this;
              let message = this.$Message;
              this.currentPage = pageNum;
              util.ajax.get('/material/getDataPageByNumber', {
                      params:{
                        limit: that.pageSize,
                        offset: that.pageSize * (pageNum - 1),
                        number:number,
                        userId:that.userId,
                      }
                  }, {
                      headers: {
                          "Content-Type": "application/json"
                      }
                  })
                  .then(function(response) {
                      if (response.data.success == true) {
                        that.data = response.data.aaData;
                        that.dataCount = response.data.iTotalRecords;
                      } else {
                        message.error(response.data.message);
                      }
                      that.spinVisible = false;
                  })
                  .catch(function(response) {
                      that.spinVisible = false;
                      message.error('获取数据操作失败!');
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
            },
        },
        created(){
            categoryCondition = "";
            style1Condition = "";
            style2Condition = "";
            style3Condition = "";
            //第一次加载初始化表格数据
            this.currentPage = 1;
            this.loadMaterialByPage(10,0);
            this.roleId = util.ajax.defaults.headers.common['roleId'];
            if (this.roleId == 0){
              this.userId = util.ajax.defaults.headers.common['userId'];
              this.conditionPanelVisible = false;
            }
            else{
              this.userId = 0;
              this.conditionPanelVisible = true;
            }
        }
    }

</script>
