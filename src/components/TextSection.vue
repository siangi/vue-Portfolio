<script>
export default {
  props: ["title", "paragraph"],
  created() {
    console.log(this.title);
    console.log(this.paragraph);
  },
};
</script>

<template>
  <section class="title-and-paragraph" id="introduction">
    <h2>{{ this.title }}</h2>
    <p>{{ this.paragraph }}</p>
  </section>
</template>
