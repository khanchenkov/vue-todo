<template>
  <div class="mt-6 md:w-1/2">
    <ul>
      <TodoItem
        v-for="todo in store.getLocalTodos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/stores/todos";
import TodoItem from "./TodoItem.vue";
const store = useTodoStore();
</script>
