<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src=" require('../assets/images/' + product_data.image)" alt="picture for the course">
    <p class="v-catalog-item__name"><span>Специальность:</span> {{ product_data.name }}</p>
    <p class="v-catalog-item__price"><span>Стоимость:</span> {{ product_data.price }}</p>
    <p class="v-catalog-item__about"><span>О курсе:</span> {{product_data.about}}</p>
    <button class="button v-catalog-item__add-to-card-btn" @click="addToCart">Добавить в корзину</button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    addToCart () {
      this.$emit('addToCart', this.product_data)
    }
  }
}
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 44%;
    box-shadow: 0 0 8px 0 gray;
    padding: 20px;
    background: #e8f8f0;
    border-radius: 20px;
    &__name span,
    &__price span,
    &__about span {
      font-weight: 700;
    }
  }
</style>
