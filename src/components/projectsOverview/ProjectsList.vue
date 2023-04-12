<script setup>
import ProjectCard from "./ProjectCard.vue";
import {storeToRefs} from "pinia"
import useProjectStore from "@/stores/projectStore";
// import computed from "vue";

const store = useProjectStore()
// const localProjects = computed(() => store.projects)
</script>

<template>
  <section class="project" id="projectList">
    <h2>Projects</h2>
    <div class="project-content">
      <ProjectCard
        v-for="(project) in store.projects"
        ref="store"
        v-bind="project"
        :id="project.id"
        :key="project.id"
      ></ProjectCard>
    </div>
  </section>
</template>
