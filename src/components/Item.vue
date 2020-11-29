<template>
   <div class="container justify-content-center">
         <div class="row justify-content-left"> 
            <router-link to="/home"><button type="button" class="btn btn-outline-info">Back to main board</button></router-link>     
      </div>
      <div class="box d-flex justify-content-center">
          <div v-show="item.shoppingSuccess === true" class="msg">
              <p>You purchase was successful</p>
          </div>
          <div v-show="item.shoppingSuccess === false" class="msg">
              <p>You purchase failed</p>
          </div>
      </div>
      <div class="buttons row justify-content-center">
      <div v-show="this.$store.state.userData.lives != 0">
      <router-link to="/shop"><button type="button" class="btn btn-outline-info p-2 m-2">Pick another item</button></router-link>
    </div>
    <router-link to="/messages"><button type="button" class="btn btn-outline-info p-2 m-2">Back to messages</button></router-link>
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
            id: ''
            }
        }
    },
    mounted() {
        this.$store.state.userData && (this.params.gameId = this.$store.state.userData.gameId)
        this.$store.state.items && (this.params.id = this.$route.params.id)
        this.$store.dispatch('buyItem', this.params)
    },
    computed: {
        ...mapState({
          item: state => state.item
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