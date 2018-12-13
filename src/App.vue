<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // 自适应改变字体大小
  function resizeFont () {
    const rootSize = document.documentElement.clientWidth > 750 ? 750 : document.documentElement.clientWidth
    document.documentElement.style.fontSize = rootSize / 7.5 + 'px'
  }

  window.addEventListener('resize', function () {
    resizeFont()
  });

  (function () {
    resizeFont()
  })()

  export default {
    name: 'App'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
