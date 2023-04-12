<script setup>
import SmallHeader from "../components/SmallHeader.vue";
import useProjectStore from "@/stores/projectStore";

const props = defineProps(["id"]);

// const store = useProjectStore();
// yes i know, this is no good, but I cant get it to work in production with the pinia store
let localProjects = [
  {
    "id": 0,
    "title": "Ragnarock",
    "thumbnailUrl": "//images.ctfassets.net/jfbiriazkehh/2bdMUEC0yO4VmqqC1jC95E/5525f7f9b72ed74a78bc7c1ada38ed3e/RagnarockFull1Cut.png",
    "documentationEntries": [
      {
        "isImage": true,
        "textTitle": "Full Screen Image of Ragnarock Webpage",
        "imageUrl": "//images.ctfassets.net/jfbiriazkehh/2bdMUEC0yO4VmqqC1jC95E/5525f7f9b72ed74a78bc7c1ada38ed3e/RagnarockFull1Cut.png",
        "positioning": "grid-all"
      },
      {
        "isImage": false,
        "textParagraph": "Eine Website für das fiktive RAGNAROCK Festival. Semesterarbeit in einer Gruppe. Die Website zeigt das Line-up die running Order, es kann ein eigener Konzertplan\nzusammengestellt werden und natürlich ein (bis auf den Zahlvorgang) funktionsfähigen Ticketshop. Das Branding und das Design sind für ein Rock-Festival passend.\nDie Website funktioniert für alle Bildschirme optimiert.",
        "positioning": "grid-left"
      },
      {
        "isImage": true,
        "textTitle": "Shop, Mobile View",
        "imageUrl": "//images.ctfassets.net/jfbiriazkehh/1Y6URylPDQ94YjTsDAcxFI/d9559d1ec05ba2bb10b65b5e7ed1c125/RagnarockPhone2.png",
        "positioning": "grid-right grid-thin"
      },
      {
        "isImage": false,
        "textTitle": "Technologien",
        "textParagraph": "Für das Frontend verwendeten wir REACT und Tailwind CSS. Die Daten holten wir aus einer API, die von den Prüfern bereitgestellt wurde.",
        "positioning": "grid-left"
      },
      {
        "isImage": true,
        "textTitle": "Basket Screenshot, Desktop view",
        "imageUrl": "//images.ctfassets.net/jfbiriazkehh/6TJXuH1A9UzLQ3T3qFNQe7/f6f9d77b536858eb2a7745259455a260/RagnarockBasketFullCut.png",
        "positioning": "grid-all"
      }
    ],
    "liveLink": "https://ragnarock.netlify.app",
    "repositoryLink": "https://github.com/Maxframe/brumbrum-repo"
  },
  {
    "id": 1,
    "title": " Jimi Hendrix' Geschichte",
    "thumbnailUrl": "//images.ctfassets.net/jfbiriazkehh/4SS2xorgfHXQRdZdPvflgj/2c2fc21c5b9c170a4ae2b4008a19b2d7/JimiHendrixFull1Cut.png",
    "documentationEntries": [
      {
        "isImage": true,
        "textTitle": "Screenshot of the dancing Letters",
        "imageUrl": "//images.ctfassets.net/jfbiriazkehh/4SS2xorgfHXQRdZdPvflgj/2c2fc21c5b9c170a4ae2b4008a19b2d7/JimiHendrixFull1Cut.png",
        "positioning": "grid-all"
      },
      {
        "isImage": false,
        "textParagraph": "In dieser Website stelle ich Jimi Hendrix' Geschichte in einem Scrollytelling dar. Sie ist im Rahmen eines\nMentorats mit Fokus auf Webdesign und Animationen entstanden. Das Highlight ist ein Live-Video, zu dem animierte Buchstaben auf dem Bildschirm tanzen.",
        "positioning": "grid-left"
      },
      {
        "isImage": true,
        "textTitle": "Screenshot of the page in tablet view",
        "imageUrl": "//images.ctfassets.net/jfbiriazkehh/3uTRu9zsRF27yAx77zooHN/7b975e5d7a9295ea7182252ee1d5dd7e/JimiHendrixTab1.png",
        "positioning": "grid-left"
      },
      {
        "isImage": true,
        "textTitle": "screenshot of the last chapter",
        "imageUrl": "//images.ctfassets.net/jfbiriazkehh/1Kab5BXu3qAi1Xbv6LNdLs/8bd092dafcc70fa2181ba9ea9fcb8ac7/JimiHendrixFull2Cut.png",
        "positioning": "grid-right"
      },
      {
        "isImage": false,
        "textTitle": "Technologien",
        "positioning": "grid-left",
        "textParagraph": "Pures HTML5 & CSS3, Animationen mit Javascript und Bootstrap",
      }
    ],
    "liveLink": "https://men3-jimihendrix.netlify.app/",
    "repositoryLink": "https://github.com/siangi/MEN3"
  },
  {
    "id": 2,
    "title": "Carbon Tracker",
    "thumbnailUrl": "//images.ctfassets.net/jfbiriazkehh/2YWJ6Lyzgq7WhSNexgRj78/37bfc58cbe0f7124cb414493769449e1/CarbonTrackerFull1Cut.png",
    "documentationEntries": [
      {
        "isImage": true,
        "textTitle": "Homepage Screenshot",
        "imageUrl": "//images.ctfassets.net/jfbiriazkehh/2YWJ6Lyzgq7WhSNexgRj78/37bfc58cbe0f7124cb414493769449e1/CarbonTrackerFull1Cut.png",
        "positioning": "grid-all"
      },
      {
        "isImage": false,
        "textParagraph": "Das Internet braucht eine Menge Energie. Der Carbon Tracker zeigt für eine beliebeige Website auf, wie viel\nCO2 verbraucht wird und wo das grösste Sparpotenzial liegt. Die Website ist auf technisch nicht versierte Personen ausgerichtet und \nzeigt mit dynamischen Grafiken, was Verbesserungen bewirken. Sie funktioniert auch auf allen Bildschirmen einwandfrei.",
        "positioning": "grid-left"
      },
      {
        "isImage": true,
        "imageUrl": "//images.ctfassets.net/jfbiriazkehh/6dO1rofHDcOPiYsB0TYN5X/c1d03aebfddcdd98b84f9bff3f89f8cd/CarbonTrackerFull3Cut.png",
        "positioning": "grid-right"
      },
      {
        "isImage": true,
        "imageUrl": "//images.ctfassets.net/jfbiriazkehh/3F6QowMyDm1IRnemJGMALY/942602cd9c821e938b97b1fc8d7dac5b/CarbonTrackerFul2.png",
        "positioning": "grid-left grid-thin"
      },
      {
        "isImage": false,
        "textTitle": "Technologien",
        "textParagraph": "Für diese Website habe ich nur am Frontend gearbeitet. Dabei wurden plain HTML und JS verwendet, für das Styling SCSS. "
      }
    ],
    "liveLink": "https://carbon-tracker.netflify.app",
    "repositoryLink": "https://github.com/lucian-aionicesei/carbon-tracker"
  },
  {
    "id": 3,
    "title": "Brum Brum Tours",
    "thumbnailUrl": "//images.ctfassets.net/jfbiriazkehh/2c1ZCWXPz15e2OW3efQIkd/6fd839d41ee9d0bab067942ceefb710e/BrumBrumFullScreenCut.png",
    "documentationEntries": [
      {
        "isImage": true,
        "textTitle": "Screenshot of Brum Brum tours webpage",
        "imageUrl": "//images.ctfassets.net/jfbiriazkehh/2c1ZCWXPz15e2OW3efQIkd/6fd839d41ee9d0bab067942ceefb710e/BrumBrumFullScreenCut.png",
        "positioning": "grid-all"
      },
      {
        "isImage": true,
        "textTitle": "Detail view of motorcycle on map",
        "imageUrl": "//images.ctfassets.net/jfbiriazkehh/4UNVqMPKNdEKPkJ0hrzQ51/5e749e0e6ccf87c783891efd063e1075/BrumDetail1.png",
        "positioning": "grid-left"
      },
      {
        "isImage": false,
        "textParagraph": "Mit dieser Website stellen wir dar, was alles auf einer Motorrad Tour passieren kann.\nUser:innen scrollen links an der Route entlang, während rechts passende Bilder, Videos und kurze Texte eingeblendet werden.\nDie 3D Darstellung von Mapbox wirkt immersiv, sie bildet eine räumliche Ergänzung zu den Aufnahmen. ",
        "positioning": "grid-right"
      },
      {
        "isImage": false,
        "textTitle": "Technologien",
        "textParagraph": "Für das Projekt verwendeten wir Vue, was für mich neu war. Die Karte wird mit Mapbox dargestellt. \nDeren API war einfach zu lernen, die \"3rd Person View\" allerdings ziemlich kompliziert, schön hinzubekommen.\nDie Inhalte werden vom Contentful CMS geladen. \n",
        "positioning": "grid-all"
      },
      {
        "isImage": true,
        "textTitle": "Full Screen picture of Brum Brum Tours",
        "imageUrl": "//images.ctfassets.net/jfbiriazkehh/1OKEl82LBCjSGolSA49FVX/d6c49b9abd271e7a3bbaab3a936041a0/BrumBrumFullScreen2Cut.png",
        "positioning": "grid-all"
      }
    ],
    "liveLink": "https://brumbrum.netlify.app",
    "repositoryLink": "https://github.com/Maxframe/brumbrum-repo"
  }
]
const project = localProjects[props.id];

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
          >Home</RouterLink
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
