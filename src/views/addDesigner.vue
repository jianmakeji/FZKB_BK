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
            <Input v-model="formItem.password" placeholder="请输入登录密码"></Input>
        </FormItem>
        <FormItem label="真实姓名">
            <Input v-model="formItem.realname" placeholder="请输入设计师真实姓名"></Input>
        </FormItem>

        <FormItem label="简介">
            <Input v-model="formItem.introduce" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="设计师简介..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="addDesigner">提交</Button>
            <Button type="ghost" style="margin-left: 8px" @click="cancelClick">取消</Button>
        </FormItem>
    </Form>
    <Spin size="large" fix v-if="spinVisible"></Spin>
    </div>
</template>
<script>
    import util from '../libs/util';
    export default {
        data () {
            return {
              formItem: {
                  username: '',
                  password: '',
                  realname: '',
                  introduce: ''
              },
              spinVisible:false,
              id:0,
              insertOrUpdate:true
          }
        },
        methods: {
          addDesigner(){
            this.$Loading.start();
            let message = this.$Message;
            let that = this;
            util.ajax.post('/designer/createDesigner', {
              username:this.formItem.username,
              realname: this.formItem.realname,
              password:this.formItem.password,
              introduce:this.formItem.introduce
            },{headers: {"Content-Type": "application/json"}})
            .then(function (response) {
              if(response.data.resultCode == 200){
                message.success('添加成功！');
                that.$router.push('designerManage');
              }
              else{
                message.error(response.message);
              }
              that.$Loading.finish();
            })
            .catch(function (response) {
              console.log("====:"+response);
              that.$Loading.error();
              message.error('操作失败!');
            });

          },
          cancelClick(){
            if (this.id > 0){
              this.$router.push('../designerManage');
            }
            else{
              this.$router.push('designerManage');
            }

          }
        },
        created(){
           this.spinVisible = true;
           var id = this.$route.params.id;
           let that = this;
           if (id){
             this.insertOrUpdate = false;
             let message = this.$Message;
             this.id = id;
             util.ajax.get('/designer/getDesigner/'+id, {
                     headers: {
                         "Content-Type": "application/json"
                     }
                 })
                 .then(function(response) {
                     if (response.data.resultCode == 200) {
                       that.formItem.username = response.data.object.username;
                       that.formItem.realname = response.data.object.realname;
                       that.formItem.categoryName = response.data.object.categoryName;
                       that.formItem.introduce = response.data.object.introduce;

                     } else {
                         message.error(response.data.message);
                     }
                     that.spinVisible = false;
                 })
                 .catch(function(response) {
                     message.error('操作失败!');
                     that.spinVisible = false;
                 });
           }
           else{
             this.spinVisible = false;
             this.insertOrUpdate = true;
           }
        }
    }
</script>
