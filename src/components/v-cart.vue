<template>
  <div class="v-cart">
    <h2 class="title-h2">{{title}}</h2>
    <vCartItem
    class="v-cart__item"
    v-for="(item, index) in cart_data"
    :key="item.article"
    :cart_item_data="item"
    @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import vCartItem from './v-cart-item.vue'
import { mapActions } from 'vuex'

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
</style>
