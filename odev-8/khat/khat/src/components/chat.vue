// Parent component
<template>
  <div class="bg-[#464856] w-[80%] h-[100vh]">
    <div class="h-[95%]"><Messages /></div>
    <div class="flex h-[5%]">
      <input class="w-[90%] bg-[#585a6b]" type="text" />
      <button class="bg-[#4d1f1f] w-[10%]">SEND</button>
    </div>
  </div>
</template>

<script>
import Messages from "./messages.vue";

export default {
  provide: {
    message: "Selam Nasılsın ?",
  },
  components: {
    Messages,
  },
};
</script>

<!--

 <div class="bg-[#464856] w-[80%] h-[100vh]">
    <div class="h-[95%]">Message AREA</div>
    <div class="flex h-[5%]">
      <input class="w-[90%] bg-[#585a6b]" type="text" />
      <button class="bg-[#4d1f1f] w-[10%]">SEND</button>
    </div>
  </div>
-->
