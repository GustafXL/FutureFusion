<template>
  <main>
    <div class="space-y-10">
      <Logo />

      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 justify-items-center p-5">
        <ProductCard />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import ProductCard from '../components/ProductCard.vue';
import Logo from '../components/Logo.vue';
import { useCounterStore } from '../stores/counter';

export default {
  components: { ProductCard, Logo },

  setup() {
    const counter = useCounterStore();
    return { counter };
  },
}
</script>
