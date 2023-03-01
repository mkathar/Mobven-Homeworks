<template>

    <div class="main-content-card-Add">      
          <img src="../assets/icons/plus2.svg" class="main-content-card__icon" alt="">
          <p class="main-content-card__text">Create Group</p>
        </div>
        <div v-for="(item) in cardİtem" class="main-content-card">      
          <img :src=item.cardImage alt="">
          <h1 class="main-content-card__title">{{item.cardTitle}}</h1>
          <p class="main-content-card__text">{{item.members}} members</p>
        </div>
  
</template>
<script>
export default {
  data() {
    return {
     cardİtem: [{
      cardTitle:"Cuisine",
      members:36,
      cardImage:"src/assets/img/Cuisine.png"
     },
     {
      cardTitle:"Art",
      members:9,
      cardImage:"src/assets/img/Art.png"
     }, {
      cardTitle:"Workout",
      members:27,
      cardImage:"src/assets/img/Art.png"
     }, {
      cardTitle:"Gaming",
      members:105,
      cardImage:"src/assets/img/Gaming.png"
     }, {
      cardTitle:"Hiking",
      members:97,
      cardImage:"src/assets/img/Hiking.png"
     }, {
      cardTitle:"Yoga",
      members:65,
      cardImage:"src/assets/img/Yoga.png"
     }]
    }
  }
}
</script>