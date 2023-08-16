<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'v-main-wrapper',
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['CART'])
  },
  methods: {},
  watch: {},
  mounted () {}
}
</script>

<style lang="scss">
  .v-main-wrapper {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      gap: 50px;
      max-width: 900px;
      margin: 0 auto;
  }
  .cart-img {
    width: 50px;
    height: 50px;
  }
  a {
    text-decoration: none;
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
  @media (max-width: 950px) {
    .title-h1 {
      padding: 30px 140px 30px 50px;
      font-size: 30px;
      text-align: left;
    }
  }
  @media (max-width: 1150px) {
    .v-main-wrapper {
      padding: 0 50px;
    }
  }
</style>
