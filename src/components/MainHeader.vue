<script setup> 
  import {gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMounted } from "vue";

  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
      headerFadeIn();
    //   navbarLinkArrows();
    //   articleImagesScaling();
      randomMoveBalls();
  });

  function headerFadeIn() {
      gsap.from(".name-title .left", {
          x: "-10vw",
          opacity: 0.1,
          // rotateY: 30,
          duration: 0.7,
      });

      gsap.from(".name-title .right", {
          x: "+10vw",
          opacity: 0.1,
          // rotateY: 30,
          duration: 0.7,
      });
  }

  function navbarLinkArrows() {
      let target = document.querySelector("#home-link");
      gsap.to(target, {
          onCompleteParams: [target],
          onComplete: (param) => {
              param.classList.toggle("up-arrow");
              param.classList.toggle("down-arrow");
          },
          scrollTrigger: {
              trigger: ".project-content",
              start: "top 25%",
              end: "top top",
              toggleActions: "play restart restart none",
          },
          duration: 0.1,
      });
  }

  function articleImagesScaling() {
      let targets = document.querySelectorAll("article");

      for (let i = 0; i < targets.length; i++) {
          let article = targets[i];

          gsap.from(article, {
              opacity: 0.3,
              scrollTrigger: {
                  trigger: article,
                  start: "top 90%",
                  end: "top 45%",
                  scrub: true,
              },
          });
      }
  }

  function randomMoveBalls() {
      const blueform = document.querySelector("#blueform");
      const yellowform = document.querySelector("#yellowform");

      const positions = getPositionsArray(blueform.clientWidth, blueform.clientHeight, document.documentElement.clientWidth, document.documentElement.clientHeight);
      const loops = 30;
      const animLength = 2;

      const timeline = gsap.timeline({ repeat: -1 });

      for (let i = 0; i < loops; i++) {
          const bluePos = positions[Math.floor(Math.random() * positions.length)];
          const yellowPos = positions[Math.floor(Math.random() * positions.length)];
          timeline.to(
              blueform,
              {
                  x: bluePos[0],
                  y: bluePos[1],
                  duration: animLength,
              },
              animLength * i
          );

          timeline.to(
              yellowform,
              {
                  x: yellowPos[0],
                  y: yellowPos[1],
                  duration: animLength,
              },
              animLength * i
          );
      }
      timeline.play();
  }

  function getPositionsArray(formWidth, formHeight, boundsWidth, boundsHeight) {
      return [
          [0, 0],
          [boundsWidth - formWidth, 0],
          [0, boundsHeight - formHeight],
          [boundsWidth - formWidth, boundsHeight - formHeight],
      ];
  }
</script>

<template>
  <header id="home">
    <div class="negative-form" id="blueform"></div>
    <div class="negative-form" id="yellowform"></div>
    <div class="name-title">
      <h1 class="left show">SIMON</h1>
      <h1 class="right show">GISLER</h1>
    </div>
    <h3>Frontend Developer</h3>
  </header>
</template>

<!-- add logic for the header animation from script.js -->
