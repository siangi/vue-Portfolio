<script>
export default {
  props: ["title", "liveLink", "detailLink"],
};
</script>

<template>
  <article>
    <div class="article-graphic"></div>
    <div class="article-info">
      <h3 class="article-title">{{ this.title }}</h3>
      <div class="forwarding-links">
        <a class="details underline-on-hover" :href="this.detailLink"
          >details</a
        >
        <a class="underline-on-hover" :href="this.liveLink">live Website</a>
      </div>
    </div>
  </article>
</template>
