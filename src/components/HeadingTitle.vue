<template>
  <header class="w-full">
    <div class="w-full bg-white">
      <div class="flex flex-col h-full p-5 mx-auto text-brand-text-1">
        <h2 class="text-xl w-full font-serif italic mb-1">{{ names }}</h2>
        <h1 class="text-4xl w-full font-bold">{{ title }}</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeadingTitle",
  data() {
    return {
      names: "Nomi's & Jonah's",
      title: "nützliche Jedanken",
    };
  },
};
</script>
