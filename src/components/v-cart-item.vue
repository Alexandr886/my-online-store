<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('../assets/images/' + cart_item_data.image)"
      alt=""
    />
    <div class="v-cart-item-description">
      <p class="v-cart-item__description"><span>Специальность: </span>{{cart_item_data.name}}</p>
      <p class="v-cart-item__description"><span>Стоимость: </span>{{cart_item_data.price}}</p>
      <p class="v-cart-item__description"><span>Артикул: </span>{{cart_item_data.article}}</p>
      <p class="v-cart-item__description"><span>Описание: </span>{{cart_item_data.about}}</p>
    </div>
    <div class="v-cart-item__quantity">
      <span>Количество: </span>
      <span>{{cart_item_data.quantity}}</span>
    </div>
    <button class="button v-cart-item__button" @click="deleteFromCart">Удалить</button>
  </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  props: {
    cart_item_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      title: 'hello'
    }
  },
  computed: {},
  methods: {
    deleteFromCart () {
      this.$emit('deleteFromCart')
    }
  },
  watch: {},
  mounted () {}
}
</script>

<style lang="scss">
  .v-cart-item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 15px;
    &__button {
      margin: 0 !important;
    }
    &__description {
      margin: 0;
      color: #333;
      font-size: 16px;
      & span {
        font-weight: 700;
      }
    }
  }
  .v-cart-item-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
  }
</style>
