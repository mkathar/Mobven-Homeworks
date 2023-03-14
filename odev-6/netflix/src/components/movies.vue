<template>
  <div class="carouselArea">
    <select
      name="movies"
      v-model="selected"
      v-on:change="goster"
      v-if="$route.name == 'Home'"
    >
      <option value="all">hepsi</option>
      <option value="Gündemdekiler">Gündemdekiler</option>
      <option value="Ödüllü Filmler">Ödüllü Filmler</option>
      <option value="Komediler">Komediler</option>
      <option value="Gerçek Hayattan Uyarlanan Filmler">
        Gerçek Hayattan Uyarlanan Filmler
      </option>
    </select>
    <article class="carousel" v-if="filtered[0]">
      <h1 class="carousel__title">{{ filtered[0].name }}</h1>
      <swiper
        :modules="modules"
        :slides-per-view="6.5"
        :space-between="0"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="carousel__item"
          v-for="(item, index) in filtered[0].film"
        >
          <div class="popover__content">
            <img
              class="popover__content__image"
              alt="Film"
              :src="baseUrl + item.link"
            />
            <div class="popover__message">
              <div class="popover__ıcons">
                <div>
                  <Icon name="play" fill="white" />
                  <Icon name="add" fill="white" />
                  <Icon name="like" fill="white" />
                </div>
                <Icon name="cardDown" fill="white" />
              </div>
              <p class="popover__text">
                <span class="popover__text--match">%98 Eşleşme</span>
                <span class="popover__text--age">+18</span>
                <span class="popover__text--season">5 Sezon</span>
                <span class="popover__text--quality">HD</span>
              </p>
              <p class="popover__type">
                Şiddet içerikli - Sert Gerçekçi - Gerilim
              </p>
              <h6 class="popover__like"><Icon name="like" /> Çok Beğenildi</h6>
            </div>
          </div>
          <img class="carousel__images" :src="baseUrl + item.link" alt="" />
        </swiper-slide>
      </swiper>
    </article>
    <article class="carousel" v-if="filtered[1]">
      <h1 class="carousel__title">{{ filtered[1].name }}</h1>
      <swiper
        :modules="modules"
        :slides-per-view="6.5"
        :space-between="0"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="carousel__item"
          v-for="(item, index) in filtered[1].film"
        >
          <div class="popover__content">
            <img
              class="popover__content__image"
              alt="Film"
              :src="baseUrl + item.link"
            />
            <div class="popover__message">
              <div class="popover__ıcons">
                <div>
                  <Icon name="play" fill="white" />
                  <Icon name="add" fill="white" />
                  <Icon name="like" fill="white" />
                </div>
                <Icon name="cardDown" fill="white" />
              </div>
              <p class="popover__text">
                <span class="popover__text--match">%98 Eşleşme</span>
                <span class="popover__text--age">+18</span>
                <span class="popover__text--season">5 Sezon</span>
                <span class="popover__text--quality">HD</span>
              </p>
              <p class="popover__type">
                Şiddet içerikli - Sert Gerçekçi - Gerilim
              </p>
              <h6 class="popover__like"><Icon name="like" /> Çok Beğenildi</h6>
            </div>
          </div>
          <img class="carousel__images" :src="baseUrl + item.link" alt="" />
        </swiper-slide>
      </swiper>
    </article>
    <article class="carousel" v-if="filtered[2]">
      <h1 class="carousel__title">{{ filtered[2].name }}</h1>
      <swiper
        :modules="modules"
        :slides-per-view="6.5"
        :space-between="0"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="carousel__item"
          v-for="(item, index) in filtered[2].film"
        >
          <div class="popover__content">
            <img
              class="popover__content__image"
              alt="Film"
              :src="baseUrl + item.link"
            />
            <div class="popover__message">
              <div class="popover__ıcons">
                <div>
                  <Icon name="play" fill="white" />
                  <Icon name="add" fill="white" />
                  <Icon name="like" fill="white" />
                </div>
                <Icon name="cardDown" fill="white" />
              </div>
              <p class="popover__text">
                <span class="popover__text--match">%98 Eşleşme</span>
                <span class="popover__text--age">+18</span>
                <span class="popover__text--season">5 Sezon</span>
                <span class="popover__text--quality">HD</span>
              </p>
              <p class="popover__type">
                Şiddet içerikli - Sert Gerçekçi - Gerilim
              </p>
              <h6 class="popover__like"><Icon name="like" /> Çok Beğenildi</h6>
            </div>
          </div>
          <img class="carousel__images" :src="baseUrl + item.link" alt="" />
        </swiper-slide>
      </swiper>
    </article>
    <article class="carousel" v-if="filtered[1]">
      <h1 class="carousel__title">{{ filtered[1].name }}</h1>
      <swiper
        :modules="modules"
        :slides-per-view="6.5"
        :space-between="0"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="carousel__item"
          v-for="(item, index) in filtered[1].film"
        >
          <div class="popover__content">
            <img
              class="popover__content__image"
              alt="Film"
              :src="baseUrl + item.link"
            />
            <div class="popover__message">
              <div class="popover__ıcons">
                <div>
                  <Icon name="play" fill="white" />
                  <Icon name="add" fill="white" />
                  <Icon name="like" fill="white" />
                </div>
                <Icon name="cardDown" fill="white" />
              </div>
              <p class="popover__text">
                <span class="popover__text--match">%98 Eşleşme</span>
                <span class="popover__text--age">+18</span>
                <span class="popover__text--season">5 Sezon</span>
                <span class="popover__text--quality">HD</span>
              </p>
              <p class="popover__type">
                Şiddet içerikli - Sert Gerçekçi - Gerilim
              </p>
              <h6 class="popover__like"><Icon name="like" /> Çok Beğenildi</h6>
            </div>
          </div>
          <img class="carousel__images" :src="baseUrl + item.link" alt="" />
        </swiper-slide>
      </swiper>
    </article>
    <article class="carousel" v-if="filtered[3]">
      <h1 class="carousel__title">{{ filtered[3].name }}</h1>
      <swiper
        :modules="modules"
        :slides-per-view="6.5"
        :space-between="0"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="carousel__item"
          v-for="(item, index) in filtered[3].film"
        >
          <div class="popover__content">
            <img
              class="popover__content__image"
              alt="Film"
              :src="baseUrl + item.link"
            />
            <div class="popover__message">
              <div class="popover__ıcons">
                <div>
                  <Icon name="play" fill="white" />
                  <Icon name="add" fill="white" />
                  <Icon name="like" fill="white" />
                </div>
                <Icon name="cardDown" fill="white" />
              </div>
              <p class="popover__text">
                <span class="popover__text--match">%98 Eşleşme</span>
                <span class="popover__text--age">+18</span>
                <span class="popover__text--season">5 Sezon</span>
                <span class="popover__text--quality">HD</span>
              </p>
              <p class="popover__type">
                Şiddet içerikli - Sert Gerçekçi - Gerilim
              </p>
              <h6 class="popover__like"><Icon name="like" /> Çok Beğenildi</h6>
            </div>
          </div>
          <img class="carousel__images" :src="baseUrl + item.link" alt="" />
        </swiper-slide>
      </swiper>
    </article>
  </div>
</template>

<style>
.cards {
  display: flex;

  flex-wrap: wrap;
}
.card {
  width: 300px;
  height: 500px;
}
.card--image {
  width: 200px;
  height: 200px;
}
</style>
<script setup>
import { Icon } from "../icons";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
</script>
<script>
export default {
  data() {
    return {
      selected: "all",
      filtered: [],
      baseUrl:
        "https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk",
    };
  },
  props: {
    movies: Array,
  },
  methods: {
    filtrele() {
      if (this.$route.name != "Home") {
        return;
      }
      this.filtered = this.movies;

      this.filtered = this.movies.filter((item) => {
        if (this.selected == "all") {
          return (this.filtered = this.movies);
        } else {
          return this.selected == item.name;
        }
      });
    },
    goster(e) {
      this.filtrele();
    },
  },
  mounted() {
    this.goster();
  },
};
</script>
