<template>
  <div class='container d-flex justify-content-around flex-wrap'>
    <div v-show="this.$store.state.userData.lives === 0">
      <p>GAME OVER</p>
      <router-link to="/"><button type="button" class="btn btn-outline-info p-2 m-2">Start the new game</button></router-link>
    </div>
    <router-link v-if="this.$store.state.userData.lives != 0" to="/investigation"><div class="box d-flex justify-content-center"> <p>Investigate your reputation</p></div></router-link>
    <router-link v-if="this.$store.state.userData.lives != 0" to="/messages"><div class="box d-flex justify-content-center"><p>See all messages</p></div></router-link>
    <router-link v-if="this.$store.state.userData.lives != 0" to="/shop"> <div class="box d-flex justify-content-center"><p>Shop</p></div></router-link>
  </div>
</template>

<script>
export default {
    name: 'Choices'
}
</script>

<style scoped>
.box {
  align-items: center;
  border: 2px solid black;
  border-radius: 10%;
  width: 300px;
  height: 200px;
  margin-top: 100px;
  padding: 20px;
  }
p {
  font-size: 25px;
  font-weight: 400;
}
.box:hover {
    background-color: lightblue;
}
</style>>
