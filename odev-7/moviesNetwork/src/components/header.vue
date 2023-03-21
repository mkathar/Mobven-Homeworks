<template>
  <div class="header">
    <div class="header__group">
      <Icon name="menu" />
      <h1 class="header__title">./Movies</h1>
    </div>
    <div class="header__group">
      <Icon name="bell" />
      <img
        class="header__img"
        src="https://picsum.photos/id/237/200/300"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "../icons.jsx";
</script>
