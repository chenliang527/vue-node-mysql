<template>
  <div class="cl_middle">
    <div class="cl_middle-all">
      <div class=" cl_register" @click="cur=0" v-bind:class="cur==0?'cl_color':''">注册</div>
      <div class=" cl_login" @click="cur=1" v-bind:class="cur==1?'cl_color':''">登入</div>
    </div>

    <div class="cl_tab_list">
      <!--注册-->
        <div class="cl_list  cl_register_list" v-show="cur==0">
        <div class="cl_input"><input v-model="account" class="cl_input_text"  type="text" placeholder="请输入帐号,登入时可通过账号登入"/></div>
        <div class="cl_input"><input v-model="password" class="cl_input_text"  type="text" placeholder="请输入姓名,登入时可不填写"/></div>
        <div class="cl_input"><input v-model="name"class="cl_input_text"  type="password" placeholder="请输入密码"/></div>
        <div class="cl_input"><input type="button" @click="register"  class="cl_input_btn cl_register_btn" value="注册"/></div>
      </div>

      <!--登陆-->
      <div class="cl_list cl_login_list" v-show="cur==1">
        <div class="cl_input"><input v-model="account" class="cl_input_text"  type="text" placeholder="请输入账号"/></div>
        <div class="cl_input"><input v-model="password" class="cl_input_text"  type="password" placeholder="请输入密码"/></div>
        <div class="cl_input"><input type="button" @click="login" class="cl_input_btn cl_login_btn" value="登入"/></div>
      </div>
    </div>

    <div class="cl_show" v-if="shows==false" @click="aleat" v-html="texts"></div>
  </div>

</template>

<script>
    export default {
        name: "register",
        data (){
            return {
                cur: 0,
                account:'',
                password:'',
                name:'',

                texts:'',
                shows:true
            }
        },
        mounted() {

        },
        methods:{
            //注册
            register:function(){
                var that= this;
                var accounts = that.account;
                var passwords =that.password;
                var names =that.name;

                this.$http.get('/api/register', {
                    params:{
                      account: accounts,
                      password: passwords,
                      name:names
                    }
                },{}).then((response) => {
                    console.log(response);
                    that.aleat(response.body)
                    that.account=''
                    that.password='';
                    that.name=''
                })
            },

            //登录
            login:function(){
                var that= this;
                var accounts = that.account;
                var passwords =that.password;

                this.$http.get('/api/login', {
                    params:{
                        account: accounts,
                        password: passwords,
                    }
                },{}).then((response) => {
                    console.log(response);
                    that.aleat(response.body);
                    that.account=''
                    that.password=''
                })
            },
            //公共弹窗
            aleat:function(e){
                var that= this;
                setTimeout(function () {
                    that.texts=e;
                    that.shows=false;
                    setTimeout(function () {
                        that.shows=true
                    },2000)
                },1000)
            }
        }
    }
</script>

<style scoped>
  .cl_middle {
    width: 300px;
    min-height: 100px;
    border: 1px solid #dedede;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
  }

  .cl_middle-all {
    width: 100%;
    height: 35px;
    line-height: 35px;
    overflow: hidden;
  }

  .cl_register {
    width: 50%;
    text-align: center;
    float: left;
    cursor: pointer;
    color: red;
    position: relative;
  }

  .cl_login {
    width: 50%;
    text-align: center;
    float: right;
    cursor: pointer;
    color: mediumspringgreen;
    position: relative;
  }

  .cl_register:before{
    content: "";
    width: 30px;
    height: 2px;
    background: red;
    position: absolute;
    left: 50%;
    bottom: 2px;
    transform: translate(-50%, 100%);
    display: none;
  }
  .cl_register:after{
    content: "";
    width: 1px;
    height: 20px;
    position: absolute;
    right: 0%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.6);
  }
  .cl_login:before{
    content: "";
    width: 30px;
    height: 2px;
    background: mediumspringgreen;
    position: absolute;
    left: 50%;
    bottom: 2px;
    transform: translate(-50%, 100%);
    display: none;
  }
  .cl_color.cl_login:before{
    display: block;

  }
  .cl_color.cl_register:before{
    display: block;
  }
  .cl_color:nth-child(2){
    color: mediumspringgreen;
  }
  .cl_tab_list{
    border-top: 1px solid #dedede;
    background: rgba(0,0,0,0.02);
  }

  .cl_register_list {
    width: 100%;
    min-height: 100px;
  }

  .cl_login_list {
    width: 100%;
    min-height: 100px;
  }
  .cl_input {
    width: 96%;
    height: 32px;
    margin: 12px auto;
    border: 1px solid #dedede;
    border-radius: 4px;
  }

  .cl_input_text {
    width: 100%;
    height: 32px;
    border: none;
    appearance: none;
    outline: none;
    outline: medium;
    padding: 0 12px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 4px;
  }

  .cl_input_btn {
    width: 100%;
    border: none;
    height: 32px;
    outline: none;
    outline: medium;
    cursor: pointer;
    border-radius: 4px;
  }
  .cl_register_btn{
    background: red;
    color: #ffffff;
  }

  .cl_login_btn{
    background: mediumspringgreen;
    color: #ffffff;
  }
  .cl_show{
    border: 1px solid #dedede;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding:  5px 12px;
    background: mediumspringgreen;
    border-radius: 12px;
  }
</style>
