<template>
  <div class="v-cart">

    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link_to_cart">
        <img src="../assets/images/icon-cart.png" alt="" class="cart-img">
        {{ CART.length }}</div>
      <button class="button button_back">В каталог</button>
    </router-link>

    <h2 class="title-h2">{{title}}</h2>
    <div v-if="!CART.length">
      <p>В корзине пусто :(</p>
      <span>Вы можете вернуться в каталог и выбрать товар</span>
    </div>
    <vCartItem
    class="v-cart__item"
    v-for="(item, index) in CART"
    :key="item.article"
    :cart_item_data="item"
    @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import vCartItem from './v-cart-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      title: 'Корзина'
    }
  },
  computed: {
    ...mapGetters(['CART'])
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),
    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-cart {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: gray;
    font-size: 20px;
    &__item {
      box-shadow: 0 0 8px 0 gray;
      padding: 20px;
      background: #fff7da;
      border-radius: 20px;
    }
  }
  .button_back {
    margin: 0 auto;
  }
</style>
