<script setup>
import MainHeader from "../components/MainHeader.vue";
import NavBar from "../components/navigation/NavBar.vue";
import ProjectsList from "../components/projectsOverview/ProjectsList.vue";
import TextSection from "../components/TextSection.vue";
</script>

<script>
export default {
  data() {
    return {
      textStart: {
        title: "Introduction",
        paragraph: `Four Assignments, five interesting Webpages, because this one is too. Look
            through them to witness my skills as a web designer and developer. Most of
            the time you will not witness both of those at the same time, this
            portfolio is a good view of both though.`,
      },
      textEnd: {
        title: `Conclusion`,
        paragraph: `I liked this theme. The color theory part was more helpful than anything I
            learned about that before. Overall the clear guidelines were very cool and
            the working and theory was well balanced out. I had never really done the
            “observing design” before, so that is a cool new method.`,
      },
    };
  },
  
};
</script>

<template>
  <MainHeader></MainHeader>
  <NavBar></NavBar>
  <TextSection v-bind="this.textStart"></TextSection>
  <ProjectsList></ProjectsList>
  <TextSection v-bind="this.textEnd"></TextSection>
</template>
