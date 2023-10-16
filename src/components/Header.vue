<template>
    <header class="flex items-center bg-black text-white justify-between">
        <nav class="max-w-[1200px] w-full mx-auto p-5 flex items-center justify-between">
            <div class="flex items-center justify-between w-52">
                <h1 class="font-semibold text-xl">Future Fusion Store</h1>

                <div class="loader">
                    <span class="load"></span>
                    <span class="load"></span>
                    <span class="load"></span>
                </div>
            </div>
            
            <nav class="max-w-[200px] md:flex hidden items-center justify-between w-full">
                <router-link to="/" class="flex items-center">
                    <img src="/img/home.svg" alt="Home" class="mr-2">
                    Home
                </router-link>
                <router-link to="/cart" class="flex items-center">
                    <img src="/img/cart.png" alt="Cart" class="mr-2">
                    Cart
                </router-link>
            </nav>

            <Mobile />
        </nav>
    </header>
</template>

<script lang="ts">
import Mobile from '../components/Mobile.vue';
export default {
    components: { Mobile }
}
</script>