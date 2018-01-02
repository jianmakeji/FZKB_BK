<style scoped>
.content{
  color: red;
}

</style>
<template>
  <div>

      <Modal id="modalDialog" v-model="modal" width="360" :closable="false" :mask-closable="false" :loading="true" :styles="{top: '300px'}">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="easel"></Icon>
            <span>请登录</span>
        </p>
        <div style="text-align:center">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
            <Input type="password" v-model="formInline.password" placeholder="Password" style="margin-top:10px">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </div>
        <div slot="footer">
            <Button type="primary" size="large" long  @click="ok">确认</Button>
        </div>
    </Modal>

  </div>
</template>
<script>
    export default {
        data () {
            return {
                modal:true,
                formInline: {
                    user: '',
                    password: ''
                }
            }
        },
        computed: {

        },
        methods: {

            ok(){

            }
        }
    }
</script>
