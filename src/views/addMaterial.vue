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
                <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                        <p>点击或者将图片拖拽到这里</p>
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
            <Select v-model="formItem.select2">
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
            <Select v-model="formItem.select3">
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
            <Button type="primary" @click="addMaterial">提交</Button>
            <Button type="ghost" style="margin-left: 8px" @click="cancelClick">取消</Button>
        </FormItem>
    </Form>
</div>

</template>

<script>

import util from '../libs/util';

export default {
    data() {
            return {
                formItem: {
                    name: '',
                    number: '1111',
                    categoryName: '',
                    select1: '',
                    select2: '',
                    select3: '',
                    thumb: 'http',
                    masterImage: 'http'
                }
            }
        },
        methods: {
            addMaterial() {
                    let loadingComponent = this.$Loading;
                    let message = this.$Message;

                    loadingComponent.start();
                    util.ajax.post('/material/createMaterial', {
                            name: this.formItem.name,
                            number: this.formItem.number,
                            categoryName: this.formItem.categoryName,
                            style1: this.formItem.select1,
                            style2: this.formItem.select2,
                            style3: this.formItem.select3,
                            thumb: this.formItem.thumb,
                            masterImage: this.formItem.masterImage
                        }, {
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
                }
        }
}

</script>
