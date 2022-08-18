<script setup>
import { RouterLink } from "vue-router";
</script>
<script>
export default {
  props: ["route", "title"],
};
</script>

<template>
  <li>
    <RouterLink class="up-arrow" :to="route">{{ title }}</RouterLink>
  </li>
</template>
