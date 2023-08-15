import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // products: [
    //   {
    //     image: '1.png',
    //     name: 'Analyst',
    //     price: 2100,
    //     article: 'T1',
    //     available: true,
    //     category: 'it products',
    //     quantity: 0,
    //     about: "Hi i'm an Analyst! Nice to meet you!"
    //   },
    //   {
    //     image: '2.png',
    //     name: 'Designer',
    //     price: 3150,
    //     article: 'T2',
    //     available: true,
    //     category: 'it products',
    //     quantity: 0,
    //     about: 'Hey my friend! Nice to meet you!'
    //   },
    //   {
    //     image: '3.png',
    //     name: 'Marketer',
    //     price: 4200,
    //     article: 'T3',
    //     available: false,
    //     category: 'it products',
    //     quantity: 0,
    //     about: 'Hello! How have you been?'
    //   },
    //   {
    //     image: '4.png',
    //     name: 'Developer',
    //     price: 5300,
    //     article: 'T4',
    //     available: true,
    //     category: 'it products',
    //     quantity: 0,
    //     about: 'Nice to meet you! What about Vue?'
    //   },
    //   {
    //     image: '5.png',
    //     name: 'Business Accelerator',
    //     price: 6500,
    //     article: 'T5',
    //     available: false,
    //     category: 'it products',
    //     quantity: 0,
    //     about: "Hey! We'll solve any problems!"
    //   },
    //   {
    //     image: '6.png',
    //     name: 'Engineer',
    //     price: 8700,
    //     article: 'T6',
    //     available: true,
    //     category: 'it products',
    //     quantity: 0,
    //     about: "Hi! I've many solutions!"
    //   }
    // ],
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      state.cart.push(product)
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API ({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    ADD_TO_CART ({ commit }, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART ({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },
  getters: {
    PRODUCTS (state) {
      return state.products
    },
    CART (state) {
      return state.cart
    }
  },
  modules: {
  }
})
