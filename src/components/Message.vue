<template>
    <div class="container justify-content-center">
        <div class="row justify-content-left"> 
            <router-link to="/home"><button type="button" class="btn btn-outline-info">Back to main board</button></router-link>     
        </div>
        <div class="box d-flex justify-content-center">
            <p>{{ message.message}}</p>
        </div>
        <div v-show="this.$store.state.userData.lives != 0">
            <router-link to="/messages"><button type="button" class="btn btn-outline-info">Pick another message</button></router-link>
         </div>
         <div v-show="this.$store.state.userData.lives === 0">
            <router-link to="/"><button type="button" class="btn btn-outline-info">Start the new game</button></router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'message',
    data() {
        return {
          params: {
            gameId: '',
            adId: ''
            }
        }
    },
    mounted() {
        this.$store.state.userData && (this.params.gameId = this.$store.state.userData.gameId)
        this.$store.state.messages && (this.params.adId = this.$route.params.adId)
        this.$store.dispatch('solveMessage', this.params)
    },
    computed: {
        ...mapState({
          message: state => state.message
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
  padding-top: 20px;
}
</style>