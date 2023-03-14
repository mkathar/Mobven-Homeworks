<template>
  <div class="login__page">
    <header class="login__page__header">
      <Icon name="netflix" size="150" />
    </header>
    <div class="login">
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
          type="text"
          v-model="pass"
        />
        <RouterLink :to="href">
          <button @click="loginUser">Oturum aç</button>
        </RouterLink>
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
    <footer class="footer">
      <p class="footer__title">
        Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın
      </p>
      <div class="footer__group">
        <div class="group__list">
          <ul>
            <li>SSS</li>
            <li>Çerez Tercihleri</li>
            <li>
              <CDropdown>
                <CDropdownToggle>
                  <Icon name="world" size="24" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">English</CDropdownItem>
                  <CDropdownItem href="#">Türkçe</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </li>
          </ul>
        </div>
        <div class="group__list">
          <ul>
            <li>Yardım Merkezi</li>
            <li>Kurumsal Bilgiler</li>
          </ul>
        </div>
        <div class="group__list">
          <p>Kullanım Koşulları</p>
        </div>
        <div class="group__list"><p>Gizlilik</p></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      href: "/welcome",
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
        if (item.mail.includes(this.email)) {
          this.login("true");
        } else {
          this.login("false");
        }
      });
    },
    login(s) {
      if (s == "true") {
        console.log(this.href);
        return (this.href = "/welcome");
      } else {
        console.log(this.href);
        return (this.href = "/");
      }
    },
  },
  components: { RouterLink },
  watch: {
    "this.href"() {
      [0];
    },
  },

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
</script>

<style scoped>
.login__page {
  height: 100vh;
  color: white;
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/351323ec-5dbd-4078-a4c2-0fe04dccd586/TR-tr-20230306-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-size: cover;
}
.login__page__header {
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
}
.login {
  width: 450px;
  height: 700px;
  margin: 10rem auto;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 60px 68px 40px;
}
.login__group {
  display: flex;
  flex-direction: column;
}
.group__input {
  height: 50px;
  background: #333;
  margin-top: 16px;
  border: none;
  color: #8c8c8c;
  padding-left: 20px;
  border-radius: 4px;
}
.group__button {
  height: 50px;
  background-color: red;
  color: white;
  margin-top: 16px;
}
.login__content {
  display: flex;
  justify-content: space-between;
}
.login__text {
  display: flex;
  justify-content: space-between;
}
.content__text {
  display: flex;
  align-items: center;
}
.content__input {
  margin: 0;
}
.content__text--gray {
  margin-top: 15px;
  margin-left: 5px;
  color: gray;
}
.content__text--blue {
  color: rgb(0, 81, 255);
}
.content__text--white {
  color: white;
  margin-top: 15px;
}
.footer {
  padding: 5rem 10rem;
  background-color: rgba(0, 0, 0, 0.9);
  height: fit-content;
  color: gray;
}

.footer__group {
  width: 100%;
  display: flex;
}
.group__list {
  width: 20%;
  list-style-type: none;
}
</style>
