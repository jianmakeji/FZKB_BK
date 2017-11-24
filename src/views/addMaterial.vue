<style scoped>
      .inputStyle{
        width:50%;
      }

      .addImage{
        width:45%;
        position: absolute;
        right: 30px;
        top: 130px;
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
            <Breadcrumb-item id="BreadcrumbItem2" href="/materialManage"><Icon type="social-buffer-outline"></Icon>灵感素材管理</Breadcrumb-item>
            <Breadcrumb-item id="BreadcrumbItem3"><Icon type="hammer"></Icon>添加素材</Breadcrumb-item>
        </Breadcrumb>
    </div>
    <hr style="height:1px;border:none;border-top:1px dashed #dddee1;"/>

    <Form :model="formItem" :label-width="80" style="margin-top:10px">
        <FormItem label="编号" class="inputStyle">
            <Input v-model="formItem.input" placeholder="请输入编号..."></Input>
        </FormItem>

        <FormItem label="图片上传" class="addImage">
          <Tooltip content="请上传JPG/PNG格式,推荐512x512" placement="right">
            <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>点击或者将图片拖拽到这里</p>
                </div>
            </Upload>
          </Tooltip>
        </FormItem>
        <FormItem label="类别" class="inputStyle">
            <Input v-model="formItem.input" placeholder="请输入类别..."></Input>
        </FormItem>
        <FormItem label="简单--复杂" class="inputStyle">
            <Select v-model="formItem.select">
                <Option value="-3">-3</Option>
                <Option value="-2.5">-2.5</Option>
                <Option value="-2">-2</Option>
                <Option value="-1.5">-1.5</Option>
                <Option value="-1">-1</Option>
                <Option value="-0.5">-0.5</Option>
                <Option value="0">0</Option>
                <Option value="0.5">0.5</Option>
                <Option value="1">1</Option>
                <Option value="1.5">1.5</Option>
                <Option value="2">2</Option>
                <Option value="2.5">2.5</Option>
                <Option value="3">3</Option>
            </Select>
        </FormItem>
        <FormItem label="硬朗--圆润" class="inputStyle">
            <Select v-model="formItem.select">
              <Option value="-3">-3</Option>
              <Option value="-2.5">-2.5</Option>
              <Option value="-2">-2</Option>
              <Option value="-1.5">-1.5</Option>
              <Option value="-1">-1</Option>
              <Option value="-0.5">-0.5</Option>
              <Option value="0">0</Option>
              <Option value="0.5">0.5</Option>
              <Option value="1">1</Option>
              <Option value="1.5">1.5</Option>
              <Option value="2">2</Option>
              <Option value="2.5">2.5</Option>
              <Option value="3">3</Option>
            </Select>
        </FormItem>
        <FormItem label="冷酷--温暖" class="inputStyle">
            <Select v-model="formItem.select">
              <Option value="-3">-3</Option>
              <Option value="-2.5">-2.5</Option>
              <Option value="-2">-2</Option>
              <Option value="-1.5">-1.5</Option>
              <Option value="-1">-1</Option>
              <Option value="-0.5">-0.5</Option>
              <Option value="0">0</Option>
              <Option value="0.5">0.5</Option>
              <Option value="1">1</Option>
              <Option value="1.5">1.5</Option>
              <Option value="2">2</Option>
              <Option value="2.5">2.5</Option>
              <Option value="3">3</Option>
            </Select>
        </FormItem>

        <FormItem style="text-align:center">
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
                    input: '',

                }
            }
        }
    }
</script>
