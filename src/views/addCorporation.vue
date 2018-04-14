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
              <Breadcrumb-item id="BreadcrumbItem2" href="/corporationManage"><Icon type="social-buffer-outline"></Icon>服装企业管理</Breadcrumb-item>
              <Breadcrumb-item id="BreadcrumbItem3"><Icon type="hammer"></Icon>添加设计师</Breadcrumb-item>
          </Breadcrumb>
      </div>
      <hr style="height:1px;border:none;border-top:1px dashed #dddee1;"/>

      <Form :model="formItem" :label-width="80"  style="margin-top:20px">
        <FormItem label="名称">
            <Input v-model="formItem.name" placeholder="请输入企业名称"></Input>
        </FormItem>
        <FormItem label="地址">
            <Input v-model="formItem.address" placeholder="请输入企业地址"></Input>
        </FormItem>
        <FormItem label="联系人">
            <Input v-model="formItem.contact" placeholder="请输入联系人姓名"></Input>
        </FormItem>
        <FormItem label="联系电话">
            <Input v-model="formItem.phone" placeholder="请输入联系人电话"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="addCorporation">提交</Button>
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
                  name: '',
                  address: '',
                  contact: '',
                  phone: '',
              },
              spinVisible:false,
              id:0,
              insertOrUpdate:true
          }
        },
        methods: {
          addCorporation(){
            this.$Loading.start();
            let message = this.$Message;
            let that = this;
            var postUrl = "";
            var postData = {
              name:this.formItem.name,
              address: this.formItem.address,
              contact:this.formItem.contact,
              phone:this.formItem.phone,
            };

            if (this.insertOrUpdate){
                postUrl = "/corporation/createCorporation";
            }else{
                postUrl = "/corporation/updateCorporation";
                postData.id = this.id;
            }

            util.ajax.post(postUrl,postData,
              {
                headers: {"Content-Type": "application/json"}
              })
            .then(function (response) {
              if(response.data.resultCode == 200){
                message.success('添加成功！');
                if (this.id > 0){
                  this.$router.push('../corporationManage');
                }
                else{
                  this.$router.push('corporationManage');
                }
              }
              else{
                message.error(response.message);
              }
              that.$Loading.finish();
            })
            .catch(function (response) {
              that.$Loading.error();
              message.error('操作失败!');
            });

          },
          cancelClick(){
            if (this.id > 0){
              this.$router.push('../corporationManage');
            }
            else{
              this.$router.push('corporationManage');
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
             util.ajax.get('/corporation/getCorporation/'+id, {
                     headers: {
                         "Content-Type": "application/json"
                     }
                 })
                 .then(function(response) {
                     if (response.data.resultCode == 200) {
                       that.formItem.name = response.data.object.name;
                       that.formItem.address = response.data.object.address;
                       that.formItem.contact = response.data.object.contact;
                       that.formItem.phone = response.data.object.phone;
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
