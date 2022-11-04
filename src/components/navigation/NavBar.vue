<script setup>
import { onMounted } from "vue";
import {gsap } from "gsap"
import NavLink from "./NavLink.vue";


const navLinks = [
  {
    title: "Home",
    route: "/",
    linkid: "home-link"
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Projekte",
    route: "/home",
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
