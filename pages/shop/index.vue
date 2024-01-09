<template>
  <div>
    <div class="container mx-auto lg:px-14 my-14 ">
      <div class="grid grid-cols-2 px-6 lg:px-14	 ">
        <h3 class="mb-2 text-2xl font-bold text-start leading-tight text-neutral-800 dark:text-neutral-50">
          Shop</h3>
        <div class="text-end ml-auto">
          <div class="flex ">
            <h5 class="font-bold text-neutral-800 dark:text-neutral-50">Home</h5>
            <img class="w-2 h-3 my-auto m-3" src="@/assets/img/icon-arrow-next.png" alt="">
            <h5 class="font-bold text-gray-500">Shop</h5>
          </div>
          <!-- <img class="w-3 ms-3" src="../../assets/img/icon-arrow-next.png" alt=""> -->
        </div>
      </div>

      <!-- categories -->
      <div class="grid md:grid-cols-3 lg:grid-cols-5 px-6 lg:px-14 justify-center gap-5">
        <div
          class="card py-28 text-center align-middle overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/assets/img/card-cover-5.png')]">
          <h4 class="text-white text-xl font-bold">CLOTHS</h4>
          <h6 class="text-white text-xl">5 Items</h6>
        </div>
        <div
          class="card py-28 text-center align-middle overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/assets/img/hero-1.png')]">
          <h4 class="text-white text-xl font-bold">CLOTHS</h4>
          <h6 class="text-white text-xl">5 Items</h6>
        </div>
        <div
          class="card py-28 text-center align-middle overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/assets/img/card-cover-7.png')]">
          <h4 class="text-white text-xl font-bold">CLOTHS</h4>
          <h6 class="text-white text-xl">5 Items</h6>
        </div>
        <div
          class="card py-28 text-center align-middle overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/assets/img/card-cover-8.png')]">
          <h4 class="text-white text-xl font-bold">CLOTHS</h4>
          <h6 class="text-white text-xl">5 Items</h6>
        </div>
        <div
          class="card py-28 text-center align-middle overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/assets/img/card-cover-9.png')]">
          <!-- <h4 class="text-white font-bold">CLOTHS</h4>
          <h6 class="text-white font-bold">5 Items</h6> -->
        </div>

      </div>


    </div>
    <div class=" bg-[#fff] py-12">
      <div class="container mx-auto lg:px-14 my-8 bg-[#fff]">
        <!-- navigation -->
        <div class="grid grid-cols-3 px-6 lg:px-14 my-6">
          <h5 class="my-auto font-bold text-gray-500">Showing all 12 results</h5>
          <div class="flex flex-row text-end">
            <h5 class="my-auto font-bold text-gray-500">Views:</h5>
            <button type="button" class="border p-1 w-16 py-3 rounded mx-4"><img class="mx-auto"
                src="../../assets/img/icon.png" alt=""></button>
            <button type="button" class="border p-1 w-16 py-3 rounded"><img class="mx-auto"
                src="../../assets/img/icon-toggle.png" alt=""></button>
          </div>
        </div>
      </div>
      <!-- <Product /> -->
      <div class="grid grid-cols-4 gap-5">
        <div v-for="p in products" :key="p.id">
          <ProductCard :product="p" />

          <NuxtLink :to="`/shop/${p.id}`" class="font-bold">{{ p.title }}</NuxtLink>
        </div>
      </div>

    </div>
    <Socials />
    <Footer />

  </div>
</template>
  
<script setup>
import Product from '@/components/Product.vue';
// definePageMeta({
//         layout: 'products'
//     })

    // fetch the products
    const { data: products } = await useFetch('https://fakestoreapi.com/products')

// export default {
//   components: {
//     Product,
//   },
// };
</script>
  