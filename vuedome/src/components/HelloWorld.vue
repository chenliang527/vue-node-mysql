<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="get">dd</div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'aaa'
    }
  },
}
</script>

<style scoped>

</style>
