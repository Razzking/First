<template>
  <div class="hello">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Service</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<script setup >

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0px;
  margin: 0px;
}
ul {
  list-style-type: none;
  padding: 10px;
  font-size: 20px;
  display: flex;
  justify-content: center;
}
li{
  margin: 5px 30px;
}
li:hover{
  color: #0c790c;
}
div{
  background-color: #9999;
}
</style>
