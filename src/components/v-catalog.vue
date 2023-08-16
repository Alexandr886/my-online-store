<template>
  <div class="v-catalog">

    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link_to_cart">
        <img src="../assets/images/icon-cart.png" alt="" class="cart-img">
        {{CART.length}}
      </div>
    </router-link>

    <h2 class="title-h2">{{title}}</h2>
    <vCatalogItem
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'v-catalog',
  components: { vCatalogItem },
  props: {},
  data () {
    return {
      title: 'Каталог товаров'
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART'])
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart (data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Данные вышли')
        }
      })
  }
}
</script>

<style>
  .title-h2 {
    color: #333;
    margin: 0;
    font-size: 40px;
    width: 100%;
  }
  .v-catalog {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  }
  .v-catalog__link_to_cart {
    position: absolute;
    top: 20px;
    right: 30px;
    padding: 5px;
    display: flex;
    align-items: flex-end;
    gap: 10px;
    color: #212F9B;
    font-weight: 700;
    font-size: 20px;
  }
  @media (max-width: 500px) {
      .v-catalog__link_to_cart {
        top: 10px;
        right: 10px;
      }
  }
</style>
