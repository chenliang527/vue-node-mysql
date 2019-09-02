<template>
  <div class="footer">
    <div class="cl_foot">
      <a href="http://www.i1i3.com">
        <div>
          <span class="cl_foot_look">www.i1i3.com</span>
        </div>
      </a>
      <div class="cl_foot_po">©2018-2019 cl | 京ICP备17045794号-2
        <span class="cl_foot_cnzz"></span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
  }

  html,
  body {
    height: 100%;
    min-height: 100%;
    position: relative;
  }

  body {
    padding-bottom: 60px;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }
   .footer {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    color: rgba(255, 255, 255, 0.8);
  }

   .cl_foot {
    width: 100%;
    height: 50px;
    background: #000;
    text-align: center;
  }
</style>
