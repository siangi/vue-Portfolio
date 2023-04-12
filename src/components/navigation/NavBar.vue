<script setup>
import { onMounted } from "vue";
import {gsap } from "gsap"
import NavLink from "./NavLink.vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);


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
onMounted(() => {
  fadeHomeLink() 
  navbarLinkArrows();
})

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

function navbarLinkArrows() {
      let target = document.querySelector("#home-link");
      gsap.to(target, {
          onCompleteParams: [target],
          onComplete: (param) => {
              param.classList.toggle("up-arrow");
              param.classList.toggle("down-arrow");
          },
          scrollTrigger: {
              trigger: ".project-content",
              start: "top 25%",
              end: "top top",
              toggleActions: "play restart restart none",
          },
          duration: 0.1,
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
