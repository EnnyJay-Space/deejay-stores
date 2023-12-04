<template>
    <div>
        <h4 class="text-center text-lg">Featured Products</h4>
        <h2 class="mb-2 text-4xl font-bold text-center leading-tight text-neutral-800 dark:text-neutral-50">BESTSELLER
            PRODUCTS</h2>
        <p class="mb-4 text-center text-neutral-600 dark:text-neutral-200">Problems trying to resolve the conflict between
        </p>
        <ul>
            <li v-for="product in products" :key="product.id">
                <h2>{{ product.name }}</h2>
                <p>{{ product.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
        };
    },
    methods: {
        async fetchData() {
            try {
                const response = await this.$axios.get('https://api.example.com/products');
                this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
    },

    mounted() {
        // Call the fetchData method when the component is mounted
        this.fetchData();
    },
}
</script>

<style lang="scss" scoped></style>