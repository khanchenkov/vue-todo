<template>
  <li class="flex justify-between mb-2">
    <div class="flex w-full mr-2">
      <input
        name="todo"
        type="checkbox"
        :checked="props.todo.isDone"
        @click="store.toggleIsDone(props.todo.id)"
        :disabled="isEditing"
        class="h-6 w-6 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500 cursor-pointer mr-2"
      />
      <input
        type="text"
        v-if="isEditing"
        v-model="newTitle"
        class="block w-full h-6 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
      />
      <p
        :class="[props.todo.isDone ? 'line-through text-gray-400' : '']"
        v-else
      >
        {{ props.todo.title }}
      </p>
    </div>
    <div class="flex">
      <button
        type="button"
        @click="setIsEditing()"
        :class="[
          isEditing
            ? 'bg-amber-500 text-white ring-white hover:bg-white hover:text-amber-500 hover:ring-amber-5500'
            : '',
        ]"
        class="inline-flex items-center rounded-md bg-white p-1 text-sm font-semiboldshadow-sm ring-1 ring-inset hover:ring-amber-500 mr-2 hover:text-amber-500 text-gray-400 ring-gray-400"
      >
        <CheckIcon class="h-4 w-4" v-if="isEditing" />
        <PencilIcon class="h-4 w-4" v-else />
      </button>

      <button
        type="button"
        class="inline-flex items-center rounded-md bg-white p-1 text-sm font-semibold text-gray-400 ring-gray-400 shadow-sm ring-1 ring-inset hover:ring-red-500 mr-2 hover:text-red-500"
        @click="store.removeTodo(props.todo.id)"
      >
        <XMarkIcon class="h-4 w-4" />
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PencilIcon, XMarkIcon, CheckIcon } from "@heroicons/vue/24/outline";
import { defineProps } from "vue";
import { useTodoStore } from "@/stores/todos";

const props = defineProps(["todo"]);
const store = useTodoStore();

const isEditing = ref(false);
const newTitle = ref(props.todo.title);

const setIsEditing = () => {
  isEditing.value = !isEditing.value;
  console.log(props.todo.id, newTitle.value);
  store.updateTodo(props.todo.id, newTitle.value);
};
</script>
