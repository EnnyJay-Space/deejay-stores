<template>
	<div class="container mx-auto lg:px-14 my-14 ">
		<div class="px-6 lg:px-14	 ">
			<h4 class="text-center text-lg">Featured Products</h4>
			<h2 class="mb-2 text-4xl font-bold text-center leading-tight text-neutral-800 dark:text-neutral-50">BESTSELLER
				PRODUCTS</h2>
			<p class="mb-4 text-center text-neutral-600 dark:text-neutral-200">Problems trying to resolve the conflict
				between
			</p>
			<div class="grid sm:grid-col-1 lg:grid-cols-4 gap-5">
				<div v-for="product in products" :key="product.id">
					<ProductCard :product="product" />
				</div>
			</div>
		</div>
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
		// fetch product
		this.productFetched = await $fetch('https://fakestoreapi.com/products')
		// specify the number of products to display
		const products = this.productFetched.slice(0, 4);
		this.products = products
	},
}
</script>