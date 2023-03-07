<script setup>
import { Icon } from "../icons";
</script>

<template>
  <section class="heroSection">
    <img
      class="heroSection__image"
      src="https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABb65X1TnPi-UFZNMZhm2OgmBAobm1kFUMpkCGOfv0P0K7GkGXxKVw5f3pnJ87HGAiwITukjFlL8BhQn_DYWxbpe9hXZ1iuDk-c9f9e4TQFd2.webp?r=943"
      alt=""
    />

    <p class="heroSection__text">
      Viking kahramanı Ragnar Lothbrok’un, ileriyi göremeyen, yetersiz bir
      lidere meydan okuyarak Norse sınırlarını nasıl genişlettiğini
      seyrettiğimiz gerçekçi bir dram.
    </p>
    <button class="heroSection--playButton"><Icon name="play" /> Oynat</button>
    <button class="heroSection--attentionButton">
      <Icon name="attention" /> Dada Fazla Bilgi
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hero: [
        {
          img: "link",
          title: "5.",
          paragraf: "",
        },
      ],
    };
  },
};
</script>
