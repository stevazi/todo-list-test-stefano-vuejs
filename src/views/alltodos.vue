<template>
    <home></home> 
    <todoList></todoList>
</template>
<script>
import home from '@/views/Home.vue'
import todoList from '@/components/todoList.vue'

export default {
    components:{
        home,todoList
    }, 
    
}
</script>