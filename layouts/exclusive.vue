<template>
  <div>
    <NavBar />
    <div class="relative overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/assets/img/carousel-inner.png')]"
      style="height: 40vh;">
      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.65)] bg-fixed">
        <div class="flex h-full items-center justify-center">
          <div class="px-6 text-center sm:text-center text-white md:px-12">
            <NuxtLink to="/">Home</NuxtLink>
            <span class="mx-5">>></span>
            <NuxtLink to="/shop">Shop</NuxtLink>
            <h4 class="my-3 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
              NEW COLLECTION
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
const { pageTitle } = useRoute().params
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
