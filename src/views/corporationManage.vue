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
              <Breadcrumb-item id="BreadcrumbItem2" href="/corporationManage"><Icon type="social-buffer-outline"></Icon>服装企业管理</Breadcrumb-item>
          </Breadcrumb>
      </div>
      <hr style="height:1px;border:none;border-top:1px dashed #dddee1;"/>
      <div style="margin-top:10px">
          <Button type="primary" class="addCorporation" @click="addCorporation">+ 添加服装企业</Button>
          <Button type="primary" icon="ios-search" class="searchBtn" @click="searchCorporation">搜索</Button>
          <Input placeholder="请输入..." class="serarchText" v-model="searchKey"></Input>
      </div>
      <div style="margin-top:20px">
          <Table border :columns="columns" :data="data"></Table>
          <Page class="page" :total="dataCount" :page-size="pageSize" @on-change="pageChange" show-elevator></Page>
      </div>
      <Spin size="large" fix v-if="spinVisible"></Spin>
    </div>
</template>
<script>
    import $ from 'jquery'
    import util from '../libs/util';
    export default {
            data () {
                return {
                    columns: [
                        {
                            title: '企业名',
                            key: 'name',
                            align: 'center',
                            width:'260px',
                            render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                        },
                        {
                            title: '联系地址',
                            key: 'address',
                            align: 'center',
                            width:'260px',
                            render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.address)
                            ]);
                        }
                        },
                        {
                            title: '联系人',
                            key: 'contact',
                            align: 'center'
                        },
                        {
                            title: '联系电话',
                            key: 'phone',
                            align: 'center',
                            width:'160px',
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
                                                this.$router.push('addCorporation/'+params.row.id);
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
                                                this.remove(params.row.id)
                                            }
                                        }
                                    }, '删除')
                                ]);
                            }
                        }
                    ],
                    data: [

                    ],
                    dataCount:0,
                    pageSize:10,
                    spinVisible:false,
                    currentPage:0,
                    searchKey:"",
                }
            },
            methods: {
                remove (index) {
                  this.spinVisible = true;
                  let that = this;
                  let message = this.$Message;
                  util.ajax.delete('/corporation/deleteCorporation/'+index, {
                          headers: {
                              "Content-Type": "application/json"
                          }
                      })
                      .then(function(response) {
                          if (response.data.success == true) {
                            message.success("操作成功！");
                            that.loadDesignerData(that.pageSize,(that.currentPage - 1)*that.pageSize);
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
                addCorporation(){
                  this.$router.push('addCorporation');
                },
                searchCorporation(){
                  this.loadCorporationBySearchData(this.searchKey,10,0);
                },
                pageChange(pageNum){
                  this.currentPage = pageNum;
                  if (this.searchKey == ''){
                    this.loadCorporationData(this.pageSize,(pageNum - 1)*this.pageSize);
                  }
                  else{
                    this.loadCorporationBySearchData(this.searchKey,this.pageSize,(pageNum - 1)*this.pageSize);
                  }
                },
                loadCorporationData(limit,offset){
                  this.spinVisible = true;
                  let that = this;
                  let message = this.$Message;
                  util.ajax.get('/corporation/getDataByPage', {
                          params:{
                            limit: limit,
                            offset: offset,
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
                loadCorporationBySearchData(name,limit,offset){
                  this.spinVisible = true;
                  let that = this;
                  let message = this.$Message;
                  util.ajax.get('/corporation/getCorporationByName', {
                          params:{
                            limit: limit,
                            offset: offset,
                            name:name
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
                }
            },
            created(){
              this.currentPage = 1;
              this.loadCorporationData(10,0);
            }
        }
</script>
