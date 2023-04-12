<template>
  <div class="w-[20%] bg-[#23252F] h-[100vh] pl-2 pt-2 pr-2">
    <div class="flex justify-between items-center">
      <h1 class="text-white text-3xl p-3">Sohbetler</h1>
      <button @click="logOut" class="bg-white p-1 rounded">Log Out</button>
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
export default {
  data() {
    return {};
  },
  methods: {
    logOut() {
      this.$router.push("/");
    },
  },
};
</script>
