<script setup>
import MainHeader from "../components/MainHeader.vue";
import NavBar from "../components/navigation/NavBar.vue";
import ProjectsList from "../components/projectsOverview/ProjectsList.vue";
import TextSection from "../components/TextSection.vue";

const textStart = {

  paragraph: `Noch Student bei der Hochschule Luzern, bald bei Ihnen als Frontend Entwickler beschäftigt. 
    Erkunden sie die Highlights meiner sechs Semester bei Digital Ideation!`,
};
const textEnd = {
  title: `Interesse geweckt?`,
  paragraph: `Besprechen wir, wie wir zusammenarbeiten können. Kontaktieren Sie mich unter simon-gisler@gmx.ch`,
};
</script>

<template>
  <MainHeader></MainHeader>
  <NavBar></NavBar>
  <TextSection v-bind="textStart" id="introduction"></TextSection>
  <ProjectsList></ProjectsList>
  <TextSection v-bind="textEnd" id="outroduction"></TextSection>
</template>
