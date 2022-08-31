<script setup>
import SmallHeader from "../components/SmallHeader.vue";
import useProjectStore from "@/stores/projectStore";

const props = defineProps(["id"]);

const store = useProjectStore();
const project = store.projectData.projects[props.id];
console.log(project);
</script>

<template>
  <SmallHeader :title="project.title"></SmallHeader>
  <nav>
    <ul>
      <li>
        <a class="underline-on-hover" :href="project.repositoryLink"
          >Github repository</a
        >
      </li>
      <li>
        <a class="underline-on-hover" :href="project.liveLink">Live Webpage</a>
      </li>
      <li>
        <RouterLink class="details underline-on-hover" :to="`/`"
          >back to overview</RouterLink
        >
      </li>
    </ul>
  </nav>
  <section class="detail-image-grid">
    <template
      v-for="(docEntry, index) in project.documentationEntries"
      :key="index"
    >
      <img
        v-if="docEntry.isImage"
        :src="docEntry.imageUrl"
        :alt="docEntry.textTitle"
        :class="docEntry.positioning"
      />
      <div v-else :class="docEntry.positioning">
        <h3>{{ docEntry.textTitle }}</h3>
        <p>{{ docEntry.textParagraph }}</p>
      </div>
    </template>
  </section>
</template>
