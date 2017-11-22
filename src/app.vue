<style scoped>
    .layout{
        *border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 50px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
      <Row type="flex">
          <i-col :span="spanLeft" class="layout-menu-left">
              <i-menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select="menuClick">
                  <div class="layout-logo-left"></div>
                  <Submenu name="1">
                      <template slot="title">
                          <Icon type="ios-navigate" :size="iconSize"></Icon>
                          <span class="layout-text">功能</span>
                      </template>
                      <Menu-item name="materialManage">灵感素材管理</Menu-item>
                      <Menu-item name="page2">搭配管理</Menu-item>
                      <Menu-item name="page3">设计师管理</Menu-item>
                  </Submenu>
                  <Submenu name="2">
                      <template slot="title">
                          <Icon type="ios-keypad" :size="iconSize"></Icon>
                          <span class="layout-text">导航二</span>
                      </template>
                      <Menu-item name="page4">选项 1</Menu-item>
                      <Menu-item name="page5">选项 2</Menu-item>
                  </Submenu>
                  <Submenu name="3">
                      <template slot="title">
                          <Icon type="ios-analytics" :size="iconSize"></Icon>
                          <span class="layout-text">导航三</span>
                      </template>
                      <Menu-item name="page6">选项 1</Menu-item>
                      <Menu-item name="page7">选项 2</Menu-item>
                  </Submenu>
              </i-menu>

          </i-col>
          <i-col :span="spanRight">
              <div class="layout-header">
                  <i-button type="text" @click="toggleClick">
                      <Icon type="navicon" size="32"></Icon>
                  </i-button>
              </div>
              <div class="layout-breadcrumb">
                  <Breadcrumb>
                      <Breadcrumb-item href="#">首页</Breadcrumb-item>
                      <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                      <Breadcrumb-item>某应用</Breadcrumb-item>
                  </Breadcrumb>
              </div>
              <div class="layout-content">
                  <div class="layout-content-main" :style="contentStyle">
                      <router-view>

                      </router-view>
                  </div>
              </div>
              <div class="layout-copy">
                  2016-2017 &copy; 简码科技
              </div>
          </i-col>
      </Row>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                spanLeft: 4,
                spanRight: 20
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 4 ? 20 : 24;
            },
            contentStyle: function(){
           		var innerHeight = window.innerHeight;
           		var contentHeight = innerHeight-50-110;
            	return "min-height: "+contentHeight+"px";
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 4) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 4;
                    this.spanRight = 20;
                }
            },
            menuClick(name){
              if (name == 'materialManage'){
                this.$router.push('materialManage');
              }
              else if (name == 'page2'){
                this.$router.push('menu2');
              }
              else if (name == 'page3'){
                this.$router.push('menu3');
              }
              else if (name == 'page4'){
                this.$router.push('menu4');
              }
              else if (name == 'page5'){
                this.$router.push('menu5');
              }
              else if (name == 'page6'){
                this.$router.push('menu6');
              }
              else if (name == 'page7'){
                this.$router.push('menu7');
              }
            }
        }
    }
</script>
