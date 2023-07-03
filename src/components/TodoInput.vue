<template>
  <div class="flex md:w-1/2">
    <input
      type="text"
      name="todo-titlte"
      placeholder="Type your todo task"
      v-model="newTodo"
      class="block w-full rounded-md mr-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    <button
      type="submit"
      @click="addTodo"
      class="rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Add
    </button>
  </div>
</template>

sc
<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "@/stores/todos";

const store = useTodoStore();

const newTodo = ref("");
const addTodo = () => {
  if (newTodo.value.length) {
    store.addTodo(newTodo.value);
    newTodo.value = "";
  }
};
</script>
