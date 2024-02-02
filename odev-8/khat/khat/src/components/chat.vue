<template>
  <div class="bg-[#464856] w-[80%] h-[100vh]">
    <div class="h-[95%]"><Messages /></div>

    <div class="flex h-[5%]">
      <input
        type="text"
        class="w-[90%] bg-[#585a6b] px-8 text-white"
        placeholder="Type your message"
        v-model="inputValue"
      />

      <button class="bg-[#5D9C59] text-white w-[10%]">SEND</button>
    </div>
  </div>
</template>

<script>
import Messages from "./messages.vue";

export default {
  data() {
    return {
      // currentUserName: localStorage.getItem("name"),
      // currentUserId: localStorage.getItem("id"),
      // currentUserPhoto: localStorage.getItem("photoURL"),
      // inputValue: "",
      // listMessage: [],
      // groupChatId: null,
    };
  },
  provide: { message: "Selam Nasılsın ?", currentUser: null },
  components: {
    Messages,
  },
  methods: {},
};
</script>
