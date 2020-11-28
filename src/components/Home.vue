<template>
  <div class="home">
    <header> 
      <User />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import User from './User'

export default {
  name: 'Home',
  components: {
    User
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100vw;
  background-color: white;
  padding: 15px;
  position: fixed;
  z-index: 1;
}
main {
  margin: 100px;
  
}
</style>
