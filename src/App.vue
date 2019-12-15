<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  font-size: 25px;
  color: $colorBlackSoft;
}

* {
  box-sizing: border-box;
}

// Backgrounds

.beach-bg {
  @extend %fullScreen;
  background-image: url("./assets/main.jpg");
  background-size: cover;
  overflow-y: scroll;
}


</style>
