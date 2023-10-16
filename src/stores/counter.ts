import { defineStore } from 'pinia';
import type { Product } from '@/types/Product';

export const useCounterStore = defineStore('counter', {
  state:  () => ({
    products: <Product[]>([]),
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

    addToCart(id:number, info:string, description:string, price:number, discountPercentage: number) {
      const product: Product = {
        id: id,
        title: info,
        description: description,
        price: price,
        discountPercentage: discountPercentage
      }
      this.cart.push(product)
      localStorage.setItem('product', JSON.stringify(this.cart));
    },
  }
})
