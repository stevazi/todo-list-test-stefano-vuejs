<template>
  <div id="nav">
    <router-link to="/">all</router-link>  
    <router-link to="/completed" v-if="isUserSet()"> | completed | </router-link> 
    <router-link to="/toBeDone" v-if="isUserSet()">To be Done</router-link>

  </div>
  <router-view/>
</template>

<script>
export default {
  methods:{
    isUserSet(){
      if (this.$store.state.isUserSet){
        return true
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
