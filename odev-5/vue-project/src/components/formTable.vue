<template>
  <table class="table">
    <tr class="table__group">
      <th class="table__group--title">NAME</th>
      <th class="table__group--title">SURNAME</th>
      <th class="table__group--title">E-MAIL</th>
      <th class="table__group--title">PHONE</th>
      <th class="table__group--title">ADDRESS</th>
      <th class="table__group--title">PASSWORD</th>
      <th class="table__group--title">DELETE</th>
    </tr>
    <tr class="table__group" v-for="(item, index) in Users">
      <td class="table__group--text">{{ item.name }}</td>
      <td class="table__group--text">{{ item.surname }}</td>
      <td class="table__group--text">{{ item.email }}</td>
      <td class="table__group--text">{{ item.phone }}</td>
      <td class="table__group--text">
        {{ item.address.city }} / {{ item.address.district }}
      </td>
      <td class="table__group--text">{{ item.password }}</td>
      <td class="table__group--text">
        <button class="table__group--btn" :value="item.id" @click="deleteUser">
          x
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    form: Object,
    Users: Object,
  },

  methods: {
    deleteUser(e) {
      this.Users.forEach((element, index) => {
        element.id = index;
        if (e.target.value == element.id) {
          console.log(e.target.value, element.id);
          this.Users.splice(element.id, 1);
          console.log("selam");
        }
      });
    },
  },
};
</script>
