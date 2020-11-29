<template>
  <div class="container d-flex flex-column">
      <div class="row justify-content-left"> 
            <router-link to="/home"><button type="button" class="btn btn-outline-info">Back to main board</button></router-link>     
      </div>
        <div class="d-flex justify-content-center"> 
             <div > 
                <p>Your reputation</p>    
            </div>    
        </div> 

      <div class="box d-flex flex-column">
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
  padding: 20px;
  margin: 30px;
  align-items: center;
  }
p {
  width: 200px;
  font-size: 25px;
  font-weight: 400;
  color: black;
}

</style>