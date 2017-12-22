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
            <Button type="primary" @click="addDesigner">提交</Button>
            <Button type="ghost" style="margin-left: 8px" @click="cancelClick">取消</Button>
        </FormItem>
    </Form>
    </div>
</template>
<script>
    import $ from 'jquery'
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
        },
        methods: {
          addDesigner(){
            this.$Loading.start();
            util.ajax.post('/match/createMatch', {
              name:this.formItem.name,
              number: this.formItem.number,
              categoryName:this.formItem.categoryName,
              style1:this.formItem.select1,
              style2:this.formItem.select2,
              style3:this.formItem.select3,
              thumb:this.formItem.thumb,
              masterImage:this.formItem.masterImage
            },{headers: {"Content-Type": "application/json"}})
            .then(function (response) {
              if(response.data.resultCode == 200){
                message.success('添加成功！');
              }
              else{
                message.error(response.data.message);
              }
              loadingComponent.finish();
            })
            .catch(function (response) {
              loadingComponent.error();
              message.error('操作失败!');
            });

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
          cancelClick(){
            this.$router.push('designerDetail');
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
             util.ajax.get('/material/getMaterial/'+id, {
                     headers: {
                         "Content-Type": "application/json"
                     }
                 })
                 .then(function(response) {
                     if (response.data.resultCode == 200) {
                       that.formItem.name = response.data.object.name;
                       that.formItem.number = response.data.object.number;
                       that.formItem.categoryName = response.data.object.categoryName;
                       that.formItem.select1 = response.data.object.select1;
                       that.formItem.select2 = response.data.object.select2;
                       that.formItem.select3 = response.data.object.select3;
                       that.formItem.thumb = response.data.object.imageUrl + "?x-oss-process=style/thumb-300";
                       that.formItem.imageUrl = response.data.object.imageUrl;
                     } else {
                         message.error(response.data.message);
                     }
                     this.spinVisible = false;
                 })
                 .catch(function(response) {
                     message.error('操作失败!');
                     this.spinVisible = false;
                 });
           }
           else{
             this.spinVisible = false;
             this.insertOrUpdate = true;
           }
        }
    }
</script>
