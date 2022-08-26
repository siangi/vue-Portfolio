<script setup>
import ProjectCard from "./ProjectCard.vue";
</script>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 0,
          title: "fonts and cards",
          elementId: "font-and-cards",
          liveLink: "https://siangi.github.io/fonts-and-cards/",
          detailLink: "/",
        },
        { id: 1,
          title: "colors and animations",
          elementId: "colors-and-animations",
          liveLink: "https://siangi.github.io/colors-and-animations/",
          detailLink: "/",
        },
        { id: 2,
          title: "responsive design",
          elementId: "responsive-design",
          liveLink: "https://siangi.github.io/responsive-design/",
          detailLink: "/",
        },
        { id: 3,
          title: "design-with-frameworks",
          elementId: "responsive-design",
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
