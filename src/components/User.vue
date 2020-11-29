<template>
  <div >
      <nav class="navbar navbar-expand-lg fixed-top">
        <router-link class="navbar-brand" to="/home">Dragons of Mugloar</router-link>
        <div class="mr-auto text-white">Lives:  {{ userData.lives }} Level: {{ userData.level }} Gold: {{ userData.gold }} Turn: {{ userData.turn }} </div>
        <div class="ml-auto text-white">Score: {{ userData.score }}  HighScore: {{ userData.highScore }} </div>
        <router-link class="btn btn my-2 my-sm-0" to="/shop">
              <img
                src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                width="50"
                alt
              />
              <span class="badge badge-danger badge-pill">3</span>
        </router-link>
      </nav>
  <div>
      <Choices />
  </div>
    </div>
</template>

<script>
import {  mapState } from 'vuex'
import Choices from './Choices.vue'

export default {
    name: 'user',
    components: {
     Choices
    },
    mounted() {
        this.$store.dispatch('getUserData')
        console.log(this.$store.state.userData)
    },
    computed: {
         ...mapState({
           userData: state => state.userData
         })
    }
}
</script>

<style scoped>
nav {
  background-color: teal;
}
.navbar-brand {
  font-weight: bold;
  font-size: 25px;
  color: #ffffff !important;
}
</style>