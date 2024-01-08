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
        <div class="card py-28 text-center align-middle overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/assets/img/card-cover-5.png')]" >
            <h4 class="text-white text-xl font-bold">CLOTHS</h4>
            <h6 class="text-white text-xl">5 Items</h6>
        </div>
        <div class="card py-28 text-center align-middle overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/assets/img/hero-1.png')]" >
            <h4 class="text-white text-xl font-bold">CLOTHS</h4>
            <h6 class="text-white text-xl">5 Items</h6>
        </div>
        <div class="card py-28 text-center align-middle overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/assets/img/card-cover-7.png')]" >
            <h4 class="text-white text-xl font-bold">CLOTHS</h4>
            <h6 class="text-white text-xl">5 Items</h6>
        </div>
        <div class="card py-28 text-center align-middle overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/assets/img/card-cover-8.png')]" >
            <h4 class="text-white text-xl font-bold">CLOTHS</h4>
            <h6 class="text-white text-xl">5 Items</h6>
        </div>
        <div class="card py-28 text-center align-middle overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/assets/img/card-cover-9.png')]" >
          <!-- <h4 class="text-white font-bold">CLOTHS</h4>
          <h6 class="text-white font-bold">5 Items</h6> -->
        </div>
        
      </div>

      <!-- navigation -->
      <div class="grid"></div>
    </div>
    <Product />
  </div>
</template>
  
<script>
import Product from '@/components/Product.vue';

export default {
  components: {
    Product,
  },
};
</script>
  