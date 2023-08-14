<template>
  <div class="v-main-wrapper">
    <vCatalog />
    <vCart />
  </div>
</template>

<script>
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'


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
  computed: {},
  methods: {},
  watch: {},
  mounted () {}
}
</script>

<style lang="scss">
.v-main-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    max-width: 900px;
    margin: 0 auto;
    &{
        display: flex;
    }
}
</style>
