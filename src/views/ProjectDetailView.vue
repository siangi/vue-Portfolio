<script setup>
import SmallHeader from "../components/SmallHeader.vue";
</script>

<script>
export default {
  props: ["id"],
  data() {
    return {
      titles: [
        "title numero 0",
        "titello numero 1",
        "titl nümmere 2",
        "mambo numba 3",
        "mango met harrü",
      ],
    };
  },
};
</script>
<template>
  <SmallHeader :title="this.titles[id]"></SmallHeader>
  <nav>
    <ul>
      <li>
        <a
          class="underline-on-hover"
          href="https://github.com/siangi/responsive-design"
          >Github repository</a
        >
      </li>
      <li>
        <a
          class="underline-on-hover"
          href="https://siangi.github.io/responsive-design"
          >Live Webpage</a
        >
      </li>
      <li>
        <a class="underline-on-hover" href="../index.html#responsive-design"
          >back to Overview</a
        >
      </li>
    </ul>
  </nav>
  <section class="detail-image-grid">
    <img
      src="/images/design-with-frameworks/FrameworkCombined.png"
      alt=""
      class="grid-all"
    />
    <div class="grid-left">
      <h3>PICO Framework</h3>
      <p>
        I decided to do this with Pico, because bootstrap is really antiquated,
        and I had never used such a tight design framework before. It was quite
        a challenge to only style it with the framework, since Pico offers so
        little. What is offered is easy to implement though which is a plus. I
        can see this framework being useful if you need to build a cookie-cutter
        website with no special requirements at all, but then why would the
        customer not use wordpress or webflow right away. What also bothered me
        was how fat everything looked with margins and paddings. I get that
        whitespace is needed, but to me it was almost excessive.
      </p>
    </div>
    <img
      src="/images/design-with-frameworks/FrameworkDetail.png"
      alt=""
      class="grid-right"
    />
    <img
      src="/images/design-with-frameworks/FrameworkThinCut.png"
      alt=""
      class="grid-right"
    />
  </section>
</template>
