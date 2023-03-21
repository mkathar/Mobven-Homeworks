<template>
  <div class="filter">
    <label class="filter--label" for="search"> Arayın</label>
    <input
      id="search"
      class="filter__input"
      type="text"
      @keyup="search"
      v-model="query"
    />
    <div class="filter__group">
      <div
        class="filter__group__item"
        v-for="(movie, index) in filtered"
        :key="index"
      >
        <img
          class="filter__group__item--img"
          :src="getImgURL + movie.backdrop_path"
          alt=""
        />
        <h1 class="filter__group__item--title">{{ movie.title }}</h1>
        <div class="filter__group__item__box">
          <p class="filter__group__item__box--vote">
            Puan :{{ movie.vote_average }}
          </p>
          <button class="filter__group__item__box--btn">Detayları Gör</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      filtered: [],
    };
  },
  computed: { ...mapGetters(["getAllMovies", "getImgURL"]) },
  mounted() {
    this.getMovies();
    this.search();
  },
  methods: {
    ...mapActions(["getMovies"]),
    ...mapMutations(["SET_MOVIES"]),
    search() {
      this.filtered = this.getAllMovies.filter((item) => {
        if (
          item.title.toLowerCase().includes(this.query) &&
          this.query.length > 3
        ) {
          return item;
        }
      });
    },
  },
};
</script>
