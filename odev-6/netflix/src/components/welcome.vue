<template>
  <div class="body">
    <section class="welcome">
      <h1 class="welcome__title">Kim İzliyor ?</h1>
      <div class="welcome__list">
        <RouterLink class="welcome__group" to="/Home"
          ><img
            class="welcome__group__image--user"
            src="http://occ-0-778-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
            alt=""
          />
          <p class="welcome__group__text--user">Muhammed Mustafa</p>
        </RouterLink>

        <router-view />

        <RouterLink to="/Child" class="welcome__group">
          <img
            class="welcome__group__image--child"
            src="http://occ-0-778-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRRfz9bZ-CSZ_Demj2QGGcuf0E4bjqhlfveBFQ7gaF-Ef0HwiPTiC1oCM--cnyUz1t40r81OT-gfnhKMvRzIIHwZP30a0YCewneC.png?r=8f0"
            alt=""
          />
          <p class="welcome__group__text--child">Çocuk</p>
        </RouterLink>

        <div class="welcome__group">
          <Icon class="welcome__group__icon" name="add" :size="125" />
          <p class="welcome__group__text--add">Profil Ekle</p>
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
