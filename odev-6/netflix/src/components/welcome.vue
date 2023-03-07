<template>
  <div class="body">
    <section class="welcome">
      <h1 class="welcome__title">Kim İzliyor ?</h1>
      <div class="welcome__list">
        <div class="welcome__group">
          <img
            class="welcome__list__image"
            src="http://occ-0-778-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
            alt=""
          />
          <RouterLink class="welcome__list__text" to="/Main"
            >Muhammed Mustafa</RouterLink
          >
          <router-view />
        </div>

        <div class="welcome__group">
          <img
            class="welcome__list__image"
            src="http://occ-0-778-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRRfz9bZ-CSZ_Demj2QGGcuf0E4bjqhlfveBFQ7gaF-Ef0HwiPTiC1oCM--cnyUz1t40r81OT-gfnhKMvRzIIHwZP30a0YCewneC.png?r=8f0"
            alt=""
          />
          <p class="welcome__list__text">Çocuk</p>
        </div>

        <div class="welcome__group">
          <Icon class="welcome__list__icon" name="add" :size="125" />
          <p class="welcome__list__text">Profil Ekle</p>
        </div>
      </div>
      <button class="welcome--button">Profil Yönetimi</button>
    </section>
  </div>
</template>

<script setup>
import { Icon } from "../icons";
import { RouterLink } from "vue-router";
</script>
