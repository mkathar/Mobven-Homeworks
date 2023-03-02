<script setup>
import formTable from "./components/formTable.vue";
import registerForm from "./components/registerForm.vue";
</script>
<script>
export default {
  data() {
    return {
      Users: [
        {
          id: 0,
          name: "Muhammed",
          surname: "Katar",
          email: "mail@gmail.com",
          address: {
            city: "İstanbul",
            district: "Sultanbeyli",
          },
          phone: "0000000000",
          password: "000000",
        },
        {
          id: 1,
          name: "Muhammed",
          surname: "Katar",
          email: "mail@gmail.com",
          address: {
            city: "İstanbul",
            district: "Sultanbeyli",
          },
          phone: "0000000000",
          password: "000000",
        },
        {
          id: 2,
          name: "Muhammed",
          surname: "Katar",
          email: "mail@gmail.com",
          address: {
            city: "İstanbul",
            district: "Sultanbeyli",
          },
          phone: "0000000000",
          password: "000000",
        },
      ],
    };
  },
  props: {},
};
</script>

<template>
  <registerForm :Users="Users" />
  <formTable :Users="Users" />
</template>
