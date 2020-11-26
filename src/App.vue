<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>

export default {
  name: 'app',
  provide () {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。                                             
    return {
        reload: this.reload                                              
    }
  },
  data(){
    return{
      isRouterAlive: true
    }
  },
  created(){
    window.onload = function() {
      document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
          event.preventDefault()
        }
      })
      document.addEventListener('gesturestart', function(event) {
        event.preventDefault()
      })
    }
  },
  methods: {
    reload () {
        this.isRouterAlive = false;            //先关闭，
        this.$nextTick(function () {
            this.isRouterAlive = true;         //再打开
        }) 
    }
  },
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
