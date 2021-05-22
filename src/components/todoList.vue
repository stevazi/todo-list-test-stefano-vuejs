<template>
    <div class="container">
        <div>
            benvenuto {{users[currentUserId].name}}
        </div>
        <div class="input-div">
            <input type="text" class="input" v-model="newTodoTitle">
            <button @click="createTodo()">Save
            </button>
        </div>

        <div v-for="todo, index in todos" :key="index" class="todo-item" >
           <span>{{todo.title}}</span> 
           <div class="delete-item" @click="deleteItem(index)" >&times;</div><span>added by {{username(todo)}} </span>
        </div>
        <div @click="logout">Logout</div>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            'todos': this.$store.state.todos,
            'users':this.$store.state.users,
            'currentUserId': this.$store.state.currentUser,
            'newTodoTitle': ''
        }
    },
    props:{
        
    },
    computed:{
    },
    watch:{
    },
    methods:{
        logout(){
            this.$emit('logoutEvent')
        },
        deleteItem(index){
            this.$store.state.todos.splice(index, 1)
        },
        createTodo(){
            if(this.newTodoTitle == ''){
                alert('title ust not be empty')
                return
            } else {
                var id = this.$store.state.lastTodoId ++
                this.$store.state.todos.push({id: id, title: this.newTodoTitle, user_id:this.currentUserId})
                this.newTodoTitle = ''
            }
        },

        username(todo){
            console.log(todo)
            var user = this.users.find((item => item.id == todo.user_id))
            console.log(user)
            return user.name
        }
    }
}
</script>

<style>
.container{
    margin: 50px ;
    margin-left: 33%;
    margin-right: 33%;
    width: auto;
    height: 1000px;
    align-items: center ;
    
}
.input{
    margin-top:20px;
    width: 100%;
    height: 50px;
    font-size: 25px;
}

.todo-item{
    font-size: 25px;
    text-align: left;
    border: 1px solid;
    margin: 10px;
    border-radius: 10px;

}

.delete-item{
    text-align: right;
    display: inline;
    margin-left:100px;
}
button.input-div{
    display: inline;
}
</style>