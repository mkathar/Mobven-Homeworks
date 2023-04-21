<template>
  <div class="w-full h-[100vh] bg-[#23252F] flex">
    <div class="w-[55%] text-white">
      <div v-if="$route.name != 'login'" class="flex justify-end p-10">
        <RouterLink to="/login" class="flex">
          <Icon name="account" />Login
        </RouterLink>
      </div>
      <div class="w-[550px] my-0 mx-auto flex flex-col">
        <p class="mb-5 mt-4">{{ time }}</p>
        <h1 class="text-4xl mb-5">
          The help of Augmented Reality and Holograms
        </h1>
        <p class="mb-10 text-base">
          Use Augmented Reality to keep students engaged and provide detailed
          explanations of models and course material. In a 3D, AR Lab, students
          fully immersive learning experience
        </p>
        <h2 class="mb-4 text-3xl">Join the Event</h2>
      </div>
      <form
        v-if="$route.name == 'login'"
        @submit.prevent="submitFormLogin"
        class="w-[550px] my-0 mx-auto flex flex-col"
      >
        <div class="flex gap-x-10 mb-5">
          <div class="flex flex-col w-[45%]">
            <label for="">E-mail</label>
            <input
              class="h-12 bg-transparent border-b-gray-500 border-solid border-[1px] px-6"
              type="text"
              v-model="form.mail"
              @blur="v$.form.mail.$touch()"
            />
            <div class="text-red-600" v-if="v$.form.mail.$error">
              Your mail was wrong
            </div>
          </div>
          <div class="flex flex-col w-[45%]">
            <label for="">Password</label>
            <input
              class="h-12 bg-transparent border-b-gray-500 border-solid border-[1px] px-6"
              type="password"
              v-model="form.password"
              @blur="v$.form.password.$touch()"
            />
            <div class="text-red-600" v-if="v$.form.password.$error">
              Your password was wrong
            </div>
          </div>
        </div>
        <div class="flex mt-5">
          <input type="checkbox" class="mr-5 cursor-pointer" />
          <p class="">I would like to receive emails about future webinars</p>
        </div>
        <div class="flex justify-between">
          <input
            type="submit"
            value=" Login"
            class="bg-white text-black w-[250px] p-3 my-5 cursor-pointer"
          />

          <p class="mt-8">
            <RouterLink to="/">Don't have an account yet?</RouterLink>
          </p>
        </div>
      </form>
      <form
        v-if="$route.name != 'login'"
        @submit.prevent="submitForm"
        class="w-[550px] my-0 mx-auto flex flex-col"
      >
        <div class="flex gap-x-10 mb-5">
          <div class="flex flex-col w-[45%]">
            <label for="">First name</label>
            <input
              class="h-12 bg-transparent border-b-gray-500 border-solid border-[1px] px-6"
              type="text"
              v-model="form.name"
              @blur="v$.form.name.$touch()"
            />
            <div class="text-red-600" v-if="v$.form.name.$error">
              Name field has an error.
            </div>
          </div>
          <div class="flex flex-col w-[45%]">
            <label for="">Last name</label>
            <input
              class="h-12 bg-transparent border-b-gray-500 border-solid border-[1px] px-6"
              type="text"
              v-model="form.surname"
              @blur="v$.form.surname.$touch()"
            />
            <div class="text-red-600" v-if="v$.form.surname.$error">
              Surname field has an error.
            </div>
          </div>
        </div>
        <div class="flex gap-x-10 mb-5">
          <div class="flex flex-col w-[45%]">
            <label for="">Username</label>
            <input
              class="h-12 bg-transparent border-b-gray-500 border-solid border-[1px] px-6"
              type="text"
              v-model="form.username"
              @blur="v$.form.username.$touch()"
            />
            <div class="text-red-600" v-if="v$.form.username.$error">
              Username field has an error.
            </div>
          </div>
          <div class="flex flex-col w-[45%]">
            <label for="">E-mail</label>
            <input
              class="h-12 bg-transparent border-b-gray-500 border-solid border-[1px] px-6"
              type="text"
              v-model="form.mail"
              @blur="v$.form.mail.$touch()"
            />
            <div class="text-red-600" v-if="v$.form.mail.$error">
              E-mail field has an error.
            </div>
          </div>
        </div>
        <div class="flex gap-x-10 mb-5">
          <div class="flex flex-col w-[45%]">
            <label for="">Password</label>
            <input
              class="h-12 bg-transparent border-b-gray-500 border-solid border-[1px] px-6"
              type="password"
              v-model="form.password"
              @blur="v$.form.password.$touch()"
            />
            <div class="text-red-600" v-if="v$.form.password.$error">
              Password field has an error.
            </div>
          </div>
          <div class="flex flex-col w-[45%]">
            <label for="">Comfirm Your Password</label>
            <input
              class="h-12 bg-transparent border-b-gray-500 border-solid border-[1px] px-6"
              type="password"
              v-model="form.confirm"
              @blur="v$.form.confirm.$touch()"
            />
            <div class="text-red-600" v-if="v$.form.confirm.$error">
              Confirm field has an error.
            </div>
          </div>
        </div>
        <div class="mt-2">
          <label for="">Profil Resmi</label>
          <input
            class="mt-4 w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full cursor-pointer file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-gray-700 hover:file:bg-violet-100"
            type="file"
            @blur="$v.form.picture.$touch()"
            @change="onFilePicked"
            accept="image/png, image/jpeg"
          />
          <div class="text-red-600" v-if="v$.form.picture.$error">
            Someting went wrong
          </div>
        </div>
        <div class="flex mt-5">
          <input type="checkbox" class="mr-5" />
          <p class="">I would like to receive emails about future webinars</p>
        </div>
        <div class="flex justify-between">
          <input
            type="submit"
            value=" Register for this event"
            class="bg-white text-black w-[250px] p-3 my-5 justify-end cursor-pointer"
          />
          <p class="mt-8">
            <RouterLink to="/login">You do have an account?</RouterLink>
          </p>
        </div>
      </form>
    </div>
    <div class="bg-[#464856] w-[45%]">
      <div class="text-white gap-y-36 flex flex-col w-[200px] ml-16 mt-16">
        <div class="">
          <p class="mb-10">Share</p>
          <div class="flex gap-x-2">
            <Icon name="facebook" />
            <Icon name="twitter" />
            <Icon name="linkedin" />
          </div>
        </div>
        <div class="flex gap-y-6 flex-col">
          <h1 class="text-2xl">GUESTS</h1>
          <div class="gap-y-6 flex flex-col">
            <div class="flex items-center gap-x-2">
              <img
                class="rounded-full"
                src="https://picsum.photos/id/237/70/70"
                alt=""
              />
              <div>
                <h6>Lisa Alvin</h6>
                <p>Cofounder,Jea</p>
              </div>
            </div>
            <div class="flex items-center gap-x-2">
              <img
                class="rounded-full"
                src="https://picsum.photos/id/232/70/70"
                alt=""
              />
              <div>
                <h6>Lisa Alvin</h6>
                <p>Cofounder,Jea</p>
              </div>
            </div>
            <div class="flex items-center gap-x-2">
              <img
                class="rounded-full"
                src="https://picsum.photos/id/235/70/70"
                alt=""
              />
              <div>
                <h6>Lisa Alvin</h6>
                <p>Cofounder,Jea</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-y-6 flex-col">
          <h1 class="text-2xl">HOSTED BY</h1>
          <div class="flex items-center gap-x-2">
            <img
              class="rounded-full"
              src="https://picsum.photos/id/236/70/70"
              alt=""
            />
            <div>
              <h6>KATHAR</h6>
              <p>Jr. Front End Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  helpers,
  email,
  minLength,
  sameAs,
} from "@vuelidate/validators";
import firebase from "../services/firebase";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { Icon } from "../icons.jsx";
const imageRule = helpers.regex("image", /\.(gif|jpe?g|tiff|png)$/);

export default {
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({
    href: "",
    form: {
      name: "",
      surname: "",
      mail: "",
      username: "",
      password: "",
      confirm: "",
      picture: "",
    },

    time: null,
  }),

  validations() {
    return {
      form: {
        name: { required },
        surname: { required },
        mail: {
          // required: helpers.regex(/^\S+@\S+\.\S+$/),
          required,
          email,
        },
        username: { required, minLength: minLength(5) },
        password: { required, minLength: minLength(6) },
        confirm: {
          required,
          sameAs: sameAs(this.form.password),
        },
        picture: { imageRule },
      },
    };
  },

  methods: {
    // setName($event) {
    //   this.name = $event.target.value;
    //   this.v$.name.$touch();
    // },
    // setSurname($event) {
    //   this.surname = $event.target.value.toUpperCase();
    //   this.v$.surname.$touch();
    // },
    // setMail($event) {
    //   this.mail = $event.target.value.toLowerCase();
    //   this.v$.mail.$touch();
    // },
    // setUsername($event) {
    //   this.username = $event.target.value.toLowerCase();
    //   this.v$.username.$touch();
    // },
    // setPassword($event) {
    //   this.password.password = $event.target.value;
    //   this.v$.password.password.$touch();
    // },
    // setConfirm($event) {
    //   this.password.confirm = $event.target.value;
    //   this.v$.password.confirm.$touch();
    // },
    // setPicture($event) {
    //   this.picture = $event.target.value.toUpperCase();
    //   this.v$.picture.$touch();
    // },
    async submitFormLogin() {
      const mail = this.form.mail;
      const password = this.form.password;

      try {
        await signInWithEmailAndPassword(getAuth(), mail, password);
        this.$router.push("/textingScreen");
        console.log(this.href);
      } catch (err) {
        console.log(err);
      }
    },
    async submitForm(e) {
      this.v$.$validate();
      const username = this.form.username;
      const name = this.form.name;
      const surname = this.form.surname;
      const mail = this.form.mail;
      const password = this.form.password;
      const confirm = this.form.confirm;
      const picture = this.form.picture;
      const date = new Date().getTime();

      try {
        const res = await createUserWithEmailAndPassword(
          getAuth(),
          mail,
          password,
          name,
          surname,
          username
        );

        await setDoc(doc(getFirestore(), "users", res.user.uid), {
          uid: res.user.uid,
          username,
          mail,
          name,
          surname,
        });
        await setDoc(doc(getFirestore(), "userChats", res.user.uid), {});
        this.$router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
  },
  components: {
    Icon,
  },
  mounted() {
    
  },
};

//emailRegex=/^\S+@\S+\.\S+$/
</script>
