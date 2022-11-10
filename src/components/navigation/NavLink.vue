<script setup>
import { RouterLink } from "vue-router";
const props = defineProps(["linkid", "route", "title"]);
</script>

<template>
  <li>
    <router-link class="up-arrow" :to="props.route" :id="props.linkid">{{ props.title }}</router-link>
  </li>
</template>
