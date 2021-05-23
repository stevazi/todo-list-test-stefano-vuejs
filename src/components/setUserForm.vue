<template>
<section class="login-clean">
        <div>
            <h2 class="visually-hidden">Insert your name</h2>
            <div class="illustration"><i class="icon ion-ios-navigate"></i></div>
            <div class="mb-3"><input class="form-control" type="text" placeholder="name" v-model="username" @keyup.enter="checkUser"></div>
            <div class="mb-3"></div>
            <div class="mb-3"><button class="btn btn-primary d-block w-100" @click="checkUser">Log In</button></div>
        </div>
    </section>


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
 .login-clean {
    background: #f1f7fc;
    padding: 80px 0;
}

.login-clean  {
    max-width: 320px;
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 40px;
    border-radius: 4px;
    color: #505e6c;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}

.login-clean .illustration {
    text-align: center;
    padding: 0 0 20px;
    font-size: 100px;
    color: rgb(244, 71, 107);
}

.login-clean  .form-control {
    background: #f7f9fc;
    border: none;
    border-bottom: 1px solid #dfe7f1;
    border-radius: 0;
    box-shadow: none;
    outline: none;
    color: inherit;
    text-indent: 8px;
    height: 42px;
}

.login-clean  .btn-primary {
    background: #f4476b;
    border: none;
    border-radius: 4px;
    padding: 11px;
    box-shadow: none;
    margin-top: 26px;
    text-shadow: none;
    outline: none !important;
}

.login-clean  .btn-primary:hover,
.login-clean  .btn-primary:active {
    background: #eb3b60;
}

.login-clean  .btn-primary:active {
    transform: translateY(1px);
}

.login-clean  .forgot {
    display: block;
    text-align: center;
    font-size: 12px;
    color: #6f7a85;
    opacity: 0.9;
    text-decoration: none;
}

.login-clean .forgot:hover,
.login-clean  .forgot:active {
    opacity: 1;
    text-decoration: none;
}
</style>