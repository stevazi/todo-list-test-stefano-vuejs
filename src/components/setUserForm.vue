<template>
    <div>
       Insert your name:

        <input type="text" v-model="username" @keyup.enter="checkUser">
    </div>

</template>

<script>
export default {
    data(){
        
        return {
        'username':'',
        'users': this.$store.state.users 
    }
    },
    methods:{
        isExistentUser(){
            var index = this.$store.state.users.findIndex((item) => item.name == this.username)
            console.log(index)
            if(index != -1){
                   return {
                       state: true,
                       id: index
                   } 
            } else{
                  return {
                state: false, index: index
            }
            }

          
        },
        checkUser(){
            console.log(this.isExistentUser())
            if (this.isExistentUser().state === true){

                this.$store.state.isUserSet = true
                this.$emit('isUserSetEvent')
                this.$store.state.currentUser = this.isExistentUser().id
            } else{
                var idGenerator = this.$store.state.lastUserId ++
                
                console.log(this.username, idGenerator)
                alert('Welcome dear new User')

                this.$store.state.users.push({id: idGenerator, name : this.username})
                this.$store.state.currentUser = this.isExistentUser().id
                this.$emit('isUserSetEvent')

                
            }
        }
    }
}
</script>

<style>

</style>