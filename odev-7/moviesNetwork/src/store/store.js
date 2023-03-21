import { createStore } from "vuex";
import axiosInstance from "../config";

const store = createStore({
  namespaced: true,
  state: {
    movies: [],
    imgBaseURL: "https://image.tmdb.org/t/p/w1280",
  },
  getters: {
    getAllMovies: (state) => state.movies,
    getImgURL: (state) => state.imgBaseURL,
  },
  mutations: {
    SET_MOVIES(state, data) {
      state.movies = data;
    },
  },
  actions: {
    getMovies({ commit, dispatch }) {
      axiosInstance
        .get(
          "/popular?api_key=cac36baa49a97934e31785f8b7b03b15&language=en-US&page=1"
        )
        .then((response) => commit("SET_MOVIES", response.data.results));
    },
  },
});

export default store;
