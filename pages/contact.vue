<template>
    <div>
        <h2>Contact Us Page</h2>
        <h2 v-for="(crumb, index) in crumbs" :key="index" property="itemListElement" typeof="ListItem" class="breadcrumb-item pageTitle">{{$route.fullPath === crumb.path && title !== null ? title : crumb.title}}</h2>
        
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'exclusive'
   })
        
</script>

<style scoped>
     h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
</style>