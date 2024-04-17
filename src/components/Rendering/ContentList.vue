<script setup>
    import { ref } from 'vue';
                
    const todos = ref([
        { text: 'Todo 1', completed: false },
        { text: 'Todo 2', completed: false },
        { text: 'Todo 3', completed: false },
        { text: 'Todo 4', completed: false },
        { text: 'Todo 5', completed: false }
    ]);
                
    function deleteTodo(index) {
        todos.value.splice(index, 1);
    }
    
    function toggleTodoStatus(todo) {
        todo.completed = !todo.completed;
    }
</script>
                
<template>
    <div>
        <h1 class="text-2xl font-bold mb-4">Todo List</h1>
        <ul>
            <li v-for="(todo, index) in todos" :key="index" class="flex bg-white rounded-lg items-center justify-between mb-3 h-[4.5rem] pr-5 pl-5 py-4">
                <div class="space-x-2">
                    <input type="checkbox" v-model="todo.completed">
                    <span :class="{ 'completed': todo.completed }" @click="toggleTodoStatus(todo)">{{ todo.text }}</span>
                </div>
                <button @click="deleteTodo(index)" class="bg-red-600 rounded-xl px-3 py-2 text-white">Delete</button>
            </li>
        </ul>
    </div>
</template>


<style>
.completed {
    text-decoration: line-through;
    color: gray;
    cursor: pointer;
}
</style>
