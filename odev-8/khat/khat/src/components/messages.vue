<template>
  <p
    class="p-2 m-2 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-gray-400 inline-block"
  >
    {{ message }}
  </p>
</template>

<script>
export default {
  inject: ["message"],
};
</script>
