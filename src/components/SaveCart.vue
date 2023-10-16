<template>
  <div class="flex flex-col bg-black justify-between rounded-3xl max-w-[300px]" v-for="cart in save" :key="cart.id">
    <div class="px-6 py-8 sm:p-10 sm:pb-6">
      <div
        class="grid items-center justify-center w-full grid-cols-1 text-left"
      >
        <div>
          <h2
            class="text-lg font-medium tracking-tighter text-white lg:text-3xl"
          >
            {{ cart.title }}
          </h2>
          <p class="mt-2 text-sm text-gray-100">{{ cart.description }}</p>
        </div>
        <div class="mt-6">
          <p>
            <span class="text-5xl font-light tracking-tight text-white">
              {{ formatValue(cart.price) }}
            </span>
            <span class="text-base font-medium text-white">
              /{{ formatValue(cart.discountPercentage) }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from "../stores/counter";
import type { Product } from "../types/Product";

export default {
  data: () => ({
    save: <Product[]> ([])
  }),  

  setup() {
    const counter = useCounterStore();
    return { counter };
  },

  mounted() {
      this.getSaveProducts();
  },

  methods: {
    getSaveProducts() {
        const isSave = localStorage.getItem('product');
        if(isSave) {
            this.save = JSON.parse(isSave);
            return;
        }
    },

    formatValue(value:number) {
        const format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })

      return format.format(value)
    },
  }
};
</script>