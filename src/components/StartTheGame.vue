<template>
    <div class='StartTheGame'>
      <router-view />
      <img class="mx-auto d-block" style="width:50%" src="../assets/dragonLogo.jpg" alt/>
      <router-link to="./home"><button class="btn-outline-danger btn-lg">Start the game</button></router-link>
      <img class="mx-auto d-block" style="width:50%" src="../assets/dragons.png" alt/>
    </div>
</template>

<script>
export default {
    name: 'StarTheGame'
}
</script>