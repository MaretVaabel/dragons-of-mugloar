<template>
  <div class="home">
    <User />
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  margin: 100px;
  
}
</style>
