<template>
	<div>
		<h4 class="text-center text-lg">Featured Products</h4>
		<h2 class="mb-2 text-4xl font-bold text-center leading-tight text-neutral-800 dark:text-neutral-50">BESTSELLER
			PRODUCTS</h2>
		<p class="mb-4 text-center text-neutral-600 dark:text-neutral-200">Problems trying to resolve the conflict between
		</p>
		<!-- <div class="grid grid-cols-4 gap-5">
			<ProductCard :product="product" />
			<NuxtLink :to="`/products/${product.id}` " class="font-bold">{{ product.title }}</NuxtLink>

		</div> -->
		<p v-for="product in products" :key="product.id">ID: {{ product.id }} 👉 {{ product.title }} 👉 {{ product.image }}
		</p>
		<!-- <img :src="product.image" alt="product thumb" class="thumb"> -->
	</div>
</template>
  
  
<script>
//   definePageMeta({
// 	layout: "p"
//   })

export default {
	data() {
		return {
			products: {},
		}
	},
	async mounted() {
		this.products = await $fetch('https://fakestoreapi.com/products')
	},
  }
  </script>