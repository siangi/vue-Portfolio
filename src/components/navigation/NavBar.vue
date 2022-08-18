<script setup>
import NavLink from "./NavLink.vue";
</script>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          title: "home",
          route: "/",
        },
        {
          title: "about",
          route: "/about",
        },
        {
          title: "projects",
          route: "/home#projects",
        },
      ],
    };
  },
};
</script>

<template>
  <nav>
    <ul>
      <NavLink
        v-for="(link, index) in navLinks"
        v-bind="link"
        :key="index"
      ></NavLink>
    </ul>
  </nav>
</template>
