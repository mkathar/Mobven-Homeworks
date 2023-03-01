<script setup>
import Form from "./components/form.vue";
import Table from "./components/table.vue";
</script>
<script>
export default {
  data() {
    return {
      form: {
        name: null,
        surname: null,
        phone: null,
        email: null,
        city: null,
        district: null,
        password: null,
      },
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
  <Form :form="this.form" :Users="this.Users" />
  <Table :form="this.form" :Users="this.Users" />
</template>
