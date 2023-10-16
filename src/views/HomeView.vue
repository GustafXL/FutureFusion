<template>
  <main>
    <div class="space-y-10">
      <Logo />

      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 justify-items-center p-5" ref="scrollComponent">
        <ProductCard />
      </div>

      <div v-if="loading">Loading...</div>
    </div>
  </main>
</template>

<script lang="ts">
import ProductCard from '../components/ProductCard.vue';
import Logo from '../components/Logo.vue';
import { useCounterStore } from '../stores/counter';
import { defineComponent, onMounted, ref, watch } from 'vue';


export default defineComponent({
  components: { ProductCard, Logo },

  setup() {
    const counter = useCounterStore();
    const items = ref<any[]>([]);
    const loading = ref(false);

    watch(
      () => counter.products, 
      (newItens) => {
      items.value = newItens;
    })

    const loadMore = () => {
      if(!loading.value) {  
        counter.getAllProducts();
      }
    }

    onMounted(() => {
      loadMore();
      window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 200) {
        loadMore();
      }
    };
    return { counter, items, loading };
  },
})
</script>
