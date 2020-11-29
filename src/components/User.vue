<template>
    <div >
        <nav class="navbar navbar-expand-lg fixed-top">
            <router-link class="navbar-brand" to="/home">Dragons of Mugloar</router-link>
            <div class="mr-auto text-white">Lives:  {{ userData.lives }} Level: {{ userData.level }} Gold: {{ userData.gold }} Turn: {{ userData.turn }} </div>
            <div class="ml-auto text-white">Score: {{ userData.score }}  HighScore: {{ userData.highScore }} </div>
        </nav>
    </div>
</template>

<script>
import {  mapState } from 'vuex'

export default {
    name: 'user',
    mounted() {
        this.$store.dispatch('getUserData')
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