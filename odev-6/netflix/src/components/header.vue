<script setup>
import { Icon } from "../icons";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/vue";
import HeroSection from "./heroSection.vue";
import { RouterLink } from "vue-router";
</script>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    bgImage() {
      return `linear-gradient( to bottom, rgba(77, 63, 63, 0), rgba(0, 0, 0, 1) ), ${this.hero.pageBackground}`;
    },
  },
  props: ["hero"],
  components: {
    heroSection: HeroSection,
  },
  mounted() {
    console.log(this.hero);
  },
  beforeUpdate() {
    console.log(this.hero);
  },
};
</script>

<template>
  <div class="area" :style="{ backgroundImage: bgImage }">
    <header class="header">
      <div class="header__group">
        <Icon class="header--icon" name="netflix" :size="100" />
        <ul class="header__group__links">
          <li class="header__group__link">
            <RouterLink class="header__group__link" to="/home"
              >Anasayfa</RouterLink
            >
          </li>
          <li class="header__group__link">Diziler</li>
          <li class="header__group__link">Filmler</li>
          <li class="header__group__link">Yeni ve Popüler</li>
          <li class="header__group__link">Listem</li>
          <li class="header__group__link">Dillere Göre Göz At</li>
        </ul>
      </div>
      <div class="header__group">
        <ul class="header__group__links">
          <li class="header__group__link"><Icon name="search" /></li>
          <li v-if="$route.name == 'Home'">
            <RouterLink class="header__group__link" to="/Child"
              >Çocuk</RouterLink
            >
            <router-view />
          </li>
          <li v-if="$route.name == 'Child'">
            <RouterLink to="/welcome">
              <button class="header__group--button">Çocuktan Çık</button>
            </RouterLink>
            <router-view />
          </li>

          <li class="header__group__link"><Icon name="bell" /></li>
          <li class="header__group__link">
            <img
              src="https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
              alt=""
            />
          </li>
          <li>
            <CDropdown>
              <CDropdownToggle></CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#"
                  ><img
                    src="http://occ-0-778-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWN3pnfMxat1OaEXWifPzfq8j993hhJk4khXEp3XI1qtauznj66Qc-frQs8lkfFM1Pym-fu1HFqhZAXTBgbq9IpjMMD_9CU.png?r=8f0"
                    alt=""
                  />
                  Çocuk</CDropdownItem
                >
                <CDropdownItem href="#"
                  ><RouterLink
                    to="/welcome"
                    class="header__group__link--profile"
                    ><Icon name="pen" /> Profil Yönetimi</RouterLink
                  >
                </CDropdownItem>
                <CDropdownItem href="#"
                  ><Icon name="transfer" /> Profili Aktar</CDropdownItem
                >
                <CDropdownItem href="#"
                  ><Icon name="account" />Hesap
                </CDropdownItem>
                <CDropdownItem href="#"
                  ><Icon name="help" />Yardım Merkezi</CDropdownItem
                >
              </CDropdownMenu>
            </CDropdown>
          </li>
        </ul>
      </div>
    </header>
    <heroSection :hero="hero" />
  </div>
</template>

<style scoped>
.area {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
