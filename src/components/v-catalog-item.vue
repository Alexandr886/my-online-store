<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src=" require('../assets/images/' + product_data.image)" alt="picture for the course">
    <p class="v-catalog-item__name">Специальность: {{ product_data.name }}</p>
    <p class="v-catalog-item__price">Стоимость: {{ product_data.price }}</p>
    <p class="v-catalog-item__about">О курсе: {{product_data.about}}</p>
    <button class="v-catalog-item__add-to-card-btn" @click="sendDataParent">Добавить в корзину</button>
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
    sendDataParent () {
      this.$emit('sendDataParent', this.product_data.article)
    }
  }
}
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 gray;
    padding: 20px;
    margin: 20px;
  }
</style>

