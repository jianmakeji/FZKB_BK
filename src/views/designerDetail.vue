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
        <RadioGroup style="float:right;margin-right: 10px;margin-top:10px" v-model="typeChoice" type="button">
            <Radio label="灵感素材"></Radio>
            <Radio label="搭配"></Radio>
        </RadioGroup>
      </div>
      <div style="margin-top:15px">
          <Table border :columns="columns" :data="data"></Table>
          <Page class="page" :total="100" show-elevator></Page>
      </div>
    </div>
</template>
<script>
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
                  }
              ],
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
              typeChoice:'灵感素材'
            }
        }
    }
</script>
