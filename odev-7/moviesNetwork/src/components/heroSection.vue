<template>
  <swiper class="mySwiper">
    <swiper-slide v-for="movie in getAllMovies" :key="movie.id">
      <img :src="getImgURL + movie.backdrop_path" alt="" />
      <h1 class="mySwiper__title">{{ movie.title }}</h1></swiper-slide
    >
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {};
  },
  computed: { ...mapGetters(["getAllMovies", "getImgURL"]) },
  methods: {
    ...mapActions(["getMovies"]),
  },
};
</script>
