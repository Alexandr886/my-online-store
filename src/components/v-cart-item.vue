<template>
  <div class="v-cart-item">
    <img src="" alt="" class="v-cart-item__image">
    <vCatalog />
    <vCart />
  </div>
</template>

<script>
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'

export default {
    name: 'v-cart-item',
    components: { vCatalog, vCart },
    data () {
      return {

      }
    }
}
</script>

<style lang="scss">
  .v-cart-item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 gray;
    padding: 20px;
    margin: 20px;
  }
</style>
