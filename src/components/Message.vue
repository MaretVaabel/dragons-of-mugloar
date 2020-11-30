<template>
    <div class="container justify-content-center">
        <div class="row justify-content-left" v-show="this.$store.state.userData.lives != 0"> 
            <router-link to="/home"><button type="button" class="btn btn-outline-info">Back to main board</button></router-link>     
        </div>
        <div class="box d-flex justify-content-center">
            <p>{{ message.message}}</p>
        </div>
        <div class="buttons row justify-content-center">
            <div v-show="this.$store.state.userData.lives != 0">
                <router-link to="/messages"><button type="button" class="btn btn-outline-info p-2 m-2">Pick another message</button></router-link>
                <router-link to="/shop"><button type="button" class="btn btn-outline-info p-2 m-2">Go to shop</button></router-link>
            </div>  
            <div v-show="this.$store.state.userData.lives === 0">
                <router-link to="/"><button type="button" class="btn btn-outline-info p-2 m-2">Start the new game</button></router-link>
            </div>
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
        this.$route.params.adId.slice(-1) === '=' ? (this.params.adId = atob(this.$route.params.adId)):(this.params.adId = this.$route.params.adId)
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