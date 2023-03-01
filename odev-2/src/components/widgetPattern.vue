<template setup>
    <section class="main">
      <div class="main-side">
        <ul>
          <li class="side__item"><img src="../assets/icons/comments.svg" alt=""></li>
          <li class="side__item__selected"><img src="../assets/icons/users.svg" alt=""></li>
          <li class="side__item"><img src="../assets/icons/apple.svg" alt=""></li>
          <li class="side__item"><img src="../assets/icons/settings.svg" alt=""></li>
        </ul>
      </div>
      <div class="main-content">
      <div class="main-content-top">
        <div class="main-content-top-left">
        <img src="../assets/icons/prev.svg" alt="">
          <h1 class="main-content__title">           
            Groups
            </h1>
        </div>
           <div class="main-content-top-right">
            <img class="main-content-top-right__icon" src="../assets/icons/box.svg" alt="">
            <img class="main-content-top-right__icon__selected" src="../assets/icons/list.svg" alt="">
           </div>
      </div>
      <div class="main-content-bottom">
        <widgetCard/>
        
      </div>
      </div>
       
        
    
    </section>
</template>

<script setup>
import widgetCard from "./widgetCard.vue"

</script>