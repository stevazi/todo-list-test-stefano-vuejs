<template>
      <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
        <todoList v-if="isUserSet" :todosFiltered="todosFiltered" @logoutEvent="logMeOut" :showCheckbox="showCheckbox" :isViewLogout="isViewLogout"></todoList>
    <setUserForm v-else @isUserSetEvent = "isUserSetfunc()"  ></setUserForm>
            </div>
        
</template>
<script>

import todoList from '@/components/todoList.vue'
import setUserForm from '@/components/setUserForm.vue'


export default {
    components:{
        todoList,setUserForm
    }, 
    data(){
        return{
            'filerStatus' : 'completed',
            'todos': this.$store.state.todos,
            'isUserSet': this.$store.state.isUserSet,
            'showCheckbox': false,
            'isViewLogout': false
        }
    },
    props:{

    },
    computed:{
        todosFiltered(){
                  return this.$store.state.todos.filter(todo => !todo.isDone )
    }},
    methods:{

            logMeOut(){
      this.isUserSet = false     
      this.$store.state.isUserSet = false
      this.$store.state.currentUser = null
      window.Location("/")
    },
    }

}
</script>