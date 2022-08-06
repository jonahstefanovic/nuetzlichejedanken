<template>
  <heading-title />
  <tip-comp />
</template>

<script>
import HeadingTitle from "@/components/HeadingTitle.vue";
import TipComp from "@/components/TipComp.vue";
import AOS from "aos";
AOS.init();

export default {
  name: "App",
  components: {
    HeadingTitle,
    TipComp,
  },
};
</script>

<style scoped>
#app {
  filter: contrast(150%) brightness(1000%);
  background: linear-gradient(
      105deg,
      rgba(255, 255, 255, 1),
      rgba(236, 236, 236, 0)
    ),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 400 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.22' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
</style>
