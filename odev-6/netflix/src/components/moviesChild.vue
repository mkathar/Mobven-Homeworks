<template>
  <div class="carouselArea">
    <article class="carousel">
      <h1 class="carousel__title">Seçilenler</h1>
      <CCarousel controls>
        <CCarouselItem>
          <div class="carousel__item" v-for="(item, index) in American">
            <div class="popover__content">
              <img
                class="popover__content__image"
                alt="Film"
                :src="baseURL + item.link"
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
                <h6 class="popover__like">
                  <Icon name="like" /> Çok Beğenildi
                </h6>
              </div>
            </div>
            <img class="carousel__images" :src="baseURL + item.link" alt="" />
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <img
            class="carousel__images"
            v-for="(item, index) in AmericanV2"
            :src="baseURL + item.link"
            :alt="item.id"
          />
        </CCarouselItem>
        <CCarouselItem>
          <img
            class="carousel__images"
            v-for="(item, index) in AmericanV4"
            :src="baseURL + item.link"
            alt=""
          />
        </CCarouselItem>
        <CCarouselItem>
          <img
            class="carousel__images"
            v-for="(item, index) in AmericanV3"
            :src="baseURL + item.link"
            alt=""
          />
        </CCarouselItem>
      </CCarousel>
    </article>
    <article class="carousel">
      <h1 class="carousel__title">Animasyon</h1>
      <CCarousel controls>
        <CCarouselItem>
          <img
            class="carousel__images"
            v-for="(item, index) in AmericanV4"
            :src="baseURL + item.link"
            alt=""
          />
        </CCarouselItem>
        <CCarouselItem>
          <img
            class="carousel__images"
            v-for="(item, index) in AmericanV2"
            :src="baseURL + item.link"
            :alt="item.id"
          />
        </CCarouselItem>
        <CCarouselItem>
          <img
            class="carousel__images"
            v-for="(item, index) in American"
            :src="baseURL + item.link"
            alt=""
          />
        </CCarouselItem>
        <CCarouselItem>
          <img
            class="carousel__images"
            v-for="(item, index) in AmericanV3"
            :src="baseURL + item.link"
            alt=""
          />
        </CCarouselItem>
      </CCarousel>
    </article>
  </div>
</template>

<script setup>
import { CCarouselItem, CCarousel } from "@coreui/vue";
import { Icon } from "../icons";
</script>
<script>
export default {
  data() {
    return {
      baseURL:
        "https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk",
      American: [
        {
          id: 0,
          link: "/AAAABd0-rnrHYYmMpCPR-HaN2OHqBIhXERcjCiBYltd1U1DHDH-74-u6y2Im1Xha74Jx5WITFJ_njLskfeg0OHmdoL5Tu2ybPuNnwcm5f8h8oyZSh_uT99mNHf5mKK_1IC8xpxUK.jpg?r=49a",
        },
        {
          id: 1,
          link: "/AAAABYzfkEXDyAdS6XihhFOpp60SjD-hi42tPJu6qndpVtc0xWg1bHQr4q2CRpnzglivIdo-GKIqq0VBkYHu7Pauq86ltJ0EAqInvskBfgUYYKLcWCttNifFzEOmf7ov4xL0lYfZ.jpg?r=503",
        },
        {
          id: 2,
          link: "/AAAABXHP7ibfiMqOTjvpGEUSUTVugkEyIRITTKtPs_AX0IWJNIylze0rhZkrX2TOQEdy8ZO8r5hdMFyFUuVsHoDT-RrFtdFGctfvVrkQIuTrT9n0BRd2obg763c_xmQiBp96irBunAxPn8dacf6dUXBTZG-gP12Q9cav3xojHXNXEyDKTXPYaDqxk9I5e2hHe9k.jpg?r=be0",
        },
        {
          id: 3,
          link: "/AAAABfQK5zQufkSyOS4FMPT9C2T-lx2Quldx3iRbO9aPinPkmpm5HOY-zkMEO-GBVUUsCYyhaXmwr7g1RtBpXgXL8RBGIhHzdeD-hdk.webp?r=099",
        },
        {
          id: 4,
          link: "/AAAABaUcZlCRwrQiIzd0kkRn5wffm6Zgi0WI2ivXTSi6jp7ho1r-s8-wVlcpJxnX8-Wex5sk5d39LAvr30tBRajSjNE98wXGr4WNw-Q.webp?r=c3e",
        },
      ],
      AmericanV2: [
        {
          id: 5,
          link: "/AAAABc16VqS10F5wljG5g8DqIoiw5lLEBi8GpiuQP_CUb_fzbUm1DKeACsiXwHXUmbRhdV3Z8ih41_D0QhcSKkyDE97JFDNbGVCCOo4.webp?r=bb8",
        },
        {
          id: 6,
          link: "/AAAABYuf4bns-xNTusYmxL_b7e_rTQnC1MxAbBhc7K70Y5hs1DX3hpRCoQOPpK9_8aEnM_aR_cJyrpJhoEkWURMqo-2_8Wz_jtLSZLI_9Vnhfy5V4xEm7a9IFDHGaAFzfOBJY7YbhM_IJKb2UcYfOha9k15LjI3NfxhlFrc.webp?r=2ff",
        },
        {
          id: 7,
          link: "/AAAABY7_0n5RaaMaxwgCfmbH8VV4Ppl8pNazKl_FxLooOfaG8iCAJNbXitpJMRUy_EK0aZThq3yx8YQ9lSUeHHNS2E-MDp7wIz6xD1Q.webp?r=a6c",
        },
        {
          id: 8,
          link: "/AAAABROMJM1_Y3inyIjkee0z4ngF8Qllgc9AUxbFfhgCyaxtLdSz0l3DyOtiYE6O1Wfiyj7EV7To59saXDFLYytHXhAJE1OO4tVUgSk.webp?r=193",
        },
        {
          id: 9,
          link: "/AAAABTdmoSFEmSw4dbnkLzNnXGrBvgSPFaZCiHeUTw3unUa13l_uKOBizh0peWAnzqNMMwlub2hWBRIBxnMsviQyYGtUdpEmrOkp-nS1-CCSkiVD3B9y1f-4yXD3NJCMT2AsFFnl.jpg?r=27f",
        },
      ],
      AmericanV3: [
        {
          id: 11,
          link: "/AAAABc16VqS10F5wljG5g8DqIoiw5lLEBi8GpiuQP_CUb_fzbUm1DKeACsiXwHXUmbRhdV3Z8ih41_D0QhcSKkyDE97JFDNbGVCCOo4.webp?r=bb8",
        },
        {
          id: 12,
          link: "/AAAABYuf4bns-xNTusYmxL_b7e_rTQnC1MxAbBhc7K70Y5hs1DX3hpRCoQOPpK9_8aEnM_aR_cJyrpJhoEkWURMqo-2_8Wz_jtLSZLI_9Vnhfy5V4xEm7a9IFDHGaAFzfOBJY7YbhM_IJKb2UcYfOha9k15LjI3NfxhlFrc.webp?r=2ff",
        },
        {
          id: 12,
          link: "/AAAABY7_0n5RaaMaxwgCfmbH8VV4Ppl8pNazKl_FxLooOfaG8iCAJNbXitpJMRUy_EK0aZThq3yx8YQ9lSUeHHNS2E-MDp7wIz6xD1Q.webp?r=a6c",
        },
        {
          id: 13,
          link: "/AAAABROMJM1_Y3inyIjkee0z4ngF8Qllgc9AUxbFfhgCyaxtLdSz0l3DyOtiYE6O1Wfiyj7EV7To59saXDFLYytHXhAJE1OO4tVUgSk.webp?r=193",
        },
        {
          id: 14,
          link: "/AAAABTdmoSFEmSw4dbnkLzNnXGrBvgSPFaZCiHeUTw3unUa13l_uKOBizh0peWAnzqNMMwlub2hWBRIBxnMsviQyYGtUdpEmrOkp-nS1-CCSkiVD3B9y1f-4yXD3NJCMT2AsFFnl.jpg?r=27f",
        },
      ],
      AmericanV4: [
        {
          id: 15,
          link: "/AAAABWEa37ss-C_gVsAWk4tXOArlpoQGigrXpx6si9SdcdprgpiXS0YIVpqQLgok0zRQz_i9nxv1UENWuGmXRqSJHEF6RTpeLJcl1MC0uoDP4SfwI1k8zcliwrGT592Zfqk6vz39ndyAjrZXyRpmBMlyeH9DkMVYiCj22sI.webp?r=1cb",
        },
        {
          id: 16,
          link: "/AAAABX7-EcEiRRh6XNThSJiu9LrMDSs5qVKRnT2ZANlZUnPfct8Xwsd_sDYu4xYC9ak-AgCuHg8tyAhjcHlol3oZcXtu6VEnrRCwY09uvfccm1Au5bF-gskPcke5OjaQhlA1kJEus6HETjWgeku_yXxBDcTBJH9WOnBBuVolpV_5fnKolIhJ0yjDKIbi8dOG9E7uukas_6KmoBR4T5V0PZUAhmtkMLTaA5aFPjpYRzFfShUGgpJx9WEWn8ftADawJkLjj2Txy0PuaS-NZ7E9TE47A-zqCsEkxB9jAMjokkaf6Ov5wvDO7sHMKYZbhYKeSthglYN4gXsApqpX-GfqGmvJST0k.webp?r=0ae",
        },
        {
          id: 17,
          link: "/AAAABZpapWMAi9iCNvBtC6Dsl2knbUKQIASlb-PO4_7znXtjPrr3Sq2DCMnXTXj5XP_j1keIvGhj4pcuXlHEyshU2xEngLrodE6TGyw.webp?r=a1d",
        },
        {
          id: 18,
          link: "/AAAABek_Myo5yRunHBa5P20_T5swiPZ2jZZheXdbDYkprLYfNHp_msHnghiwGMHQ6UTDMG7FpPTBEFK4qXV8E3LQTxoYXXP5ZENxuSfPp4tr80qCHPiKvsiy90b030FEnoxH3FPX.jpg?r=93b",
        },
        {
          id: 19,
          link: "/AAAABWaf8Cs8R9PR1u5Z7f9A3BRkyDmaSVUAb6pYnz9RiSgeJTfZ1XSbC_sfUIwPtsAQeTqV0OjPWzsuvQRvds-vP9vZEABOzRUn8zIdTjTpdeC0PUhKOuxlq2sFK1q-Ne_I2YRUk6FIlT0_7ZCmsRZfjt_KDEsJq8jfB0Y.webp?r=7b2",
        },
      ],
    };
  },
};
</script>

<!--
      AMERİCAN
      1"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUIZ917ruxYlMGB1gMwaicb5lSb8qdYCIT9F2Ftwx7WGhaL7eadJujWEzH6CmX0r30OBQXcd77qK8dfQ_AF85ldZyui5fDQslefZoaeO2j_nA5qaP-Vpx4_u2IqK61obncZMxGuQSoXpC6-umT55_BggM8E4ybe0s0e25uQ61gTmkPIJP0qU-sSD2ZGUl_6fygi_V3PIQl3iisIdfKfTONe0oP73jm5t532QqCY_Ia4hlxxnClc5DtUxRuLprk8KKsJo9NK_kkJaUsO3HGaCZdddhVU0SPfGnj9QfrBCZcEw9hJWH5zaijPNRsdChHl0KEdCEepyqGRnkzqLxf70sd-Gh_kKzZefJowcCnppXRNiSw.jpg?r=02b",
        2  "https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdmKKoT5-y74ru7XeGV8BK_jfBYRVxmoVYC1RJzHcH28MwEARnAl8aX9z10-1uG-rg_600XtHgj61ti-ctvweKjaQ02tDE2W7G0.webp?r=471",
         3 "https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZi_RqpT84KU9PuLqluo8QNslnXT8Hu2_bME3ez2GFxUqc-CdICtULofUMFIpTV_EO1tghUWNSLzXeqhWzYDdSL2ifiUB0eKrn8.webp?r=01d",
          4"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdFfuoU4rnrXk50fjUjzle0OjZj8Sr40bucK1awD34hMUNwfrljs0-X52ZgBaOpgb52P9G0KZ3_VUhUb7VqJ31Fx8_pIglYJzTc.webp?r=75b",
          5"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXwSS0gQYIDY1tRAd95GwROElbuXGHQknlaBYCY5eZIRwlKK-P7YFgjaC9qIdf4Yxfp3FWBPr4aRAZs4c2D_0g-0Reexzjt92uFWXO_Z3Raf_nPed9Bh-KoAEG5Pk745BibAQt4Jt1UtBvXRYoe-E32w4jD9YL8qSEE2DqD00CwdqZtWzNXKwAA1wo_Ke--q64625ICA5zLDdwj6ApVT-Tbk-wL443I7kBXEQsNeuGlQUkDoQkGNgIjfQCLaeIVPivyMkO-96AvnJcoEaC2OHpSQBUmtnGVFRlg4KMBCNeX0nU_hLjFHvSOn3YEgoqpN0LplgPQLOKL8I0iCI3IPksqrskGoBAOKU2CPZGCgwROFtQ.jpg?r=f95",
          6"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUK2ZM9yUCBQa50XFB4LDve9xZG_ghwJplAhA5XbchTQyU7TSTNhWiR_1Za1wn0hBgwvulFaPOUwfRjrqiLoV41RkB3fu44Vtsk.webp?r=772",
          7"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY1QPEhbAKknNJ1x8IlXg4yuhYdwaeTfWkBMrNl5qjR5b3Qi54GZukQPvTvoNBAyOSSVSBRTKzGjSF0pFt3FYXmLBsksCtvfAZL9glB5m_al3UFIRxrwohGcQ2DGDkL_IXHa.jpg?r=4f6",
          8"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYsyCc0DLGNBHJ_D-LcQDAyfXTkCxR55c8pCCxFZBWKYRQig3fSj8mHVocSnOmcbVUAXkbtfXFDCP8zGlxv-RWluOVm-w6EoWiRnJ7YJhfUud0A5GMxG0lfesZSurW6RFB41.jpg?r=9ca",
          9"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYwuBV3NACTOtIgFJIbRXF0wZFMQldfUCB9obzWA5mhL0NlcPRX063F-gxwqyL_SdbZSmi6URSkPUpN7CL1Br_eeCnlvb823MR4.webp?r=2ac",
          10"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdJuS0169UzKM8l55gUT6po5k4Vn9SuABMVhjKgF-O6qOknVf-pxNUUzyNMnOwwtyBbZcITKI21qXDWNHcCh1e0tGZvzULb0EDOZ7Ua3cbTMglxl5DWFH66AgQOZlWwOInvx.jpg?r=069",
          11"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaNskWXGES-OlocaHuAz3vFDzZu3riGOx4j_zFMd0Jq1dABI0FlF6MXtLgENWIs6Box97oKydP-Rjin934WqV2Fk4xxvcwPyTbqPo2xbkzvsAEMLC5qyXPiC5s4Yl0Isf4-F.jpg?r=e88",
          12"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVbJ62bvzcv456jSCykgqx4mgfosMZ7UsXwXMRN-Fz_2L4ysGmosix1PpCiBf-xUWOfAa2VO1GUuG-XennklIpr72wlZB0QwwXQpSDiaPZN6jTT4ZenvRvnU911cxi87Vooh.jpg?r=cf2",
          13"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT_lEnatzXKsxSEf2s-75ETOuxUQ-nB21Yf1Vgj57kXmzGmYboiWLnn82WgbO6o6jYb9My4Ym8e_t_NXg6EtJ7sdzpwNaAF5h7koj8EW2Xy3R0WEd3SmvUXq8rKoimAuqLrR.jpg?r=e30",
          14"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQLR0E8qnu8XDDvboruw_pgFKHJ9ucfPiAeB6sdVnz2mUmoc816_lM4smI9NPQM5ePtXDJLPiclp6jv1oR3ai9SsMUfs_ERg_U2oeU__hRCWpMeKLkeGoEt8dg05pj78lCKI.jpg?r=6f9",
          15"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeWVUnLavhCav6NuSMWZFQzNqAYPNt3Pf1kzZ3L_gsCTz8PCUAUtFCg556QZHoLQ2oXWlNjSrcnNbKDAJB2hEk7zhQROs69AG4SknEcMQlF8RPFaRYXAU6hXiQVU-3jt7A5Y.jpg?r=b2c",
          16"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQh-iwBnAjej9RQ-kY7dyK-nTYrxN08RGaieM1Nc9g79hGHIV_qWpaF3-nP-j2V3rjQBrRQ6RrSc0mlDrZ6yg3CX-bjXALRc0XA.webp?r=058",
          17"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcXmBeqw6AQCao2wB8fyf3-Wgmz29mAxMT3lMySREIOwUgF4w3Ug6nEsixTmkeKK1HtCW3fg9B1pPGykN7sMe44BkPx6zBdDKjo.webp?r=572",
          18"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSRqarQWZdhv5yEEYlzFfm3EoiZyr7jJlqWgX9QqbElaO-R_Vb366BaIvXA2mFkrT9GtYMwBiHMyNwAeVpgBJzsAXYw951L-SappqivnnIbqLP4lLM8xfI9c1UQPB5zhD-Qj.jpg?r=ccc",
          19"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfnQnKieETolPuxIvczAyJYLTjs9HJb7HZslgNsVo9XLbMergQeh75AKyIB4Fy_cWRJiXmMIUvLTKdE5b9IOC_6FNG8Z4W5LxBdUWLSalmwTUYkkAmP6erMXbvWOn4jleB058NtAwbHNIPXlBcac4KnhXq0EGbufH1EbZb11AuzSl8sIW-tUFXaMD_fyT7PwvlayLqBedSMA9xfezi7Fmhf-CMR-22sCGwqOfUZgdcEpCUe8kWUXtol63l--fCLdxnGJ0XnE5kzZRvbcKC007bnDDMdTRxd006AuKMFhShqgQHXIfWJxAK47BTMGQmdBbdaD3POt_kt46UrEnejotwxyS2Olui2SqB1PZvT1EN8GBA.jpg?r=f82",
          20"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcgwyzANWtxgvqehDGer7BeBfTtcH19SgZJ_I_FylMdNiWXstTpchFJlhYCse4y95AvCMXE9EAzSBA1jdlCh1xsACai2Tm8-hqL-TCslMiB1PilbJbQdCitFlbmkQUb2_yWm.jpg?r=0fa",
          21"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWzsjAp4fFSLfL2BBHAJGHKY1n7dcHMVVFrTzJ3ST1u0CG86H7PsYI_B-hliNwqEvxxg9hy7e6fScs1agnt9AhyjTdhdf7ueiyyC-bQiUcdyFqPFOareO-tHT9oeUHX9OcIt.jpg?r=cc9",
          22"https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWox7p8-5cEiJK-fIlo2JIH_2SDrATKYlDn-4js6FxpOdUT33FekAIdfK90ePZRCit_E8en3ujfVjydz7kURHjaawHmJ7cCAVQzEaAHrdznDuw_715_8jCFwBQxOfpb2a_-7fYadoI3kHW1AwaubJZEl_JXF6FU3UuLn6NbdFqf2aNvWvDov8oFCJ91qPL8.jpg?r=bb3", -->
