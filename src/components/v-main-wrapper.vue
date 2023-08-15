<template>
  <div class="v-main-wrapper">
    <vCatalog />
    <vCart v-if="CART.length" :cart_data="CART" key=""/>
  </div>
</template>

<script>
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'v-main-wrapper',
  components: {
    vCatalog,
    vCart
  },
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
</style>
