<script>
import {createTask, getTodoTasks, getDoneTasks, crossTask} from '@/api/tasks'
import DotLoader from 'vue-spinner/src/DotLoader.vue'
  export default {
    name: 'todos',
    data () {
      return {
        todoInput: '',
        todoItems: [],
        doneItems: [],
        api_key: 'b2306b4eb272a2956e873591b392f9ff',
        color: '#8BC34A',
        loadingTodo: true,
        loadingDone: true
      }
    },
    methods: {
      // Handle adding a new todo item
      addTodo () {
        // Validate if user inputs empty string
        if (this.todoInput === '') {
          this.$toast(`<i class="fa fa-meh-o"></i>Please enter your text first`, {
            horizontalPosition: 'center',
            className: 'toast-info',
            duration: 4000
          })
        }
      this.todoItems = []
      this.loadingTodo = true
      createTask(this.todoInput)
      .then((res) => {
        if (res.status === 'success') {
          this.loadingTodo = false
          this.$toast(`<i class="fa fa-smile-o"></i>Item added`, {
            horizontalPosition: 'center',
            className: 'toast-success',
            duration: 1000
          })
        }
        // Refresh list afterwards
        this.refreshTodos()
      })
      .catch((err) => {
          console.log(err)
        })
      this.todoInput = ''
    },
    // Whenever a list-refresh is needed
    refreshTodos () {
      // Get current tasks that are uncompleted
      getTodoTasks()
      .then((res) => {
        if (res.data.length === 0) {
          setTimeout(() => {
            this.$toast(`<i class="fa fa-smile-o"></i>You don't have any items. Let's get to work!`, {
            horizontalPosition: 'center',
            className: 'toast-info',
            duration: 4000
          })
          }, 1500)
        }
        this.loadingTodo = false
        // reversing the array to show newest first
        this.todoItems = res.data.reverse()
      }).catch((err) => {
        console.log(err)
      })
      // Get completed tasks
      getDoneTasks()
      .then((res) => {
        this.loadingDone = false
        // reversing the array to show newest first
        this.doneItems = res.data.reverse()
      }).catch((err) => {
        console.log(err)
      })
    },
    // Handle put request to change status
    markDone (id) {
      this.doneItems = []
      this.loadingDone = true
      crossTask(id)
      .then((res) => {
        this.loadingDone = false
        this.refreshTodos()
      })
      .catch((err) => {
        console.log(err)
      })
    },
    keenAlert () {
      alert('me here')
    },
    openModal (ref) {
      this.$refs[ref].open()
    },
    closeModal (ref) {
        this.$refs[ref].close()
    }
    },
    computed: {
      // Number of todos
      todoCount () {
        return this.todoItems.length
      },
      // Number of done items
      doneCount () {
        return this.doneItems.length
      }
    },
    beforeMount () {
      getTodoTasks()
      .then((res) => {
        if (res.status === 200) {
          this.refreshTodos()
        } else {
          this.$router.push('/login')
          this.$toast(`<i class="fa fa-frown-o"></i>Invalid token! Please sign in!`, {
            horizontalPosition: 'center',
            className: 'toast-danger',
            duration: 5000
          })
        }
      })
    },
  components: {
    DotLoader
  }
  }
</script>

<template lang="pug" src="@/templates/todos.pug"></template>
