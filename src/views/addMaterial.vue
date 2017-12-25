<style scoped>

.inputStyle {
    width: 50%;
}

.addImage {
    width: 45%;
    position: absolute;
    right: 30px;
    top: 130px;
}

.layout-breadcrumb {
    padding: 10px 15px 10px;
}

</style>

<template>

<div>
    <div class="layout-breadcrumb">
        <Breadcrumb>
            <Breadcrumb-item id="BreadcrumbItem1" href="/">
                <Icon type="ios-home-outline"></Icon>首页</Breadcrumb-item>
            <Breadcrumb-item id="BreadcrumbItem2" href="/materialManage">
                <Icon type="social-buffer-outline"></Icon>灵感素材管理</Breadcrumb-item>
            <Breadcrumb-item id="BreadcrumbItem3">
                <Icon type="hammer"></Icon>添加素材</Breadcrumb-item>
        </Breadcrumb>
    </div>
    <hr style="height:1px;border:none;border-top:1px dashed #dddee1;" />

    <Form :model="formItem" :label-width="80" style="margin-top:10px">
        <FormItem label="编号" class="inputStyle">
            <Input v-model="formItem.number" placeholder="请输入编号..."></Input>
        </FormItem>

        <FormItem label="图片上传" class="addImage">
            <Tooltip content="请上传JPG/PNG格式,推荐512x512" placement="right">
                <Upload ref="upload" multiple type="drag" :action="host" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" :data="{
                  		'key': g_object_name,
                  		'policy': policyBase64,
                  		'OSSAccessKeyId': accessid,
                  		'success_action_status': '200',
                  		'callback': callbackbody,
                  		'signature': signature,
                  	}" :show-upload-list="false">
                    <div style="width:200px;height:200px">
                        <img :src="formItem.thumb" style="width: 100%">
                    </div>
                </Upload>
            </Tooltip>
        </FormItem>
        <FormItem label="类别" class="inputStyle">
            <Select v-model="formItem.categoryName">
                <Option value="艺术品">艺术品</Option>
                <Option value="建筑">建筑</Option>
                <Option value="动物">动物</Option>
                <Option value="植物">植物</Option>
                <Option value="风景">风景</Option>
            </Select>
        </FormItem>
        <FormItem label="简单--复杂" class="inputStyle">
            <Select v-model="formItem.select1">
              <Option value="-3.0">-3.0</Option>
              <Option value="-2.5">-2.5</Option>
              <Option value="-2.0">-2.0</Option>
              <Option value="-1.5">-1.5</Option>
              <Option value="-1.0">-1.0</Option>
              <Option value="-0.5">-0.5</Option>
              <Option value="0">0</Option>
              <Option value="0.5">0.5</Option>
              <Option value="1.0">1.0</Option>
              <Option value="1.5">1.5</Option>
              <Option value="2.0">2.0</Option>
              <Option value="2.5">2.5</Option>
              <Option value="3.0">3.0</Option>
            </Select>
        </FormItem>
        <FormItem label="硬朗--圆润" class="inputStyle">
            <Select v-model="formItem.select2">
              <Option value="-3.0">-3.0</Option>
              <Option value="-2.5">-2.5</Option>
              <Option value="-2.0">-2.0</Option>
              <Option value="-1.5">-1.5</Option>
              <Option value="-1.0">-1.0</Option>
              <Option value="-0.5">-0.5</Option>
              <Option value="0">0</Option>
              <Option value="0.5">0.5</Option>
              <Option value="1.0">1.0</Option>
              <Option value="1.5">1.5</Option>
              <Option value="2.0">2.0</Option>
              <Option value="2.5">2.5</Option>
              <Option value="3.0">3.0</Option>
            </Select>
        </FormItem>
        <FormItem label="冷酷--温暖" class="inputStyle">
            <Select v-model="formItem.select3">
              <Option value="-3.0">-3.0</Option>
              <Option value="-2.5">-2.5</Option>
              <Option value="-2.0">-2.0</Option>
              <Option value="-1.5">-1.5</Option>
              <Option value="-1.0">-1.0</Option>
              <Option value="-0.5">-0.5</Option>
              <Option value="0">0</Option>
              <Option value="0.5">0.5</Option>
              <Option value="1.0">1.0</Option>
              <Option value="1.5">1.5</Option>
              <Option value="2.0">2.0</Option>
              <Option value="2.5">2.5</Option>
              <Option value="3.0">3.0</Option>
            </Select>
        </FormItem>

        <FormItem style="text-align:center">
            <Button type="primary" @click="addMaterial">提交</Button>
            <Button type="ghost" style="margin-left: 8px" @click="cancelClick">取消</Button>
        </FormItem>
    </Form>
    <Spin size="large" fix v-if="spinVisible"></Spin>
</div>

</template>

<script>

import util from '../libs/util';
import $ from 'jquery'
import uploadImage from '../resources/image/upload.png'

var g_object_name = "";
var key = '';
var hostPrefix = "http://sdx-kt.oss-cn-shanghai.aliyuncs.com/";

function random_string(len) {
    var len = len || 32;
    var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

function get_suffix(filename) {
    var pos = filename.lastIndexOf('.')
    var suffix = ''
    if (pos != -1) {
        suffix = filename.substring(pos)
    }
    return suffix;
}

function calculate_object_name(filename) {

    var suffix = get_suffix(filename)
    g_object_name = key + random_string(10) + suffix

}

function get_uploaded_object_name(filename) {
    return g_object_name;
}

export default {
    data() {
            return {
                formItem: {
                    name: '',
                    number: '',
                    categoryName: '',
                    select1: '',
                    select2: '',
                    select3: '',
                    thumb: '',
                    imageUrl: ''
                },
                g_object_name: '',
                policyBase64: '',
                accessid: '',
                callbackbody: '',
                signature: '',
                host: hostPrefix,
                spinVisible:false,
                id:0,
                insertOrUpdate:true
            }
        },
        methods: {
            addMaterial() {
                    let loadingComponent = this.$Loading;
                    let message = this.$Message;
                    loadingComponent.start();
                    var postUrl = "";
                    var postData = {
                      name: this.formItem.name,
                      number: this.formItem.number,
                      categoryName: this.formItem.categoryName,
                      style1: this.formItem.select1,
                      style2: this.formItem.select2,
                      style3: this.formItem.select3,
                      imageUrl: this.formItem.imageUrl
                    };
                    if (this.insertOrUpdate){
                        postUrl = "/material/createMaterial";
                    }else{
                        postUrl = "/material/updateMaterial";
                        postData.id = this.id;
                    }
                    util.ajax.post(postUrl, postData, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                        .then(function(response) {
                            if (response.data.resultCode == 200) {
                                message.success('添加成功！');
                            } else {
                                message.error(response.data.message);
                            }
                            loadingComponent.finish();
                        })
                        .catch(function(response) {
                            loadingComponent.error();
                            message.error('操作失败!');
                        });
                },
                cancelClick() {
                    this.$router.push('materialManage');
                },
                handleView(name) {
                    this.visible = true;
                },
                handleSuccess(res, file) {
                    this.formItem.thumb = hostPrefix + g_object_name + "?x-oss-process=style/thumb-300";
                    this.formItem.imageUrl = hostPrefix + g_object_name;
                },
                handleFormatError(file) {
                    this.$Message.error("文件格式错误！");
                },
                handleMaxSize(file) {
                    this.$Message.error("文件不能超过2M！");
                },
                handleBeforeUpload(file) {
                    let message = this.$Message;
                    var self = this;

                    $.ajax({
                        type: 'GET',
                        url: '/api/uploadKey/1',
                        async: false,
                        dataType: 'json',
                        success: function(result) {
                            self.$refs.upload.data.host = result.host;
                            self.$refs.upload.data.policy = result.policy;
                            self.$refs.upload.data.OSSAccessKeyId = result.accessid;
                            self.$refs.upload.data.signature = result.signature;
                            self.$refs.upload.data.callback = '';
                            key = result.dir;
                            g_object_name = result.dir;
                            calculate_object_name(file.name)
                            self.$refs.upload.data.key = g_object_name;
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            message.error(errorThrown);
                        }
                    });
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
                       that.formItem.select1 = response.data.object.style1;
                       that.formItem.select2 = response.data.object.style2;
                       that.formItem.select3 = response.data.object.style3;
                       that.formItem.thumb = response.data.object.imageUrl + "?x-oss-process=style/thumb-300";
                       that.formItem.imageUrl = response.data.object.imageUrl;
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
