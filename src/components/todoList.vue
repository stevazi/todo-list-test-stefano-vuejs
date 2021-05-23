<template>
    <div class="container">
        <div>
            benvenuto {{users[currentUserId].name}}
        </div>


        
        <div class="input-div" v-if="showInsertNew">
            <h1>Add New</h1>
            <input type="text" class="input" v-model="newTodoTitle" @keyup.enter="createTodo()">
            <button @click="createTodo()"  >Save
            </button>
        </div>

    <div v-for="todo, index in todosFiltered" :key="index" class="todo-item" >
        <ul class="list-group">
            <li class="list-group-item">
                <input v-if="showCheckbox" type="checkbox" :checked="isDoneCheck(todo)" @change="doneFunc(todo)">
                <span v-if="!todo.isEditing" @click="editMode(todo)">{{todo.title}}</span>
                <input v-else type="text" @keyup.enter="saveChange(index, todo)" v-model="editTitle">

                <span class="completer" v-if="isDoneCheck(todo)">                |       completed by {{usernameCompleter(todo)}}</span>
                <span class="delete">             added by {{username(todo)}} </span>
                
                <span class="delete" @click="deleteItem(index)" >&times;</span>
                
            </li>
        </ul>
        
    </div>
    <div v-if="isViewLogout" class="logout" @click="logout">Logout</div>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            
            'users':this.$store.state.users,
            'currentUserId': this.$store.state.currentUser,
            'newTodoTitle': '',
            'editCache': '',
            'editTitle': '',
            
        }
    },
    props:{
        'todosFiltered': {
            type:Object,
            required: true
        },
        'showCheckbox':{
            type:Boolean,
            required: true
        },
        'isViewLogout':{
            type:Boolean,
            required: true
        },
        'showInsertNew':{
            type: Boolean,
            required: true
        }
    },
    computed:{
    },
    watch:{
    },
    methods:{
        isDoneCheck(todoF){
            return this.$store.state.todos.find(todo => todo.id === todoF.id).isDone
        },

        doneFunc(todoF){
            
           var todo = this.$store.state.todos.find(todo => todo.id === todoF.id)
           if(!todo.isDone){
            this.$store.state.todos.find(todo => todo.id === todoF.id).isDone = true
            this.$store.state.todos.find(todo => todo.id === todoF.id).completedBy_id = this.currentUserId
           } else{
              this.$store.state.todos.find(todo => todo.id === todoF.id).isDone = false 
              this.$store.state.todos.find(todo => todo.id === todoF.id).completedBy_id = null
           }
            
            console.log(this.$store.state.todos.find(todo => todo.id === todoF.id))
            
            
        },

        editMode(todo){
            todo.isEditing = true
            this.editTitle = todo.title
        },

        saveChange(index, todo){
            if(this.editTitle === ''){
                alert('title should not be empty')
                todo.isEditing = false
            } else{
                this.$store.state.todos[index].title = this.editTitle
                todo.isEditing = false
            }
        },
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
                this.$store.state.todos.push({id: id, title: this.newTodoTitle, user_id:this.currentUserId, isEditing: false, isDone: false, 'completedBy_id': null})
                this.newTodoTitle = ''
            }
        },

        username(todo){
            var user = this.users.find((item => item.id == todo.user_id))
            return user.name
        },
        usernameCompleter(todo){
             var user = this.users.find((item => item.id == todo.completedBy_id))
            return user.name
        }
    }
}
</script>

<style>


.container{
    margin: 50px ;
    margin-left:10%;
    margin-right: 10%;
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

.logout{
    cursor: pointer;
}
.completer{
    text-align: right;
}

.user-item {
  padding: 10px;
  position: relative;
}

.user-item div.user-container {
  text-align: left;
  font: normal 14px sans-serif;
  background-color: #f4f8fa;
  border: 1px solid #dbe3e7;
  box-shadow: 0 2px 3px #dbe3e7;
  padding-right: 50px;
  overflow: hidden;
}

.user-item a.user-avatar {
  float: left;
  padding: 10px 15px;
}

.user-item p.user-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 19px 0 0;
}

.user-item p.user-name a {
  color: #5d6569;
  text-decoration: none;
  font-weight: bold;
}

.user-item p.user-name span {
  display: block;
  font-size: 11px;
  color: #808d93;
  padding-top: 4px;
}

.user-item a.user-delete {
  background-color: #de4a4a;
  border-radius: 50%;
  color: #fff;
  font-size: 10px;
  line-height: 23px;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 0;
  right: 0px;
  text-align: center;
  text-decoration: none;
}

.checkbox {
  margin-right: 20px;
}

.delete {
  float: right;
}
.input{
    margin-bottom: 20px;
}

ul.list-group {
    list-style-type: none;
}

</style>