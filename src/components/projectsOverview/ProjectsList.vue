
<script setup>
  import ProjectCard from "./ProjectCard.vue";
  import useProjectStore from "@/stores/projectStore";

  const store = useProjectStore();
  console.log(store.projectData.projects.length);
  console.log(store.projectData.projects);

</script>

<template>
  <section class="project" id="projectList">
    <h2>Projects</h2>
    <div class="project-content">
      <ProjectCard
        v-for="(project, index) in store.projectData.projects"
        v-bind="project"
        :key="index"
      ></ProjectCard>
    </div>
  </section>
</template>
