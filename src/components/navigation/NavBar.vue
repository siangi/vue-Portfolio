<script setup>
import { onMounted } from "vue";
import {gsap } from "gsap"
import NavLink from "./NavLink.vue";


const navLinks = [
  {
    title: "home",
    route: "/",
    linkid: "home-link"
  },
  {
    title: "about",
    route: "/about",
  },
  {
    title: "projects",
    route: "/home#projects",
  },
];
onMounted(() => fadeHomeLink)

function fadeHomeLink() {
      gsap.to("#home-link", {
          opacity: 1,
          scrollTrigger: {
              trigger: "#introduction",
              scrub: true,
              start: "top center",
              end: "top top",
          },
      });
}

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
