<template>
  <div class='container d-flex justify-content-around'>
    <router-link to="/investigation"><div class="box d-flex justify-content-center"> <p>Investigate your reputation</p></div></router-link>
    <router-link to="/messages"><div class="box d-flex justify-content-center"><p>See all messages</p></div></router-link>
   <router-link to="/shop"> <div class="box d-flex justify-content-center"><p>Shop</p></div></router-link>
  </div>
</template>

<script>
export default {
    name: 'Choices'

}
</script>

<style scoped>
.box {
  width: 200px;
  height: 150px;
  border: 2px solid black;
  padding: 20px;
  margin: 30px;
  border-radius: 5%;
  align-items: center;
  }
p {
  font-size: 25px;
  font-weight: 400;
}
.box:hover {
  background-color: cadetblue;
}
</style>>
