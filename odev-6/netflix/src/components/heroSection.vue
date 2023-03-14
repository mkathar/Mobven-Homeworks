<script setup>
import { Icon } from "../icons";
</script>

<template>
  <section class="heroSection">
    <img class="heroSection__image" :src="hero.contentImage" alt="" />

    <p v-for="content in hero.contentText" class="heroSection__text">
      {{ content }}
    </p>
    <button class="heroSection--playButton"><Icon name="play" /> Oynat</button>
    <button class="heroSection--attentionButton">
      <Icon name="attention" /> Daha Fazla Bilgi
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: { hero: Object },
};
</script>
