<script>
export default {
  props: ["title", "paragraph"],
};
</script>

<template>
  <section class="title-and-paragraph" id="introduction">
    <h2>{{ this.title }}</h2>
    <p>{{ this.paragraph }}</p>
  </section>
</template>
