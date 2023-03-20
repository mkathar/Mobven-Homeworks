<script>
import Header from "../components/header.vue";
import Movies from "../components/movies.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";

export default {
  name: "Home",
  data() {
    return {
      movies: this.$store.state.movies,
      selectedMovies: null,
    };
  },
  components: {
    headers: Header,
    movies: Movies,
  },
  created() {
    this.selectedMovies = this.movies.filter(
      (item) => item.type == this.$route.name
    )[0];
  },
  watch: {
    "$route.name"() {
      this.selectedMovies = this.movies.filter(
        (item) => item.type == this.$route.name
      )[0];
    },
  },
};
</script>

<template>
  <headers :hero="selectedMovies.hero" />
  <movies :movies="selectedMovies.contents" />
</template>
