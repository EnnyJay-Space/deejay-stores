<template>
  <div>
    <div class="container mx-auto lg:px-14 my-14 ">
      <div class="grid grid-cols-2 px-6 lg:px-14	 ">
        <h3 class="mb-2 text-4xl font-bold text-start leading-tight text-neutral-800 dark:text-neutral-50">
          Shop</h3>
        <div class="text-end">
          <h4 class="font-bold text-gray-500">Home</h4><MaterialIcon name="home" />
          <img class="w-3 ms-3" src="/assets/img/vector.png" alt="">
        </div>
      </div>
    </div>
    <Product />
  </div>
</template>
  
<script>
import { MaterialIcon } from '@nuxtjs/material-icons'
import Product from '@/components/Product.vue';

export default {
  components: {
    Product,
  },
};
</script>
  