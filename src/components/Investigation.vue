<template>
  <div class="container d-flex flex-column">
      <div class="box d-flex justify-content-center"><p>Your reputation</p></div>
      <div class="box d-flex justify-content-center">
          <div><p>People: {{ reputation.people }}</p></div>
          <div><p>State: {{ reputation.state }}</p></div>
          <div><p>Underworld: {{ reputation.underworld }} </p></div>
      </div>
     
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Investigation',
    data() {
        return {
            gameId: ''
        }
    },
    mounted() {
        this.$store.state.userData && (this.gameId = this.$store.state.userData.gameId)
        console.log(this.gameId)
        this.$store.dispatch('getReputation', this.gameId)
    },
    computed: {
        ...mapState({
          reputation: state => state.reputation
        }),
     },
}
</script>

<style scoped>
.box {
  border: 2px solid black;
  padding: 20px;
  margin: 30px;
  border-radius: 5%;
  align-items: center;
  }
p {
    width: 300px;
  font-size: 25px;
  font-weight: 400;
  color: black;
}

</style>