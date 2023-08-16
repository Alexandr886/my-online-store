<template>
  <div id="app">
    <h1 class="title-h1">Интернет-магазин IT специальностей</h1>
    <vMainWrapper />
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue'
export default {
  name: 'app',
  components: {
    vMainWrapper
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    background: #f2f3f5;
    padding-bottom: 100px;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
