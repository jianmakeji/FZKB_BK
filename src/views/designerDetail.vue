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
          <Page class="page" :total="dataCount" :page-size="pageSize" show-elevator></Page>
      </div>
    </div>
</template>
<script>
import materialImage from '../resources/image/material-1.png'
  let materialColumns = [
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
        title: '类别',
        align: 'center',
        key: 'category'
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
    }];

    let matchColumns =  [
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
    ];

    export default {
        data () {
            return {
              columns: materialColumns,
              data: [
                  {
                      pic: materialImage,
                      category:'植物',
                      number:'4-6',
                      style1:'0.5',
                      style2:'0.5',
                      style3:'2',
                      createDate:'2017-11-22'
                  },
                  {
                      pic: materialImage,
                      category:'植物',
                      number:'4-6',
                      style1:'0.5',
                      style2:'0.5',
                      style3:'2',
                      createDate:'2017-11-22'
                  },
                  {
                      pic: materialImage,
                      category:'植物',
                      number:'4-6',
                      style1:'0.5',
                      style2:'0.5',
                      style3:'2',
                      createDate:'2017-11-22'
                  },
                  {
                      pic: materialImage,
                      category:'植物',
                      number:'4-6',
                      style1:'0.5',
                      style2:'0.5',
                      style3:'2',
                      createDate:'2017-11-22'
                  },
                  {
                      pic: materialImage,
                      category:'植物',
                      number:'4-6',
                      style1:'0.5',
                      style2:'0.5',
                      style3:'2',
                      createDate:'2017-11-22'
                  }

              ],
              typeChoice:'灵感素材',
            }
        },
        methods:{
          radioChange(value){
            if(value == '灵感素材'){

            }
            else if (value == '搭配'){

              this.columns = matchColumns;

              let matchData = [
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
              ];
              this.data = matchData;
            }
          },
          loadDesignerData(pageSize,pageNum){
            console.log(pageSize,pageNum);

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
          loadDesignerBySearchData(keyward,pageSize,pageNum){
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
          }
        },
        created(){
          //第一次加载初始化表格数据
        }
    }
</script>
