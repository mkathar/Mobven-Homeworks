<template>
  <div class="login">
    <header class="login__page__header">
      <Icon name="netflix" size="150" />
    </header>
    <div class="login__area">
      <h1 class="login__title">Oturum Aç</h1>
      <div class="login__group">
        <input
          placeholder="E-posta veya telefon numarası"
          class="group__input"
          type="text"
          v-model="email"
        />
        <input
          placeholder="Parola"
          class="group__input"
          type="password"
          v-model="pass"
        />
        <RouterLink class="group__link" :to="href">
          <button class="group__button" @click="loginUser">Oturum aç</button>
        </RouterLink>

        <router-view />
        <div class="login__content">
          <div class="content__text">
            <input type="radio" class="content__input" />
            <p class="content__text--gray">Beni hatırla</p>
          </div>
          <p class="content__text--white">Yardım ister misiniz?</p>
        </div>
      </div>
      <p class="content__text--gray">
        Netflix'e katılmak ister misiniz?
        <span class="content__text--white">Şimdi Kaydolun</span>
      </p>
      <p class="content__text--gray">
        Bu sayfa robot olmadığınızı kanıtlamak için Google reCAOTCHA tarafından
        korunuyor.
      </p>
      <span class="content__text--blue">Daha fazlasını öğrenin</span>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      href: "/",
      users: [
        {
          mail: "mail@gmail.com",
          password: "123456",
        },

        {
          mail: "mail2@gmail.com",
          password: "123456",
        },
        {
          mail: "mail3@gmail.com",
          password: "123456",
        },
        {
          mail: "mail4@gmail.com",
          password: "123456",
        },
        {
          mail: "mail5@gmail.com",
          password: "123456",
        },
        {
          mail: "mail6@gmail.com",
          password: "123456",
        },
      ],
    };
  },
  methods: {
    loginUser() {
      this.users.forEach((item) => {
        if (item.mail == this.email && item.password == this.pass) {
          this.href = "/welcome";
        }
      });
    },
  },
  components: { RouterLink },

  mounted() {},
};
</script>

<script setup>
import { Icon } from "../icons";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/vue";
import { RouterLink } from "vue-router";
import Footer from "../components/footer.vue";
</script>
