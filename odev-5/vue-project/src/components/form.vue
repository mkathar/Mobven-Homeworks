<template>
  <section class="form">
    <h1 class="form__title">Sign In</h1>
    <div class="form-group">
      <span class="form-group__label">Your Name</span>
      <input
        class="form-group__input"
        type="text"
        placeholder="Enter your name"
        maxlength="20"
        v-model="form.name"
      />
    </div>
    <div class="form-group">
      <span class="form-group__label">Your Surname</span>
      <input
        class="form-group__input"
        type="text"
        placeholder="Enter your Surname"
        maxlength="20"
        v-model="form.surname"
      />
    </div>
    <div class="form-group">
      <span class="form-group__label">Your Phone</span>
      <input
        class="form-group__input"
        type="tel"
        placeholder="Enter your Phone"
        maxlength="20"
        v-model.number="form.phone"
      />
    </div>
    <div class="form-group">
      <span class="form-group__label">Your Email</span>
      <input
        class="form-group__input"
        type="email"
        placeholder="Enter your Email"
        maxlength="50"
        v-model="form.email"
      />
    </div>
    <div class="form-group">
      <span class="form-group__label">Your City</span>
      <input
        class="form-group__input"
        type="text"
        placeholder="Enter your City"
        maxlength="20"
        v-model="form.city"
      />
    </div>
    <div class="form-group">
      <span class="form-group__label">Your District</span>
      <input
        class="form-group__input"
        type="text"
        placeholder="Enter your District"
        maxlength="20"
        v-model="form.district"
      />
    </div>
    <div class="form-group">
      <div class="form-group__label">
        <span class="form-group__label__title">Password</span>
        <a class="form-group__label__link" href="">Forgot password</a>
      </div>
      <input
        id="password"
        class="form-group__input"
        type="text"
        placeholder="Enter your password"
        maxlength="20"
        v-model="form.password"
      />
    </div>

    <button class="form__signIn" v-on:click="checkForm">Sign In</button>
  </section>
  <Table />
</template>

<script>
export default {
  data() {
    return { degisken: 3 };
  },
  props: {
    form: Object,
    Users: Object,
  },
  methods: {
    checkForm: function (e) {
      if (
        this.form.name == null ||
        this.form.surname == null ||
        this.form.phone == null ||
        this.form.email == null ||
        this.form.city == null ||
        this.form.district == null ||
        this.form.password == null
      ) {
        return false;
      }

      this.errors = ["THE FOLLOWING FIELDS MUST NOT BE EMPTY:"];

      if (!this.form.name) {
        this.errors.push("Name required.");
      }
      if (!this.form.surname) {
        this.errors.push("Surname required.");
      }
      if (!this.form.phone) {
        this.errors.push("Phone required.");
      }
      if (!this.form.email) {
        this.errors.push("Email required.");
      }
      if (!this.form.city) {
        this.errors.push("City required.");
      }
      if (!this.form.district) {
        this.errors.push("District required.");
      }
      if (!this.form.password) {
        this.errors.push("Password required.");
        console.log(this.errors);
      }
      let newUser = {
        id: this.degisken,
        name: this.form.name,
        surname: this.form.surname,
        email: this.form.email,
        address: {
          city: this.form.city,
          district: this.form.district,
        },
        phone: this.form.phone,
        password: this.form.password,
      };
      this.Users.push(newUser);
      console.log(this.Users);
      this.degisken = this.degisken + 1;
      //   console.log("name", this.form.name);
      //   console.log("surname", this.form.surname);
      //   console.log("phone", this.form.phone);
      //   console.log("email", this.form.email);
      //   console.log("city", this.form.city);
      //   console.log("district", this.form.district);
      //   console.log("password", this.form.password);
      //   console.log(this.errors);
      e.preventDefault();
    },
  },
};
</script>
