<!--
INSTRUCTION: Summary: Contains a section with three cards with black background and white text. The three cards are side by side and each contains a detail name in bold above a detail value.
-->

<template>
  <section id="page-details-cards-component" class="py-8 bg-red-500" style="border: 2px solid green;" data-mwf="true"><h2 id="details-title" class="text-lg font-semibold mb-5 pl-4 text-white" style="" data-mf-new="true">Detailsdfjls</h2> <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm"><li id="project-length" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-red-950 to-red-800 dark:from-red-800/80 dark:to-red-900"><div class="font-medium text-red-200">Real-Time Updates</div> <div class="text-red-400">Stay informed with instant notifications on flight status, delays, and gate changes.</div></li> <li id="start-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-red-950 to-red-800 dark:from-red-800/80 dark:to-red-900"><div id="start-date-des-1" class="font-medium text-red-200">Global Coverage</div> <time id="start-time-des-1" class="text-red-400">Track flights from over 200 airlines and 5000+ airports worldwide.</time></li> <li id="end-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-red-950 to-red-800 dark:from-red-800/80 dark:to-red-900"><div id="end-date-des-1" class="font-medium text-red-200">Personalized Experience</div> <time id="end-time-des-1" class="text-red-400">Save your favorite routes, set alerts, and access historical flight data effortlessly.</time></li></ul></section>
</template>

<script>
export default {
  name: "PageDetailsCardsComponent",
  data() {
    return {
      expanded: false,
      tab: null,
    };
  },
};
</script>
