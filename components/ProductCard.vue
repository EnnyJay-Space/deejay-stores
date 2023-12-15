<template>
    <div >
        <div class="card text-center ">
            <img :src="product.image" alt="product thumb" class="thumb">
            <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
            <p class="font-bold text-gray-500">${{ product.price }}</p>
            <NuxtLink :to="`/products/${product.id}`">
                <p class="btn my-4">View Details</p>
            </NuxtLink>
        </div>
    </div>
</template>
<!-- grid grid-cols-2 gap-5 -->
<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
    /* max-height: 120px; */
    max-width: 100%;
    /* margin: 0 auto; */
}
@media (max-width: 767px) {
    .card {
    max-width: 72% !important;
}
}
</style>