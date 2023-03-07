<script setup>
import { Icon } from "../icons";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/vue";
import HeroSection from "./heroSection.vue";
</script>

<template>
  <div class="area">
    <header class="header">
      <div class="header__group">
        <Icon class="header--icon" name="netflix" :size="100" />
        <ul class="header__group__links">
          <li class="header__group__link">Ana Sayfa</li>
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
          <li class="header__group__link">Çocuk</li>
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
                  ><Icon name="pen" /> Profil Yönetimi
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
    <HeroSection />
  </div>
</template>
