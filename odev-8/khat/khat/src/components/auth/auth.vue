<template>
  <p class="p-2 m-2 rounded text-white inline-block">{{ auth }}</p>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export default {
  data() {
    return {
      users: [],
      auth: "selm",
    };
  },
  methods: {
    async getUser() {
      const querySnapshot = await getDocs(collection(getFirestore(), "users"));
      querySnapshot.forEach((doc) => {
        this.users.push(doc.data());
        console.log(doc.id, " => ", doc.data());
        console.log("selam", this.users);
        this.auth = this.users[0].name;
      });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>
