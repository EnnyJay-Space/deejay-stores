<template>
    <div class="container mx-auto lg:px-14 my-14">
        <h2 class="mb-2 text-4xl font-bold text-center leading-tight text-neutral-800 dark:text-neutral-50">EDITOR’S PICK
        </h2>
        <p class="mb-4 text-center text-neutral-600 dark:text-neutral-200">Problems trying to resolve the conflict between
        </p>
        <div class="px-6 lg:px-14 grid lg:grid-cols-2 gap-5">
            <div class="relative">
                <img src="../assets/img/unsplash_Bd7gNnWJBkU.jpg" alt="category"
                    class="w-full mt-auto bottom-0 left-0  object-cover">
                <div class="absolute bg-[#2d8ac0a1] w-70 pr-24  bottom-0 lg:left-0 p-8 lg:p-14">
                    <div class=" d-block">
                        <p class="category-heading text-white mb-10 text-sm lg:text-2xl">Top Product Of the Week</p>
                        <NuxtLink class="border px-10 py-3 rounded text-white text-sm category-btn" to="/">EXPLORE ITEMS</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
                <div class="relative h-24 ">
                    <img src="../assets/img/unsplash_MKvjc2kar7Q.jpg" alt="category"
                        class="w-full mt-auto bottom-0 h-96 lg:h-72 left-0 object-cover ">
                    <div class="absolute bg-[#2d8ac0a1] w-70 top-60  pr-24 lg:top-16 lg:mt-4 left-0 p-7 lg:p-14">
                        <div class=" d-block">
                            <p class="category-heading text-white mb-10 text-sm lg:text-2xl">Top Product Of the Week</p>
                            <NuxtLink class="border px-10 py-3 rounded text-white text-sm  category-btn" to="/">EXPLORE ITEMS
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="relative h-24 top-72 md:top-0 lg:top-0 bg-[#909]">
                    <img src="../assets/img/unsplash_muOHbrFGEQY.jpg" alt="category"
                        class="w-full mt-auto bottom-0 h-96 lg:h-72 left-0 object-cover">
                    <div class="absolute bg-[#2d8ac0a1] w-70 pr-24 top-60 lg:top-16 lg:mt-4 left-0 p-7 lg:p-14">
                        <div class=" d-block">
                            <p class="category-heading text-white mb-10 text-sm lg:text-2xl">Top Product Of the Week</p>
                            <NuxtLink class="border px-10 py-3 rounded text-white text-sm category-btn" to="/">EXPLORE ITEMS
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.category-heading {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
}
.category-btn:hover{
    background-color: #2DC071;
    border: #2DC071;
}

@media (min-width: 1024px) and (max-width: 1536px) {
    .lg\:h-72 {
        height: 10.8rem;
    }

    .lg\:p-14 {
        padding: 1rem;
    }

    .lg\:top-16 {
        top: 2.8rem;
    }

    .lg\:mt-4 {
        margin-top: 0;
    }
}
</style>