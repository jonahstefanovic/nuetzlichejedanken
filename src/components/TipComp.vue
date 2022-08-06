<template>
  <div
    v-for="tip in tips"
    :key="tip"
    class="mx-5 py-6 border-b last:border-0 border-brand-border-1 overflow-hidden"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <p class="text-brand-text-1 font-serif text-base italic mb-0.5">
      {{ tip.episode }}
    </p>
    <h3 class="text-brand-text-1 text-2xl font-bold mb-3">{{ tip.title }}</h3>
    <p class="text-brand-text-1 mb-2">{{ tip.text }}</p>
    <p class="text-brand-text-1 font-serif italic w-full text-right">
      {{ tip.author }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TipKomponente",
  data() {
    return {
      tips: {
        tip_01: {
          episode: "Epidose 01",
          title: "Sei Smart - pack nur ein mal!",
          text: "Wie oft machen wir den Fehler und packen unsere Rucksäcke nach einer Reise oder einem Festival wieder aus, wenn wir Zuhause sind. Sei Smart und lasse deine Sachen einfach für die nächste Reise gepackt!",
          author: "— Nomi",
        },
        tip_02: {
          episode: "Epidose 02",
          title: "Sei faul - Fahre E-Bike",
          text: "Wer kennt es nicht: Man möchte nur ein mal kurz einen Berg hochfahren und dann passiert es.. der Schweiß fängt an zu tropfen! Ihhh! Sei Smart und nimm das E-Bike. Bonus: Auf Kopfsteinpflaster gibt es gratis Massagen!",
          author: "— Nomi",
        },
        tip_03: {
          episode: "Epidose 03",
          title: "Sodbrennen? - Zeit für Wodka",
          text: "Mal wieder zu viel komische Kurze getrunken? Um Sodbrennen zu bekämpfen eignet sich eine unorthodoxe Methode: Wodka! Am besten pur und kalt genießen! Aber Vorsicht: Sie könnten gefallen daran finden!",
          author: "— Jonah",
        },
      },
    };
  },
};
</script>
