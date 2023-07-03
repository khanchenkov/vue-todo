import { defineStore } from "pinia";

interface todoInterface {
  id: number;
  title: string;
  isDone: boolean;
}

const STORAGE_KEY = "_todos";

export const useTodoStore = defineStore("Todos", {
  state: () => ({
    todos: [{ id: 1, title: "example todo", isDone: true }],
  }),
  getters: {
    generateId(): number {
      let rand = Math.random();
      while (this.todos.find((task) => task.id === rand)) {
        rand = Math.random();
      }
      return rand;
    },
    getLocalTodos(): todoInterface[] {
      this.todos = JSON.parse(localStorage[STORAGE_KEY] ?? "[]");
      return this.todos;
    },
  },
  actions: {
    addTodo(title: string) {
      this.todos.push({
        id: this.generateId,
        title,
        isDone: false,
      });
      this.syncLocally();
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter((todo: todoInterface) => todo.id !== id);
      this.syncLocally();
    },
    toggleIsDone(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
      this.syncLocally();
    },
    updateTodo(id: number, title: string) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
      }
      this.syncLocally();
    },
    syncLocally() {
      localStorage[STORAGE_KEY] = JSON.stringify(this.todos);
    },
  },
});
