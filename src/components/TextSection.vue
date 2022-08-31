<script setup>
defineProps(["title", "paragraph"]);
</script>

<template>
  <section class="title-and-paragraph" id="introduction">
    <h2>{{ title }}</h2>
    <p>{{ paragraph }}</p>
  </section>
</template>
