<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
:root {
  --accent-color: rgba(248, 246, 220, 255);
  --button-color: rgba(238, 132, 53, 255);
  --secondary-color: rgba(197, 61, 30, 255);
  --primary-color: rgba(118, 61, 1, 255);
  --select-color: rgba(129, 204, 226, 255);
  --faded-select-color: rgba(55, 230, 246, 0.2);
  --border-color: rgb(248, 248, 248);
}
#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
