<script setup>
import { Icon } from "../icons";
</script>

<template>
  <section class="heroSection">
    <img
      class="heroSection__image"
      src="https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABehzK0JSTjxd1lZMze_pD_r8D3EKihGcN0Zp8qK8S8JEo3z-6p5CDwdDRpDfJPwMxXqiqPDjLec4SBhtB5wKIWtgUDUnSdzC1aDA7Rhp5HjE.webp?r=4f4"
      alt=""
    />

    <p class="heroSection__text">
      10 yaşındaki teknoloji dehasının önderliğiyle altı kahraman köpek yavrusu
      mizah, sorun çözme becerisi ve havalı araçlarla önemli kurtarma
      görevlerinin altından kalkıyor.
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
      hero: [],
    };
  },
};
</script>
