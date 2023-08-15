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
  .title-h1 {
    background: linear-gradient(0deg, #fc8507 0%, #ffa218 100%);
    padding: 30px 0;
    margin: 0 0 30px 0;
    color: #FFF;
    font-size: 36px;
    font-weight: 700;
  }
  .button {
    background: linear-gradient(to top, #fc8507, #ffa218);
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: auto;
    margin-top: 50px;
    border-radius: 15px;
    color: #FFF;
    font-weight: 700;
    font-size: 16px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      box-shadow: 6px 6px 15px orangered;
      opacity: 0.8;
    }
  }
</style>
