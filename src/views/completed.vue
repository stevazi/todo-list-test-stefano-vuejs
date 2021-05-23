<template>
      <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<div v-if="isUserSet">
    FILTRA PER NOME
        <select v-model="selecteduser" name="personFilter" id="" >
            <option :value="user.id" v-for="user, index in users" :key="index" >{{user.name}}</option>
        </select>
    FILTRA PER CONTENUTO
        <input type="text" v-model="textFilter" @keyup.enter="filterText">

        </div>

        <todoList v-if="isUserSet" :todosFiltered="todosFiltered" @logoutEvent="logMeOut" :showCheckbox="showCheckbox" :isViewLogout="isViewLogout" :showInsertNew="showInsertNew"></todoList>
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
            'showCheckBox': false,
            'personFilter':'',
            'users': this.$store.state.users,
            'selecteduser': null,
            'textFilter': '',
            'isViewLogout':false,
            'showInsertNew':false
        }
    },
    props:{

    },
    computed:{
        todosFiltered(){
            var completed = this.$store.state.todos.filter(todo => todo.isDone)
            if (this.selecteduser != null ){
                return completed.filter(todo => todo.user_id === this.selecteduser)
            } else if(this.textFilter != '') {
                var filtered = []
                var item
                for(item of completed){
                    console.log(item)
                    if(item.title.includes(this.textFilter)){
                        filtered.push(item)
                    }
                }
                return filtered
            }
            else{
                return completed
            }
        

                  
    }},
        methods:{

            logMeOut(){
      this.isUserSet = false     
      this.$store.state.isUserSet = false
      this.$store.state.currentUser = null
    },
    }

}
</script>