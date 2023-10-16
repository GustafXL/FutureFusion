import { defineStore } from 'pinia';
import type { Product } from '@/types/Product';

export const useCounterStore = defineStore('counter', {
  state:  () => ({
    products: [],
    cart: <Product[]>([])
  }),

  actions: {
    async getAllProducts() {
      const URL = 'https://dummyjson.com/products';
      try {
        const response = await fetch(URL);
        const data = await response.json();
        this.products = data.products;
      } catch(err) {
        console.log(err);
      }
    },

    addToCart(info:string, description:string, price:number) {
      const product: Product = {
        title: info,
        description: description,
        price: price
      }
      this.cart.push(product)
      localStorage.setItem('product', JSON.stringify(this.cart));
    },
  }
})
