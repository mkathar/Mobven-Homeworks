<script>
import Header from "../components/header.vue";
import Movies from "../components/movies.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";

export default {
  name: "Home",
  data() {
    return {
      movies: [
        {
          type: "Home",
          contents: [
            {
              name: "Gündemdekiler",
              film: [
                {
                  id: 0,
                  link: "/AAAABUIZ917ruxYlMGB1gMwaicb5lSb8qdYCIT9F2Ftwx7WGhaL7eadJujWEzH6CmX0r30OBQXcd77qK8dfQ_AF85ldZyui5fDQslefZoaeO2j_nA5qaP-Vpx4_u2IqK61obncZMxGuQSoXpC6-umT55_BggM8E4ybe0s0e25uQ61gTmkPIJP0qU-sSD2ZGUl_6fygi_V3PIQl3iisIdfKfTONe0oP73jm5t532QqCY_Ia4hlxxnClc5DtUxRuLprk8KKsJo9NK_kkJaUsO3HGaCZdddhVU0SPfGnj9QfrBCZcEw9hJWH5zaijPNRsdChHl0KEdCEepyqGRnkzqLxf70sd-Gh_kKzZefJowcCnppXRNiSw.jpg?r=02b",
                },
                {
                  id: 1,
                  link: "/AAAABdmKKoT5-y74ru7XeGV8BK_jfBYRVxmoVYC1RJzHcH28MwEARnAl8aX9z10-1uG-rg_600XtHgj61ti-ctvweKjaQ02tDE2W7G0.webp?r=471",
                },
                {
                  id: 2,
                  link: "/AAAABZi_RqpT84KU9PuLqluo8QNslnXT8Hu2_bME3ez2GFxUqc-CdICtULofUMFIpTV_EO1tghUWNSLzXeqhWzYDdSL2ifiUB0eKrn8.webp?r=01d",
                },
                {
                  id: 3,
                  link: "/AAAABdFfuoU4rnrXk50fjUjzle0OjZj8Sr40bucK1awD34hMUNwfrljs0-X52ZgBaOpgb52P9G0KZ3_VUhUb7VqJ31Fx8_pIglYJzTc.webp?r=75b",
                },
                {
                  id: 4,
                  link: "/AAAABXwSS0gQYIDY1tRAd95GwROElbuXGHQknlaBYCY5eZIRwlKK-P7YFgjaC9qIdf4Yxfp3FWBPr4aRAZs4c2D_0g-0Reexzjt92uFWXO_Z3Raf_nPed9Bh-KoAEG5Pk745BibAQt4Jt1UtBvXRYoe-E32w4jD9YL8qSEE2DqD00CwdqZtWzNXKwAA1wo_Ke--q64625ICA5zLDdwj6ApVT-Tbk-wL443I7kBXEQsNeuGlQUkDoQkGNgIjfQCLaeIVPivyMkO-96AvnJcoEaC2OHpSQBUmtnGVFRlg4KMBCNeX0nU_hLjFHvSOn3YEgoqpN0LplgPQLOKL8I0iCI3IPksqrskGoBAOKU2CPZGCgwROFtQ.jpg?r=f95",
                },
                {
                  id: 5,
                  link: "/AAAABUK2ZM9yUCBQa50XFB4LDve9xZG_ghwJplAhA5XbchTQyU7TSTNhWiR_1Za1wn0hBgwvulFaPOUwfRjrqiLoV41RkB3fu44Vtsk.webp?r=772",
                },
                {
                  id: 0,
                  link: "/AAAABUIZ917ruxYlMGB1gMwaicb5lSb8qdYCIT9F2Ftwx7WGhaL7eadJujWEzH6CmX0r30OBQXcd77qK8dfQ_AF85ldZyui5fDQslefZoaeO2j_nA5qaP-Vpx4_u2IqK61obncZMxGuQSoXpC6-umT55_BggM8E4ybe0s0e25uQ61gTmkPIJP0qU-sSD2ZGUl_6fygi_V3PIQl3iisIdfKfTONe0oP73jm5t532QqCY_Ia4hlxxnClc5DtUxRuLprk8KKsJo9NK_kkJaUsO3HGaCZdddhVU0SPfGnj9QfrBCZcEw9hJWH5zaijPNRsdChHl0KEdCEepyqGRnkzqLxf70sd-Gh_kKzZefJowcCnppXRNiSw.jpg?r=02b",
                },
                {
                  id: 1,
                  link: "/AAAABdmKKoT5-y74ru7XeGV8BK_jfBYRVxmoVYC1RJzHcH28MwEARnAl8aX9z10-1uG-rg_600XtHgj61ti-ctvweKjaQ02tDE2W7G0.webp?r=471",
                },
                {
                  id: 2,
                  link: "/AAAABZi_RqpT84KU9PuLqluo8QNslnXT8Hu2_bME3ez2GFxUqc-CdICtULofUMFIpTV_EO1tghUWNSLzXeqhWzYDdSL2ifiUB0eKrn8.webp?r=01d",
                },
                {
                  id: 3,
                  link: "/AAAABdFfuoU4rnrXk50fjUjzle0OjZj8Sr40bucK1awD34hMUNwfrljs0-X52ZgBaOpgb52P9G0KZ3_VUhUb7VqJ31Fx8_pIglYJzTc.webp?r=75b",
                },
                {
                  id: 4,
                  link: "/AAAABXwSS0gQYIDY1tRAd95GwROElbuXGHQknlaBYCY5eZIRwlKK-P7YFgjaC9qIdf4Yxfp3FWBPr4aRAZs4c2D_0g-0Reexzjt92uFWXO_Z3Raf_nPed9Bh-KoAEG5Pk745BibAQt4Jt1UtBvXRYoe-E32w4jD9YL8qSEE2DqD00CwdqZtWzNXKwAA1wo_Ke--q64625ICA5zLDdwj6ApVT-Tbk-wL443I7kBXEQsNeuGlQUkDoQkGNgIjfQCLaeIVPivyMkO-96AvnJcoEaC2OHpSQBUmtnGVFRlg4KMBCNeX0nU_hLjFHvSOn3YEgoqpN0LplgPQLOKL8I0iCI3IPksqrskGoBAOKU2CPZGCgwROFtQ.jpg?r=f95",
                },
                {
                  id: 5,
                  link: "/AAAABUK2ZM9yUCBQa50XFB4LDve9xZG_ghwJplAhA5XbchTQyU7TSTNhWiR_1Za1wn0hBgwvulFaPOUwfRjrqiLoV41RkB3fu44Vtsk.webp?r=772",
                },
              ],
            },
            {
              name: "Ödüllü Filmler",
              film: [
                {
                  id: 0,
                  link: "/AAAABUIZ917ruxYlMGB1gMwaicb5lSb8qdYCIT9F2Ftwx7WGhaL7eadJujWEzH6CmX0r30OBQXcd77qK8dfQ_AF85ldZyui5fDQslefZoaeO2j_nA5qaP-Vpx4_u2IqK61obncZMxGuQSoXpC6-umT55_BggM8E4ybe0s0e25uQ61gTmkPIJP0qU-sSD2ZGUl_6fygi_V3PIQl3iisIdfKfTONe0oP73jm5t532QqCY_Ia4hlxxnClc5DtUxRuLprk8KKsJo9NK_kkJaUsO3HGaCZdddhVU0SPfGnj9QfrBCZcEw9hJWH5zaijPNRsdChHl0KEdCEepyqGRnkzqLxf70sd-Gh_kKzZefJowcCnppXRNiSw.jpg?r=02b",
                },
                {
                  id: 1,
                  link: "/AAAABdmKKoT5-y74ru7XeGV8BK_jfBYRVxmoVYC1RJzHcH28MwEARnAl8aX9z10-1uG-rg_600XtHgj61ti-ctvweKjaQ02tDE2W7G0.webp?r=471",
                },
                {
                  id: 2,
                  link: "/AAAABZi_RqpT84KU9PuLqluo8QNslnXT8Hu2_bME3ez2GFxUqc-CdICtULofUMFIpTV_EO1tghUWNSLzXeqhWzYDdSL2ifiUB0eKrn8.webp?r=01d",
                },
                {
                  id: 3,
                  link: "/AAAABdFfuoU4rnrXk50fjUjzle0OjZj8Sr40bucK1awD34hMUNwfrljs0-X52ZgBaOpgb52P9G0KZ3_VUhUb7VqJ31Fx8_pIglYJzTc.webp?r=75b",
                },
                {
                  id: 4,
                  link: "/AAAABXwSS0gQYIDY1tRAd95GwROElbuXGHQknlaBYCY5eZIRwlKK-P7YFgjaC9qIdf4Yxfp3FWBPr4aRAZs4c2D_0g-0Reexzjt92uFWXO_Z3Raf_nPed9Bh-KoAEG5Pk745BibAQt4Jt1UtBvXRYoe-E32w4jD9YL8qSEE2DqD00CwdqZtWzNXKwAA1wo_Ke--q64625ICA5zLDdwj6ApVT-Tbk-wL443I7kBXEQsNeuGlQUkDoQkGNgIjfQCLaeIVPivyMkO-96AvnJcoEaC2OHpSQBUmtnGVFRlg4KMBCNeX0nU_hLjFHvSOn3YEgoqpN0LplgPQLOKL8I0iCI3IPksqrskGoBAOKU2CPZGCgwROFtQ.jpg?r=f95",
                },
                {
                  id: 5,
                  link: "/AAAABUK2ZM9yUCBQa50XFB4LDve9xZG_ghwJplAhA5XbchTQyU7TSTNhWiR_1Za1wn0hBgwvulFaPOUwfRjrqiLoV41RkB3fu44Vtsk.webp?r=772",
                },
                {
                  id: 0,
                  link: "/AAAABUIZ917ruxYlMGB1gMwaicb5lSb8qdYCIT9F2Ftwx7WGhaL7eadJujWEzH6CmX0r30OBQXcd77qK8dfQ_AF85ldZyui5fDQslefZoaeO2j_nA5qaP-Vpx4_u2IqK61obncZMxGuQSoXpC6-umT55_BggM8E4ybe0s0e25uQ61gTmkPIJP0qU-sSD2ZGUl_6fygi_V3PIQl3iisIdfKfTONe0oP73jm5t532QqCY_Ia4hlxxnClc5DtUxRuLprk8KKsJo9NK_kkJaUsO3HGaCZdddhVU0SPfGnj9QfrBCZcEw9hJWH5zaijPNRsdChHl0KEdCEepyqGRnkzqLxf70sd-Gh_kKzZefJowcCnppXRNiSw.jpg?r=02b",
                },
                {
                  id: 1,
                  link: "/AAAABdmKKoT5-y74ru7XeGV8BK_jfBYRVxmoVYC1RJzHcH28MwEARnAl8aX9z10-1uG-rg_600XtHgj61ti-ctvweKjaQ02tDE2W7G0.webp?r=471",
                },
                {
                  id: 2,
                  link: "/AAAABZi_RqpT84KU9PuLqluo8QNslnXT8Hu2_bME3ez2GFxUqc-CdICtULofUMFIpTV_EO1tghUWNSLzXeqhWzYDdSL2ifiUB0eKrn8.webp?r=01d",
                },
                {
                  id: 3,
                  link: "/AAAABdFfuoU4rnrXk50fjUjzle0OjZj8Sr40bucK1awD34hMUNwfrljs0-X52ZgBaOpgb52P9G0KZ3_VUhUb7VqJ31Fx8_pIglYJzTc.webp?r=75b",
                },
                {
                  id: 4,
                  link: "/AAAABXwSS0gQYIDY1tRAd95GwROElbuXGHQknlaBYCY5eZIRwlKK-P7YFgjaC9qIdf4Yxfp3FWBPr4aRAZs4c2D_0g-0Reexzjt92uFWXO_Z3Raf_nPed9Bh-KoAEG5Pk745BibAQt4Jt1UtBvXRYoe-E32w4jD9YL8qSEE2DqD00CwdqZtWzNXKwAA1wo_Ke--q64625ICA5zLDdwj6ApVT-Tbk-wL443I7kBXEQsNeuGlQUkDoQkGNgIjfQCLaeIVPivyMkO-96AvnJcoEaC2OHpSQBUmtnGVFRlg4KMBCNeX0nU_hLjFHvSOn3YEgoqpN0LplgPQLOKL8I0iCI3IPksqrskGoBAOKU2CPZGCgwROFtQ.jpg?r=f95",
                },
                {
                  id: 5,
                  link: "/AAAABUK2ZM9yUCBQa50XFB4LDve9xZG_ghwJplAhA5XbchTQyU7TSTNhWiR_1Za1wn0hBgwvulFaPOUwfRjrqiLoV41RkB3fu44Vtsk.webp?r=772",
                },
              ],
            },
            {
              name: "Komediler",
              film: [
                {
                  id: 0,
                  link: "/AAAABUIZ917ruxYlMGB1gMwaicb5lSb8qdYCIT9F2Ftwx7WGhaL7eadJujWEzH6CmX0r30OBQXcd77qK8dfQ_AF85ldZyui5fDQslefZoaeO2j_nA5qaP-Vpx4_u2IqK61obncZMxGuQSoXpC6-umT55_BggM8E4ybe0s0e25uQ61gTmkPIJP0qU-sSD2ZGUl_6fygi_V3PIQl3iisIdfKfTONe0oP73jm5t532QqCY_Ia4hlxxnClc5DtUxRuLprk8KKsJo9NK_kkJaUsO3HGaCZdddhVU0SPfGnj9QfrBCZcEw9hJWH5zaijPNRsdChHl0KEdCEepyqGRnkzqLxf70sd-Gh_kKzZefJowcCnppXRNiSw.jpg?r=02b",
                },
                {
                  id: 1,
                  link: "/AAAABdmKKoT5-y74ru7XeGV8BK_jfBYRVxmoVYC1RJzHcH28MwEARnAl8aX9z10-1uG-rg_600XtHgj61ti-ctvweKjaQ02tDE2W7G0.webp?r=471",
                },
                {
                  id: 2,
                  link: "/AAAABZi_RqpT84KU9PuLqluo8QNslnXT8Hu2_bME3ez2GFxUqc-CdICtULofUMFIpTV_EO1tghUWNSLzXeqhWzYDdSL2ifiUB0eKrn8.webp?r=01d",
                },
                {
                  id: 3,
                  link: "/AAAABdFfuoU4rnrXk50fjUjzle0OjZj8Sr40bucK1awD34hMUNwfrljs0-X52ZgBaOpgb52P9G0KZ3_VUhUb7VqJ31Fx8_pIglYJzTc.webp?r=75b",
                },
                {
                  id: 4,
                  link: "/AAAABXwSS0gQYIDY1tRAd95GwROElbuXGHQknlaBYCY5eZIRwlKK-P7YFgjaC9qIdf4Yxfp3FWBPr4aRAZs4c2D_0g-0Reexzjt92uFWXO_Z3Raf_nPed9Bh-KoAEG5Pk745BibAQt4Jt1UtBvXRYoe-E32w4jD9YL8qSEE2DqD00CwdqZtWzNXKwAA1wo_Ke--q64625ICA5zLDdwj6ApVT-Tbk-wL443I7kBXEQsNeuGlQUkDoQkGNgIjfQCLaeIVPivyMkO-96AvnJcoEaC2OHpSQBUmtnGVFRlg4KMBCNeX0nU_hLjFHvSOn3YEgoqpN0LplgPQLOKL8I0iCI3IPksqrskGoBAOKU2CPZGCgwROFtQ.jpg?r=f95",
                },
                {
                  id: 5,
                  link: "/AAAABUK2ZM9yUCBQa50XFB4LDve9xZG_ghwJplAhA5XbchTQyU7TSTNhWiR_1Za1wn0hBgwvulFaPOUwfRjrqiLoV41RkB3fu44Vtsk.webp?r=772",
                },
                {
                  id: 0,
                  link: "/AAAABUIZ917ruxYlMGB1gMwaicb5lSb8qdYCIT9F2Ftwx7WGhaL7eadJujWEzH6CmX0r30OBQXcd77qK8dfQ_AF85ldZyui5fDQslefZoaeO2j_nA5qaP-Vpx4_u2IqK61obncZMxGuQSoXpC6-umT55_BggM8E4ybe0s0e25uQ61gTmkPIJP0qU-sSD2ZGUl_6fygi_V3PIQl3iisIdfKfTONe0oP73jm5t532QqCY_Ia4hlxxnClc5DtUxRuLprk8KKsJo9NK_kkJaUsO3HGaCZdddhVU0SPfGnj9QfrBCZcEw9hJWH5zaijPNRsdChHl0KEdCEepyqGRnkzqLxf70sd-Gh_kKzZefJowcCnppXRNiSw.jpg?r=02b",
                },
                {
                  id: 1,
                  link: "/AAAABdmKKoT5-y74ru7XeGV8BK_jfBYRVxmoVYC1RJzHcH28MwEARnAl8aX9z10-1uG-rg_600XtHgj61ti-ctvweKjaQ02tDE2W7G0.webp?r=471",
                },
                {
                  id: 2,
                  link: "/AAAABZi_RqpT84KU9PuLqluo8QNslnXT8Hu2_bME3ez2GFxUqc-CdICtULofUMFIpTV_EO1tghUWNSLzXeqhWzYDdSL2ifiUB0eKrn8.webp?r=01d",
                },
                {
                  id: 3,
                  link: "/AAAABdFfuoU4rnrXk50fjUjzle0OjZj8Sr40bucK1awD34hMUNwfrljs0-X52ZgBaOpgb52P9G0KZ3_VUhUb7VqJ31Fx8_pIglYJzTc.webp?r=75b",
                },
                {
                  id: 4,
                  link: "/AAAABXwSS0gQYIDY1tRAd95GwROElbuXGHQknlaBYCY5eZIRwlKK-P7YFgjaC9qIdf4Yxfp3FWBPr4aRAZs4c2D_0g-0Reexzjt92uFWXO_Z3Raf_nPed9Bh-KoAEG5Pk745BibAQt4Jt1UtBvXRYoe-E32w4jD9YL8qSEE2DqD00CwdqZtWzNXKwAA1wo_Ke--q64625ICA5zLDdwj6ApVT-Tbk-wL443I7kBXEQsNeuGlQUkDoQkGNgIjfQCLaeIVPivyMkO-96AvnJcoEaC2OHpSQBUmtnGVFRlg4KMBCNeX0nU_hLjFHvSOn3YEgoqpN0LplgPQLOKL8I0iCI3IPksqrskGoBAOKU2CPZGCgwROFtQ.jpg?r=f95",
                },
                {
                  id: 5,
                  link: "/AAAABUK2ZM9yUCBQa50XFB4LDve9xZG_ghwJplAhA5XbchTQyU7TSTNhWiR_1Za1wn0hBgwvulFaPOUwfRjrqiLoV41RkB3fu44Vtsk.webp?r=772",
                },
              ],
            },
            {
              name: "Gerçek Hayattan Uyarlanan Filmler",
              film: [
                {
                  id: 14,
                  link: "/AAAABeWVUnLavhCav6NuSMWZFQzNqAYPNt3Pf1kzZ3L_gsCTz8PCUAUtFCg556QZHoLQ2oXWlNjSrcnNbKDAJB2hEk7zhQROs69AG4SknEcMQlF8RPFaRYXAU6hXiQVU-3jt7A5Y.jpg?r=b2c",
                },
                {
                  id: 15,
                  link: "/AAAABcXmBeqw6AQCao2wB8fyf3-Wgmz29mAxMT3lMySREIOwUgF4w3Ug6nEsixTmkeKK1HtCW3fg9B1pPGykN7sMe44BkPx6zBdDKjo.webp?r=572",
                },
                {
                  id: 16,
                  link: "/AAAABSRqarQWZdhv5yEEYlzFfm3EoiZyr7jJlqWgX9QqbElaO-R_Vb366BaIvXA2mFkrT9GtYMwBiHMyNwAeVpgBJzsAXYw951L-SappqivnnIbqLP4lLM8xfI9c1UQPB5zhD-Qj.jpg?r=ccc",
                },
                {
                  id: 17,
                  link: "/AAAABfnQnKieETolPuxIvczAyJYLTjs9HJb7HZslgNsVo9XLbMergQeh75AKyIB4Fy_cWRJiXmMIUvLTKdE5b9IOC_6FNG8Z4W5LxBdUWLSalmwTUYkkAmP6erMXbvWOn4jleB058NtAwbHNIPXlBcac4KnhXq0EGbufH1EbZb11AuzSl8sIW-tUFXaMD_fyT7PwvlayLqBedSMA9xfezi7Fmhf-CMR-22sCGwqOfUZgdcEpCUe8kWUXtol63l--fCLdxnGJ0XnE5kzZRvbcKC007bnDDMdTRxd006AuKMFhShqgQHXIfWJxAK47BTMGQmdBbdaD3POt_kt46UrEnejotwxyS2Olui2SqB1PZvT1EN8GBA.jpg?r=f82",
                },
                {
                  id: 18,
                  link: "/AAAABcgwyzANWtxgvqehDGer7BeBfTtcH19SgZJ_I_FylMdNiWXstTpchFJlhYCse4y95AvCMXE9EAzSBA1jdlCh1xsACai2Tm8-hqL-TCslMiB1PilbJbQdCitFlbmkQUb2_yWm.jpg?r=0fa",
                },
                {
                  id: 19,
                  link: "/AAAABWzsjAp4fFSLfL2BBHAJGHKY1n7dcHMVVFrTzJ3ST1u0CG86H7PsYI_B-hliNwqEvxxg9hy7e6fScs1agnt9AhyjTdhdf7ueiyyC-bQiUcdyFqPFOareO-tHT9oeUHX9OcIt.jpg?r=cc9",
                },
                {
                  id: 14,
                  link: "/AAAABeWVUnLavhCav6NuSMWZFQzNqAYPNt3Pf1kzZ3L_gsCTz8PCUAUtFCg556QZHoLQ2oXWlNjSrcnNbKDAJB2hEk7zhQROs69AG4SknEcMQlF8RPFaRYXAU6hXiQVU-3jt7A5Y.jpg?r=b2c",
                },
                {
                  id: 15,
                  link: "/AAAABcXmBeqw6AQCao2wB8fyf3-Wgmz29mAxMT3lMySREIOwUgF4w3Ug6nEsixTmkeKK1HtCW3fg9B1pPGykN7sMe44BkPx6zBdDKjo.webp?r=572",
                },
                {
                  id: 16,
                  link: "/AAAABSRqarQWZdhv5yEEYlzFfm3EoiZyr7jJlqWgX9QqbElaO-R_Vb366BaIvXA2mFkrT9GtYMwBiHMyNwAeVpgBJzsAXYw951L-SappqivnnIbqLP4lLM8xfI9c1UQPB5zhD-Qj.jpg?r=ccc",
                },
                {
                  id: 17,
                  link: "/AAAABfnQnKieETolPuxIvczAyJYLTjs9HJb7HZslgNsVo9XLbMergQeh75AKyIB4Fy_cWRJiXmMIUvLTKdE5b9IOC_6FNG8Z4W5LxBdUWLSalmwTUYkkAmP6erMXbvWOn4jleB058NtAwbHNIPXlBcac4KnhXq0EGbufH1EbZb11AuzSl8sIW-tUFXaMD_fyT7PwvlayLqBedSMA9xfezi7Fmhf-CMR-22sCGwqOfUZgdcEpCUe8kWUXtol63l--fCLdxnGJ0XnE5kzZRvbcKC007bnDDMdTRxd006AuKMFhShqgQHXIfWJxAK47BTMGQmdBbdaD3POt_kt46UrEnejotwxyS2Olui2SqB1PZvT1EN8GBA.jpg?r=f82",
                },
                {
                  id: 18,
                  link: "/AAAABcgwyzANWtxgvqehDGer7BeBfTtcH19SgZJ_I_FylMdNiWXstTpchFJlhYCse4y95AvCMXE9EAzSBA1jdlCh1xsACai2Tm8-hqL-TCslMiB1PilbJbQdCitFlbmkQUb2_yWm.jpg?r=0fa",
                },
                {
                  id: 19,
                  link: "/AAAABWzsjAp4fFSLfL2BBHAJGHKY1n7dcHMVVFrTzJ3ST1u0CG86H7PsYI_B-hliNwqEvxxg9hy7e6fScs1agnt9AhyjTdhdf7ueiyyC-bQiUcdyFqPFOareO-tHT9oeUHX9OcIt.jpg?r=cc9",
                },
              ],
            },
          ],
          hero: {
            pageBackground:
              "url(https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWUo8-WMRML4DtAoby0LFm3QiL6TCH9Vs52tECyxtw5L7VTmzaGF8M7qJxwknZ29ZR13O4Yzefgmj7GjU9TU8LEZz41O1SZqDxbI.webp?r=cca)",
            contentImage:
              "https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABb65X1TnPi-UFZNMZhm2OgmBAobm1kFUMpkCGOfv0P0K7GkGXxKVw5f3pnJ87HGAiwITukjFlL8BhQn_DYWxbpe9hXZ1iuDk-c9f9e4TQFd2.webp?r=943",
            contentText: [
              " Viking kahramanı Ragnar Lothbrok’un, ileriyi göremeyen, yetersiz bir lidere meydan okuyarak Norse sınırlarını nasıl genişlettiğiniseyrettiğimiz gerçekçi bir dram.",
            ],
          },
        },
        {
          type: "Child",
          contents: [
            {
              name: "Animasyon",
              film: [
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
            },
          ],
          hero: {
            pageBackground:
              "url(https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTeIrPsa5CdL36ehhrIxSaBjkaKPTPTcPtHl0eMg1GD2WWSWKNNdZPOmon34gPpsblNBTQ9t6vNDxlwi_xfSi6IFa-9IMNgimaQJ.webp?r=647)",
            contentImage:
              "https://occ-0-778-2774.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABehzK0JSTjxd1lZMze_pD_r8D3EKihGcN0Zp8qK8S8JEo3z-6p5CDwdDRpDfJPwMxXqiqPDjLec4SBhtB5wKIWtgUDUnSdzC1aDA7Rhp5HjE.webp?r=4f4",
            contentText: [
              " 10 yaşındaki teknoloji dehasının önderliğiyle altı kahraman köpek yavrusu mizah, sorun çözme becerisi ve havalı araçlarla önemli kurtarmagörevlerinin altından kalkıyor.",
            ],
          },
        },
      ],
      selectedMovies: null,
    };
  },
  components: {
    headers: Header,
    movies: Movies,
  },
  created() {
    this.selectedMovies = this.movies.filter(
      (item) => item.type == this.$route.name
    )[0];
  },
  watch: {
    "$route.name"() {
      this.selectedMovies = this.movies.filter(
        (item) => item.type == this.$route.name
      )[0];
    },
  },
};
</script>

<template>
  <headers :hero="selectedMovies.hero" />
  <movies :movies="selectedMovies.contents" />
</template>
