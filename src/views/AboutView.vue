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
      <p>Mein Name ist Simon Gisler, ich bin 23 Jahre alt und lebe in Luzern. Programmieren habe ich in der Lehre zum Informatiker gelernt, während dem Studium habe ich den Fokus von Desktop- zu Webentwicklung gewechselt. Im Studiengang Digital Ideation konnte ich durch zahlreiche Projekte praktische Erfahrung mit verschiedensten
      Webtechnologen, aber auch im Webdesign sammeln. Nun will ich das Gelernte in der Berufswelt einsetzen und suche einen Job als Frontend Entwickler.
      </p>
      <br/>
      <p>Passe ich in ihre Firma? Kontaktieren sie mich auf LinkedIn oder unter simon-gisler@gmx.ch</p>
    </div>
    <img 
      src="../../public/images/About.jpg"
      class="grid-right"
      alt="Portrait von Simon Gisler im Profil"
    />
    <div class="grid-left">
      <h3>Ausbildung</h3>
      <ul>
        <li>
          <p>Informatiker Applikationsentwicklung EFZ <br/>
          Von 2015 - 2019 bei der Autocomp AG Reussbühl
          </p>
          
        </li>
        <li>
          <p>Bachelor in Informatik, Studiengang Digital Ideation <br/>
          Von 2020 - 2023 bei der Hochschule Luzern
          Fokus auf Web Development und User Experience  
          </p>
        </li>
      </ul>
    </div>
    <div class="grid-right">
      <h3>Programmierkenntnisse</h3>
      <ul>
        <li>
          <p>HTML, CSS, JS</p>
        </li>
        <li>
          <p>React</p>
        </li>
        <li>
          <p>Vue</p>
        </li>
        <li>
          <p>Python</p>
        </li>
        <li>
          <p>Delphi</p>
        </li>
        <li>
          <p>SQL</p>
        </li>
        <li>
          <p>C#</p>
        </li>
      </ul>
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
