<template>
  <div class="w-[20%] bg-[#23252F] h-[100vh] pl-2 pt-2 pr-2">
    <div class="flex justify-between items-center">
      <h1 class="text-white text-3xl my-2">Sohbetler</h1>
      <h1><AuthVue /></h1>
      <button @click="logOut" class="bg-red-700 p-1 rounded text-white">
        Log Out
      </button>
    </div>
    <ul>
      <li>
        <div class="flex mb-4 bg-[#555873] rounded py-2 px-2">
          <img
            class="rounded-full mr-2"
            src="https://picsum.photos/id/237/50/50"
            alt=""
          />
          <div>
            <h1 class="text-xl text-white">Ornek İsim</h1>
            <p>anlık mesaj</p>
          </div>
        </div>
        <div class="flex mb-4 bg-[#555873] rounded py-2 px-2">
          <img
            class="rounded-full mr-2"
            src="https://picsum.photos/id/237/50/50"
            alt=""
          />
          <div>
            <h1 class="text-xl text-white">Ornek İsim</h1>
            <p>anlık mesaj</p>
          </div>
        </div>
        <div class="flex mb-4 bg-[#555873] rounded py-2 px-2">
          <img
            class="rounded-full mr-2"
            src="https://picsum.photos/id/237/50/50"
            alt=""
          />
          <div>
            <h1 class="text-xl text-white">Ornek İsim</h1>
            <p>anlık</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "../services/firebase";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import AuthVue from "./auth/auth.vue";

const docRef = doc(getFirestore(), "users", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  console.log("No such document!");
}
export default {
  data() {
    return {};
  },
  components: {
    AuthVue,
  },
  methods: {
    logOut() {
      this.$router.push("/");
    },
  },
};
</script>
