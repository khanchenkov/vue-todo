<template>
  <div>
    <TodoInput />
  </div>
  <div>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";

export default defineComponent({
  name: "TodoView",
  components: {
    TodoInput,
    TodoList,
  },
});
</script>
