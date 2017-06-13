<script>

import {createTask, getTodoTasks, getDoneTasks, crossTask} from '@/api/tasks'
  export default {
    name: 'todos',
    data () {
      return {
        todoInput: '',
        todoItems: [],
        doneItems: [],
        api_key: 'b2306b4eb272a2956e873591b392f9ff'
      }
    },
    methods: {
      // Handle adding a new todo item
      addTodo () {
      createTask(this.todoInput)
      .then((res) => {
        console.log(res.status)
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
      this.todoItems = null
      this.todoItems = []
      // Get current tasks that are uncompleted
      getTodoTasks()
      .then((res) => {
        // reversing the array to show newest first
        this.todoItems = res.data.reverse()
      }).catch((err) => {
        console.log(err)
      })
      // Get completed tasks
      getDoneTasks()
      .then((res) => {
        // reversing the array to show newest first
        this.doneItems = res.data.reverse()
      }).catch((err) => {
        console.log(err)
      })
    },
    // Handle put request to change status
    markDone (id) {
      crossTask(id)
      .then((res) => {
        this.refreshTodos()
      })
      .catch((err) => {
        console.log(err)
      })
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
          this.$toast('Invalid token! Please sign in!', {
            horizontalPosition: 'center',
            className: 'toast',
            duration: 2000
          })
        }
      })
    }
  }
</script>

<template lang="pug" src="@/templates/todos.pug"></template>
