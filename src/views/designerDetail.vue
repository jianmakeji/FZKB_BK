<style scoped>
  .page{
    float: right;
    margin-top: 10px;
  }
</style>
<template>
    <div class="content">
      <div class="layout-breadcrumb">
          <Breadcrumb>
              <Breadcrumb-item id="BreadcrumbItem1" href="/"><Icon type="ios-home-outline"></Icon>首页</Breadcrumb-item>
              <Breadcrumb-item id="BreadcrumbItem2" href="/designerManage"><Icon type="social-buffer-outline"></Icon>设计师管理</Breadcrumb-item>
              <Breadcrumb-item id="BreadcrumbItem3"><Icon type="hammer"></Icon>设计师详情</Breadcrumb-item>
          </Breadcrumb>
      </div>
      <hr style="height:1px;border:none;border-top:1px dashed #dddee1;"/>
      <div>
        <div style="display:inline-block;margin-left:10px;margin-top:15px;color:#495060">设计师名称</div>
        <RadioGroup style="float:right;margin-right: 10px;margin-top:10px" v-model="typeChoice" type="button" @on-change="radioChange">
            <Radio label="灵感素材"></Radio>
            <Radio label="搭配"></Radio>
        </RadioGroup>
      </div>
      <div style="margin-top:15px">
          <Table border :columns="columns" :data="data"></Table>
          <Page class="page" v-if="materialPageVisible" :current="materialCurrentPage" :total="materialDataCount" :page-size="pageSize" @on-change="materialPageChange" show-elevator></Page>
          <Page class="page" v-if="matchPageVisible" :current="matchCurrentPage" :total="matchDataCount" :page-size="pageSize" @on-change="matchPageChange" show-elevator></Page>
      </div>
      <Spin size="large" fix v-if="spinVisible"></Spin>
    </div>
</template>
<script>
import util from '../libs/util';
import materialImage from '../resources/image/material-1.png';

  let materialColumns = [
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
            title: '简单-复杂',
            align: 'center',
            key: 'style1'
        },
        {
            title: '硬朗-圆润',
            align: 'center',
            key: 'style2'
        },
        {
            title: '冷酷-温暖',
            align: 'center',
            key: 'style3'
        },
        {
            title: '建档日期',
            align: 'center',
            key: 'createTime'
        }
    ];

    let matchColumns =  [
      {
          title: '图片',
          key: 'pic',
          align: 'center',
          render: (h, params) => {
              return  h('img', {
                      attrs: {
                        src: materialImage
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
          key: 'underwear',
          align: 'center',
          render: (h, params) => {
              return  h('img', {
                      attrs: {
                        src: params.row.underwear
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
          key: 'greatcoat',
          align: 'center',
          render: (h, params) => {
              return  h('img', {
                      attrs: {
                        src: params.row.greatcoat
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
          key: 'trousers',
          align: 'center',
          render: (h, params) => {
              return  h('img', {
                      attrs: {
                        src: params.row.trousers
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
          key: 'username'
      },
      {
          title: '创建时间',
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
                          type: 'info',
                          size: 'small'
                      },
                      style: {
                          marginRight: '5px'
                      },
                      on: {
                          click: () => {
                              this.show(params.row.uwId,params.row.gcId,params.row.trId);
                          }
                      }
                  }, '查看')
              ]);
          }
      }
    ];

    export default {
        data () {
            return {
              columns: materialColumns,
              data: [

              ],
              typeChoice:'灵感素材',
              materialDataCount:0,
              matchDataCount:0,
              pageSize:10,
              materialCurrentPage:0,
              matchCurrentPage:0,
              materialPageVisible:true,
              matchPageVisible:false,
            }
        },
        methods:{
          radioChange(value){
            if(value == '灵感素材'){
              this.typeChoice = "灵感素材";
              this.columns = materialColumns;
              this.loadMaterialByPage(this.pageSize,(this.materialCurrentPage - 1)*this.pageSize);
              this.materialPageVisible = true;
              this.matchPageVisible = false;
            }
            else if (value == '搭配'){
              this.typeChoice = "搭配";
              this.columns = matchColumns;
              this.loadMatchData(this.pageSize,(this.matchCurrentPage - 1)*this.pageSize);
              this.matchPageVisible = true;
              this.materialPageVisible = false;
            }
          },
          materialPageChange(pageNum){
              this.materialCurrentPage = pageNum;
              this.loadMaterialByPage(this.pageSize,(pageNum - 1)*this.pageSize);
          },
          matchPageChange(pageNum){
              this.matchCurrentPage = pageNum;
              this.loadMatchData(this.pageSize,(pageNum - 1)*this.pageSize);
          },
          loadMaterialByPage(limit,offset){
            this.spinVisible = true;
            let that = this;
            let message = this.$Message;
            util.ajax.get('/material/getDataByPage', {
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
                      that.materialDataCount = response.data.iTotalRecords;
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
          loadMatchData(limit,offset){
            this.spinVisible = true;
            let that = this;
            let message = this.$Message;
            util.ajax.get('/match/getDataByPage', {
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
                      that.matchDataCount = response.data.iTotalRecords;
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
        },
        created(){
          this.materialCurrentPage = 1;
          this.matchCurrentPage = 1;
          this.loadMaterialByPage(10,0);
        }
    }
</script>
