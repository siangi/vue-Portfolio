<script setup>
import ProjectCard from "./ProjectCard.vue";
</script>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "fonts and cards",
          id: "font-and-cards",
          liveLink: "https://siangi.github.io/fonts-and-cards/",
          detailLink: "/",
        },
        {
          title: "colors and animations",
          id: "colors-and-animations",
          liveLink: "https://siangi.github.io/colors-and-animations/",
          detailLink: "/",
        },
        {
          title: "responsive design",
          id: "responsive-design",
          liveLink: "https://siangi.github.io/responsive-design/",
          detailLink: "/",
        },
        {
          title: "design-with-frameworks",
          id: "responsive-design",
          liveLink: "https://siangi.github.io/designing-with-frameworks/",
          detailLink: "/",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="project" id="projects">
    <h2>Projects</h2>
    <div class="project-content">
      <ProjectCard
        v-for="(project, index) in projects"
        v-bind="project"
        :key="index"
      ></ProjectCard>
    </div>
  </section>
</template>
