<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <todoList v-if="isUserSet" @logoutEvent="logMeOut"></todoList>
    <setUserForm v-else @isUserSetEvent = "isUserSetfunc()"  ></setUserForm>

  </div>
</template>

<script>
// @ is an alias to /src
import todoList from '@/components/todoList.vue'
import setUserForm from '@/components/setUserForm.vue'

export default {
  name: 'Home',
  components: {
    todoList,setUserForm
  },
  data(){
    return{
      'isUserSet': this.$store.state.isUserSet
    }
  },
  methods:{
    isUserSetfunc(){
        this.isUserSet = true
    },
    logMeOut(){
      this.isUserSet = false     
      this.$store.state.isUserSet = false
      this.$store.state.currentUser = null
    },

 
  }
  
  
}
</script>
