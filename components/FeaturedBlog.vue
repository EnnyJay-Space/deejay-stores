<template>
    <div class="bg-[#fff]">
        <div class="py-14 my-10 md:px-12 lg:px-14 lg:mx-14 mx-4 ">
            <h4 class="text-center text-lg">Practice Advice</h4>
            <h2 class="mb-2 text-4xl font-bold text-center leading-tight text-neutral-800 dark:text-neutral-50">Featured
                Posts
            </h2>
            <p class="mb-4 text-center text-neutral-600 dark:text-neutral-200">Problems trying to resolve the conflict
                between
                the two major realms of Classical physics: Newtonian mechanics</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div class="card p-0">
                    <span class="absolute badge">NEW</span>
                    <img src="../assets/img/blog-1.png" alt="">
                    <article v-for="post in posts" :key="post.id"
                        class="flex max-w-xl flex-col items-start justify-between p-8">
                        <div class="flex items-center gap-x-4">
                            <NuxtLink :href="post.category.href" class="blog-category active">{{
                                post.category.title1 }}</NuxtLink>
                            <NuxtLink :href="post.category.href" class="blog-category">{{
                                post.category.title2 }}</NuxtLink>
                            <NuxtLink :href="post.category.href" class="blog-category">{{
                                post.category.title3 }}</NuxtLink>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <NuxtLink :href="post.href">
                                    <span class="absolute inset-0" />
                                    {{ post.title }}
                                </NuxtLink>
                            </h3>
                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
                            <div class="my-2 grid grid-cols-2">
                                <div class="flex">
                                    <img class="w-6 h-6 me-1" src="../assets/img/clock.png" alt=""><time
                                        :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                                </div>
                                <div class="flex justify-end">
                                    <img class="w-6 h-6 me-1" src="../assets/img/comment.png" alt=""><time
                                        :datetime="post.datetime" class="text-gray-500">{{ post.comment }}</time>
                                </div>
                            </div>
                            <NuxtLink class="flex mt-4 font-bold" to="">Learn More <img class="w-3 ms-3"
                                    src="../assets/img/icon-arrow-next.png" alt=""></NuxtLink>
                        </div>
                    </article>
                </div>
                <div class="card p-0">
                    <span class="absolute badge">NEW</span>
                    <img src="../assets/img/blog-2.png" alt="">
                    <article v-for="post in posts" :key="post.id"
                        class="flex max-w-xl flex-col items-start justify-between p-8">
                        <div class="flex items-center gap-x-4">
                            <NuxtLink :href="post.category.href" class="blog-category active">{{
                                post.category.title1 }}</NuxtLink>
                            <NuxtLink :href="post.category.href" class="blog-category">{{
                                post.category.title2 }}</NuxtLink>
                            <NuxtLink :href="post.category.href" class="blog-category">{{
                                post.category.title3 }}</NuxtLink>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <NuxtLink :href="post.href">
                                    <span class="absolute inset-0" />
                                    {{ post.title }}
                                </NuxtLink>
                            </h3>
                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
                            <div class="my-2 grid grid-cols-2">
                                <div class="flex">
                                    <img class="w-6 h-6 me-1" src="../assets/img/clock.png" alt=""><time
                                        :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                                </div>
                                <div class="flex justify-end">
                                    <img class="w-6 h-6 me-1" src="../assets/img/comment.png" alt=""><time
                                        :datetime="post.datetime" class="text-gray-500">{{ post.comment }}</time>
                                </div>
                            </div>
                            <NuxtLink class="flex mt-4 font-bold" to="">Learn More <img class="w-3 ms-3"
                                    src="../assets/img/icon-arrow-next.png" alt=""></NuxtLink>
                        </div>
                    </article>
                </div>
                <div class="card p-0">
                    <span class="absolute badge">NEW</span>
                    <img src="../assets/img/blog-3.png" alt="">
                    <article v-for="post in posts" :key="post.id"
                        class="flex max-w-xl flex-col items-start justify-between p-8">
                        <div class="flex items-center gap-x-4">
                            <NuxtLink :href="post.category.href" class="blog-category active">{{
                                post.category.title1 }}</NuxtLink>
                            <NuxtLink :href="post.category.href" class="blog-category">{{
                                post.category.title2 }}</NuxtLink>
                            <NuxtLink :href="post.category.href" class="blog-category">{{
                                post.category.title3 }}</NuxtLink>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <NuxtLink :href="post.href">
                                    <span class="absolute inset-0" />
                                    {{ post.title }}
                                </NuxtLink>
                            </h3>
                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
                            <div class="my-2 grid grid-cols-2">
                                <div class="flex">
                                    <img class="w-6 h-6 me-1" src="../assets/img/clock.png" alt=""><time
                                        :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                                </div>
                                <div class="flex justify-end">
                                    <img class="w-6 h-6 me-1" src="../assets/img/comment.png" alt=""><time
                                        :datetime="post.datetime" class="text-gray-500">{{ post.comment }}</time>
                                </div>
                            </div>
                            <NuxtLink class="flex mt-4 font-bold" to="">Learn More <img class="w-3 ms-3"
                                    src="../assets/img/icon-arrow-next.png" alt=""></NuxtLink>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
        date: '22 April 2021',
        comment: '10 comments',
        // datetime: '2020-03-16',
        category: { title1: 'Google', ref: '#', title2: 'Trending', href: '#', title3: 'News', href: '#' }
    },
]
</script>
<style scoped>
.badge {
    background-color: #E74040;
    border-radius: 3px;
    color: #fff;
    text-align: center;
    padding: 0 10px;
    margin: 20px 0 0 20px;
    /* h6 */
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    /* 171.429% */
    letter-spacing: 0.2px;
    /* light-drop-shadow */
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
}

.blog-category {
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.2px;
}

.blog-category.active {
    color: #8EC2F2;

}
</style>

