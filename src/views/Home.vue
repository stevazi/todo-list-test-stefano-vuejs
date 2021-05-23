<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <todoList v-if="isUserSet" @logoutEvent="logMeOut" :todosFiltered="todosFiltered" :showCheckbox="showCheckbox" :isViewLogout="isViewLogout"></todoList>
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
      'isUserSet': this.$store.state.isUserSet,
      'filerStatus' : 'all',
      'todos' : this.$store.state.todos,
      'showCheckbox': true,
      'isViewLogout': true
    }
  },

  computed:{
      todosFiltered(){
                      if(this.filerStatus == 'all'){
                  return this.todos
              } else if(this.filerStatus == 'completed'){
                  return this.todos.filter(todo => todo.isDone )
              } else if(this.filfilerStatus =='active'){
                  return this.todos.filter(todo => !todo.isDone)
              }
              return this.todos
        },
  },
  methods:{
    isUserSetfunc(){
        this.$store.state.isUserSet = true
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
