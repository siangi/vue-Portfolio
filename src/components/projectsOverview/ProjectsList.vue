<script setup>
import ProjectCard from "./ProjectCard.vue";
import useProjectStore from "@/stores/projectStore";

const store = useProjectStore();
console.log(store.projects);
</script>

<template>
  <section class="project" id="projectList">
    <h2>Projects</h2>
    <div class="project-content">
      <ProjectCard
        v-for="(project, index) in store.projects"
        ref="store"
        v-bind="project"
        :id="index"
        :key="index"
      ></ProjectCard>
    </div>
  </section>
</template>
