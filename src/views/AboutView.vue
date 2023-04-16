<script setup>
import SmallHeader from '../components/SmallHeader.vue';
</script>

<template>
  <SmallHeader title="Über mich"></SmallHeader>
  <nav>
    <ul>
      <li>
        <RouterLink class="details underline-on-hover" :to="`/`"
          >Home</RouterLink
        >
      </li>
      <li>
        <a class="underline-on-hover" href="https://www.linkedin.com/in/simon-gisler-ba5239243"
          >LinkedIn</a
        >
      </li>
      <li>
        <a class="underline-on-hover" href="https://github.com/siangi/">Github</a>
      </li>      
    </ul>
  </nav>
  <section class="detail-image-grid">
    <div class="grid-left">
      <p>Mein Name ist Simon Gisler, ich bin 23 Jahre alt und lebe in Luzern. Programmieren habe ich in der Lehre zum Informatiker gelernt, mit dem Studium habe ich den Fokus von Desktop- zu Webentwicklung gewechselt. Im Studiengang Digital Ideation konnte ich durch zahlreiche Projekte praktische Erfahrung mit verschiedensten
      Webtechnologien, aber auch im Webdesign sammeln. Nun will ich das Gelernte in der Berufswelt einsetzen und suche einen Job als Frontend Entwickler.
      </p>
      <br/>
      <p>Passe ich in Ihre Firma? Kontaktieren Sie mich auf LinkedIn oder unter simon-gisler@gmx.ch</p>
    </div>
    <img 
      src="../../public/images/About.jpg"
      class="grid-right"
      alt="Portrait von Simon Gisler im Profil"
    />


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
