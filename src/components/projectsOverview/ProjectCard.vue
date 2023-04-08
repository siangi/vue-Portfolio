<script setup>
defineProps(["id", "elementId", "title", "liveLink", "thumbnailUrl"]);
// console.log(title)
</script>

<template>
  <article>
    <div
      class="article-graphic"
      :style="`background-image: url('${thumbnailUrl}')`"
    ></div>
    <div class="article-info">
      <h3 class="article-title">{{ title }}</h3>
      <div class="forwarding-links">
        <!-- add the id of the project to the link here -->
        <router-link class="details underline-on-hover" :to="`/detail/${id}`">details</router-link>
        <!-- <a class="underline-on-hover" :href="liveLink">live Website</a> -->
      </div>
    </div>
  </article>
</template>
