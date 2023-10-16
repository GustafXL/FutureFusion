<template>
    <header class="md:hidden block">
        <nav class="md:hidden block">
            <input type="checkbox" id="checkbox" @click="openMobile()">
            <label for="checkbox" class="toggle">
                <div class="bar bar--top"></div>
                <div class="bar bar--middle"></div>
                <div class="bar bar--bottom"></div>
            </label>
        </nav>

        <nav class="max-w-[200px] md:flex items-center justify-between w-full transition-all" :class="menu ? 'mobile-open flex' : 'mobile-close hidden'">
                <router-link to="/" class="flex items-center">
                    <img src="/img/home.svg" alt="Home" class="mr-2">
                    Home
                </router-link>
                <router-link to="/cart" class="flex items-center">
                    <img src="/img/cart.png" alt="Cart" class="mr-2">
                    Cart
                </router-link>
            </nav>
    </header>
</template>

<script lang="ts">
export default {
    data: () => ({
        menu: false
    }),

    methods: {
        openMobile() {
            this.menu = !this.menu;
        }
    }
}
</script>
