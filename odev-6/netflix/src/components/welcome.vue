<template>
  <div class="body">
    <section class="welcome">
      <h1 class="welcome__title">Kim İzliyor ?</h1>
      <div class="welcome__list">
        <RouterLink class="welcome__item" to="/Home"
          ><img
            class="welcome__item__image"
            src="http://occ-0-778-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
            alt=""
          />
          <p class="welcome__item__text">Muhammed Mustafa</p>
        </RouterLink>

        <RouterLink to="/Child" class="welcome__item">
          <img
            class="welcome__item__image"
            src="http://occ-0-778-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRRfz9bZ-CSZ_Demj2QGGcuf0E4bjqhlfveBFQ7gaF-Ef0HwiPTiC1oCM--cnyUz1t40r81OT-gfnhKMvRzIIHwZP30a0YCewneC.png?r=8f0"
            alt=""
          />
          <p class="welcome__item__text">Çocuk</p>
        </RouterLink>

        <div class="welcome__item">
          <Icon class="welcome__item__icon" name="add" :size="125" />
          <p class="welcome__item__text">Profil Ekle</p>
        </div>
      </div>
      <button class="welcome--button">Profil Yönetimi</button>
    </section>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { Icon } from "../icons";
export default {
  data() {
    return {};
  },
  components: {
    Icon,
  },
};
</script>
