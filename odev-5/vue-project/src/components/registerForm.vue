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
        v-model="userName"
      />
    </div>
    <div class="form-group">
      <span class="form-group__label">Your Surname</span>
      <input
        class="form-group__input"
        type="text"
        placeholder="Enter your Surname"
        maxlength="20"
        v-model="userSurname"
      />
    </div>
    <div class="form-group">
      <span class="form-group__label">Your Phone</span>
      <input
        class="form-group__input"
        type="tel"
        placeholder="Enter your Phone"
        maxlength="20"
        v-model.number="userPhone"
      />
    </div>
    <div class="form-group">
      <span class="form-group__label">Your Email</span>
      <input
        class="form-group__input"
        type="email"
        placeholder="Enter your Email"
        maxlength="50"
        v-model="userEmail"
      />
    </div>
    <div class="form-group">
      <span class="form-group__label">Your City</span>
      <input
        class="form-group__input"
        type="text"
        placeholder="Enter your City"
        maxlength="20"
        v-model="userCity"
      />
    </div>
    <div class="form-group">
      <span class="form-group__label">Your District</span>
      <input
        class="form-group__input"
        type="text"
        placeholder="Enter your District"
        maxlength="20"
        v-model="userDistrict"
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
        v-model="userPassword"
      />
    </div>
    <button class="form__signIn" v-on:click="checkForm">Sign In</button>
  </section>
</template>

<script>
export default {
  data() {
    return { degisken: 3 };
  },

  props: {
    Users: Object,
  },
  methods: {
    checkForm: function (e) {
      if (
        this.userName == null ||
        this.userSurname == null ||
        this.userPhone == null ||
        this.userEmail == null ||
        this.userCity == null ||
        this.userDistrict == null ||
        this.userPassword == null
      ) {
        return false;
      }

      let newUser = {
        id: this.degisken,
        name: this.userName,
        surname: this.userSurname,
        email: this.userEmail,
        address: {
          city: this.userCity,
          district: this.userDistrict,
        },
        phone: this.userPhone,
        password: this.userPassword,
      };
      this.Users.push(newUser);
      console.log(this.Users);
      this.degisken = this.degisken + 1;
      console.log("name", userName);
      console.log("surname", userSurname);
      console.log("phone", userPhone);
      console.log("email", userEmail);
      console.log("city", userCity);
      console.log("district", userDistrict);
      console.log("password", userPassword);
      console.log(this.errors);
      e.preventDefault();
    },
  },
};
</script>
