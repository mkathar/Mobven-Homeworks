<template>
  <div class="filter">
    <div class="filter__group__query">
      <div class="filter__group__query__entry">
        <input
          id="search"
          class="filter__group__query--input"
          type="text"
          @keyup="search"
          v-model="query"
          placeholder="Örn: Black Adam"
        />
      </div>
      <div class="filter__group__query">
        <ul class="filter__group__query__list">
          <li class="filter__group__query__list--icon">
            <Icon name="account" />
          </li>
          <li class="filter__group__query__list--icon"><Icon name="pen" /></li>
        </ul>
      </div>
    </div>
    <div class="filter__group__result">
      <div
        class="filter__group__result__item"
        v-for="(movie, index) in filtered"
        :key="index"
      >
        <img
          class="filter__group__result__item--img"
          :src="getImgPURL + movie.poster_path"
          alt=""
        />
        <h1 class="filter__group__result__item--title">{{ movie.title }}</h1>
        <div class="filter__group__result__item__box">
          <p class="filter__group__result__item__box--vote">
            Puan :{{ movie.vote_average }}
          </p>
          <button class="filter__group__result__item__box--btn">
            Detayları Gör
          </button>
        </div>
      </div>
      <p v-if="filtered.length == 0" class="filter__group__result--warning">
        Gösterilecek içerik bulunamadı
      </p>
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
  computed: { ...mapGetters(["getAllMovies", "getImgPURL"]) },
  mounted() {
    this.getMovies();
    console.log(this.getAllMovies);
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
<script setup>
import { Icon } from "../icons.jsx";
</script>
