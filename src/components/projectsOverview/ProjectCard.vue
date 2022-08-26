<script>
export default {
  props: ["id", "elementId", "title", "liveLink", "detailLink"],
};
</script>

<template>
  <article :id="this.elementId">
    <div class="article-graphic"></div>
    <div class="article-info">
      <h3 class="article-title">{{ this.title }}</h3>
      <div class="forwarding-links">
        <!-- add the id of the project to the link here -->
        <RouterLink class="details underline-on-hover" :to="`/detail/${this.id}`"
          >details</RouterLink
        >
        <a class="underline-on-hover" :href="this.liveLink">live Website</a>
      </div>
    </div>
  </article>
</template>
