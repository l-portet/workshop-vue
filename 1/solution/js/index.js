new Vue({
  el: '#app',
  data: {
    todos: {
      active: [],
      completed: []
    },
    currentTodo: ''
  },
  methods: {
    addItem() {
      this.todos.active.push(this.currentTodo);
      this.currentTodo = '';
    },
    deleteItem(itemType, itemIndex) {
      Vue.set(this.todos[itemType], this.todos[itemType].splice(itemIndex, 1));
    },
    setDone(itemIndex) {
      let item = this.todos.active[itemIndex];

      Vue.set(this.todos.active, this.todos.active.splice(itemIndex, 1));
      this.todos.completed.push(item);
    },
    setUndone(itemIndex) {
      let item = this.todos.completed[itemIndex];

      Vue.set(this.todos.completed, this.todos.completed.splice(itemIndex, 1));
      this.todos.active.push(item);
    }
  }
});
