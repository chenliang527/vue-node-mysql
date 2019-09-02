<template>
  <div class="home">
    <hard></hard>
    <h1>{{ home }}</h1>
    <register></register>
    <foot></foot>
  </div>
</template>

<script>
 import foot from "../components/foot";
 import hard from "../components/hard";
 import register from "../components/register";
  export default {
      name: 'home',
      components: {
          foot,
          hard,
          register
      },
      data () {
        return {
            home: ''
        }
    },
    methods: {
        get:function(){
            //发送get请求
            this.$http.post('/api/list').then(function(res){
                console.log(res);
            },function(){
                console.log('请求失败处理');
            });
        }
    }

  }
</script>

<style >

</style>
