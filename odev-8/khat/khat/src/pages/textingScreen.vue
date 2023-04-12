<template>
  <div class="flex">
    <Sidebar />
    <Chat />
  </div>
</template>

<script>
import Chat from "../components/chat.vue";
import Sidebar from "../components/sidebar.vue";

export default {
  data() {
    return {};
  },
  components: {
    Chat,
    Sidebar,
  },
};
</script>
