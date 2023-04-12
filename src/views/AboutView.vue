<script setup>
import SmallHeader from '../components/SmallHeader.vue';


let Info = {
  title: "Über mich",

}
</script>

<template>
  <SmallHeader title="Über mich"></SmallHeader>
  <nav>
    <ul>
      <li>
        <a class="underline-on-hover" href="https://www.linkedin.com/in/simon-gisler-ba5239243"
          >Linked In</a
        >
      </li>
      <li>
        <a class="underline-on-hover" href="https://github.com/siangi/">Github</a>
      </li>
      <li>
        <RouterLink class="details underline-on-hover" :to="`/`"
          >Home</RouterLink
        >
      </li>
    </ul>
  </nav>
  <section class="detail-image-grid">
    <div class="grid-all">
      Programmieren habe ich in der Lehre zum Informatiker gelernt, während dem Studium wechselte ich den Fokus von Desktop- zu Webentwicklung. Im Studiengang Digital Ideation konnte ich durch Projekte praktische Erfahrung mit verschiedensten
Webtechnologen, aber auch im Webdesign sammeln. Nun will ich das gelernte in der Berufswelt einsetzen. 
    </div>
  </section>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
