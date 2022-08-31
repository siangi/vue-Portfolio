<script setup>
defineProps(["id", "elementId", "title", "liveLink", "thumbnailUrl"]);
</script>

<template>
  <article>
    <div
      class="article-graphic"
      :style="`background-image: url('${this.thumbnailUrl}')`"
    ></div>
    <div class="article-info">
      <h3 class="article-title">{{ this.title }}</h3>
      <div class="forwarding-links">
        <!-- add the id of the project to the link here -->
        <RouterLink
          class="details underline-on-hover"
          :to="`/detail/${this.id}`"
          >details</RouterLink
        >
        <a class="underline-on-hover" :href="this.liveLink">live Website</a>
      </div>
    </div>
  </article>
</template>
