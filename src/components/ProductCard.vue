<template>
  <div class="flex flex-col bg-black rounded-3xl max-w-[300px]" v-for="product in products" :key="product.id">
  <div class="px-6 py-8 sm:p-10 sm:pb-6">
    <div class="grid items-center justify-center w-full grid-cols-1 text-left">
      <div>
        <h2 class="text-lg font-medium tracking-tighter text-white lg:text-3xl">
          {{ product.title }}
        </h2>
        <p class="mt-2 text-sm text-gray-100">{{ product.description }}</p>
      </div>
      <div class="mt-6">
        <p>
          <span class="text-5xl font-light tracking-tight text-white">
            {{ formatDollar(product.price) }}
          </span>
          <span class="text-base font-medium text-white"> /{{ formatDollar(product.discountPercentage) }} </span>
        </p>
      </div>
    </div>
  </div>
  <div class="flex px-6 pb-8 sm:px-8">
    <button aria-describedby="tier-starter" class="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white" href="#">
      Add to Cart
    </button>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    products: []
  }),

  mounted() {
    this.getAllProducts();
  },

  methods: {
    async getAllProducts() {
      const URL = 'https://dummyjson.com/products';
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data.products);
        this.products = data.products;
      } catch(err) {
        console.log(err);
      }
    },
    
    formatDollar(value:number) {
      const format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })

      return format.format(value)
    }
  }
})
</script>
