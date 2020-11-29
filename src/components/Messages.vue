<template>
  <div class="container justify-content-center">
      <div class="header"> <p>Click on the message and try to solve it</p> </div>
      <div class="box d-flex flex-wrap">
           <div class="msg " v-for="msg in messages" :key="msg.adId" > 
               <router-link :to="{ name: 'message', params: { adId:msg.adId } }">
                   <p> {{ msg.message }} </p>
               </router-link>
               <div class="down">Reward: {{ msg.reward }} Expires in : {{ msg.expiresIn}}</div>
            </div> 
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Messages',
    data() {
        return {
            gameId: ''
        }
    },
    mounted() {
        this.$store.state.userData && (this.gameId = this.$store.state.userData.gameId)
        console.log(this.gameId)
        this.$store.dispatch('getMessages', this.gameId)
    },
    computed: {
        ...mapState({
          messages: state => state.messages
        }),
     },

}
</script>

<style scoped>
.box {
    padding-top: 20px;
    }
.msg {
  width: 300px;
  border: 2px solid black;
  padding: 20px;
  margin: 30px;
  border-radius: 5%;
  align-items: center;
  }
p {
  font-size: 25px;
  font-weight: 400;
  color: black;
}
</style>