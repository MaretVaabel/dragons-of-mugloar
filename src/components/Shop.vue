<template>
   <div class="container justify-content-center">
      <div class="row justify-content-left"> 
            <router-link to="/home"><button type="button" class="btn btn-outline-info">Back to main board</button></router-link>     
      </div>
        <div class="d-flex justify-content-center"> 
             <div > 
                <p>Purchase an item</p>    
            </div>    
        </div> 
      <div class="box d-flex flex-wrap">
           <div class="msg " v-for="item in items" :key="item.id" > 
               <router-link :to="{ name: 'item', params: { id: item.id } }">
                   <p> {{ item.name}} </p>

               </router-link>
               <div><p> Costs: {{ item.cost }}</p></div>
            </div> 
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Shop',
    data() {
        return {
            gameId: ''
        }
    },
    mounted() {
        this.$store.state.userData && (this.gameId = this.$store.state.userData.gameId)
        this.$store.dispatch('getItems', this.gameId)
    },
    computed: {
        ...mapState({
          items: state => state.items
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