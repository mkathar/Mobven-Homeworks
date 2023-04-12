<template>
  <p class="p-2 m-2 rounded bg-gray-400">{{ message }}</p>
</template>

<script>
export default {
  inject: ["message"],
};
</script>
