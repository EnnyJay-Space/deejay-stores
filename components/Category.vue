<template>
    <div class="container mx-auto lg:px-14 my-14">
        <h2 class="mb-2 text-4xl font-bold text-center leading-tight text-neutral-800 dark:text-neutral-50">EDITOR’S PICK
        </h2>
        <p class="mb-4 text-center text-neutral-600 dark:text-neutral-200">Problems trying to resolve the conflict between
        </p>
        <div class="lg:px-14 grid lg:grid-cols-2 gap-5">
            <div class="relative">
                <img src="../assets/img/unsplash_Bd7gNnWJBkU.jpg" alt="category"
                    class="w-full mt-auto bottom-0 left-0 object-cover">
                <div class="absolute bg-[#2d8ac0a1] w-70 pr-20 bottom-0 left-0 p-14">
                    <div class=" d-block">
                        <p class="category-heading text-white mb-10">Top Product Of the Week</p>
                        <NuxtLink class="border px-10 py-3 rounded text-white" to="/blog">EXPLORE ITEMS</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="grid gap-5">
                <div class="relative h-24">
                    <img src="../assets/img/unsplash_muOHbrFGEQY.jpg" alt="category"
                        class="w-full mt-auto h-80 bottom-0 left-0 object-cover">
                    <div class="absolute bg-[#2d8ac0a1] w-70 pr-20 top-16 left-0 p-14 mt-3">
                        <div class=" d-block">
                            <p class="category-heading text-white mb-10">Top Product Of the Week</p>
                            <NuxtLink class="border px-10 py-3 rounded text-white" to="/blog">EXPLORE ITEMS</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="relative h-24">
                    <img src="../assets/img/unsplash_MKvjc2kar7Q.jpg" alt="category"
                        class="w-full mt-auto h-72 bottom-0  left-0 object-cover">
                    <!-- <div class="absolute bg-[#2d8ac0a1] w-70 pr-20 bottom-0 left-0 p-14">
                        <div class=" d-block">
                            <p class="category-heading text-white mb-10">Top Product Of the Week</p>
                            <NuxtLink class="border px-10 py-3 rounded text-white" to="/blog">EXPLORE ITEMS</NuxtLink>
                        </div>
                    </div> -->
                </div>
                <!-- <div class="relative h-64">
                    <img src="../assets/img/unsplash_MKvjc2kar7Q.jpg" alt="category"
                        class="w-full mt-auto bottom-0  left-0 object-fill">
                    <div class="absolute bg-[#2d8ac0a1] w-70 pr-20 bottom-0 left-0 p-14">
                        <div class=" d-block">
                            <p class="category-heading text-white mb-10">Top Product Of the Week</p>
                            <NuxtLink class="border px-10 py-3 rounded text-white" to="/blog">EXPLORE ITEMS</NuxtLink>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="relative">
                    <img src="../assets/img/unsplash_Bd7gNnWJBkU.jpg" alt="category"
                        class="w-full mt-auto bottom-0 left-0 object-cover">
                    <div class="absolute bg-[#2d8ac0a1] w-70 pr-20 bottom-0 left-0 p-14">
                        <div class=" d-block">
                            <p class="category-heading text-white mb-10">Top Product Of the Week</p>
                            <NuxtLink class="border px-10 py-3 rounded text-white" to="/blog">EXPLORE ITEMS</NuxtLink>
                        </div>
                    </div>
                </div> -->
            </div>
            <!-- <div class="card">
                <img src="../assets/img/card-item.png" alt="category" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-4">
                    <span class="font-bold">5 bean chill</span>
                    <span class="block text-gray-500 text-sm">Recipe by EnnyJay</span>
                </div>
                <div class="badge">
                    <span>25 mins</span>
                </div>
            </div> -->

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            features: [
                { id: 1, name: 'MEN', image: '/assets/img/hero-1.png' },
            ],
        }
    }
}
</script>

<style scoped>
.category-heading {
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
}
</style>