<script setup>
import { RouterLink } from "vue-router";
defineProps(["route", "title"]);
</script>

<template>
  <li>
    <RouterLink class="up-arrow" :to="route">{{ title }}</RouterLink>
  </li>
</template>
