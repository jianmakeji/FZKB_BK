<style scoped>
  .content{
    color: red;
  }
</style>
<template>
    <div class="content">
      <div class="layout-breadcrumb">
          <Breadcrumb>
              <Breadcrumb-item id="BreadcrumbItem1" href="/"><Icon type="ios-home-outline"></Icon>首页</Breadcrumb-item>
              <Breadcrumb-item id="BreadcrumbItem2" href="/designerManage"><Icon type="social-buffer-outline"></Icon>设计师管理</Breadcrumb-item>
              <Breadcrumb-item id="BreadcrumbItem3"><Icon type="hammer"></Icon>添加设计师</Breadcrumb-item>
          </Breadcrumb>
      </div>
      <hr style="height:1px;border:none;border-top:1px dashed #dddee1;"/>

      <Form :model="formItem" :label-width="80"  style="margin-top:20px">
        <FormItem label="账号">
            <Input v-model="formItem.username" placeholder="请输入登录帐号"></Input>
        </FormItem>
        <FormItem label="密码">
            <Input v-model="formItem.pwd" placeholder="请输入登录密码"></Input>
        </FormItem>
        <FormItem label="真实姓名">
            <Input v-model="formItem.realname" placeholder="请输入设计师真实姓名"></Input>
        </FormItem>

        <FormItem label="简介">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="设计师简介..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
              formItem: {
                  username: '',
                  pwd: '',
                  realname: '',
                  textarea: ''
                }
            }
        }
    }
</script>
