<script setup>
import { reactive } from "vue";
import ProjectCard from "./ProjectCard.vue";
import { createClient } from "contentful";

const state = reactive({projects: []})


function cleanProjectsArray(contentfulData) {
  let result = [];
  contentfulData.items.forEach((projectItem, index) => {
    let cleanProject = {
      id: index,
      title: projectItem.fields.title,
      thumbnailUrl: projectItem.fields.thumbnail.fields.file.url,
      documentationEntries: [],
      liveLink: projectItem.fields.liveLink,
    };
    projectItem.fields.documentationEntries.forEach((docItem) => {
      let cleanDoc = {
        isImage: docItem.fields.isImage,
        textTitle: docItem.fields.textTitle,
        imageUrl: docItem.fields.imageContent?.fields.file.url,
        textContent: docItem.fields.textContent?.content[0].content.value,
        positioning: docItem.fields.positioning,
      };
      cleanProject.documentationEntries.push(cleanDoc);
    });

    result.push(cleanProject);
  });
  return result;
}


let client = createClient({
  space: "jfbiriazkehh",
  accessToken: "PJ2rc9wfcHt-OqFmTWgRF5usmXx7_8u3qAJ2cbWDdbI",
});

client
  .getEntries({
    content_type: "portfolioProjects",
  })
  .then((entries) => {
    state.projects = cleanProjectsArray(entries);
    console.log(state.projects)
  });


</script>

<template>
  <section class="project" id="projectList">
    <h2>Projects</h2>
    <div class="project-content">
      <ProjectCard
        v-for="(project, index) in state.projects"
        v-bind="project"
        :key="index"
      ></ProjectCard>
    </div>
  </section>
</template>
