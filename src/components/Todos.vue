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
        if (this.todoInput === '') {
          this.$toast(`<i class="fa fa-meh-o"></i>Please enter your text first`, {
            horizontalPosition: 'center',
            className: 'toast-info',
            duration: 4000
          })
        }
      createTask(this.todoInput)
      .then((res) => {
        console.log(res)
        if (res.status === 'success') {
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
          this.$toast(`<i class="fa fa-smile-o"></i>You don't have any items. Let's get to work!`, {
            horizontalPosition: 'center',
            className: 'toast-info',
            duration: 4000
          })
        }
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
          this.$toast(`<i class="fa fa-frown-o"></i>Invalid token! Please sign in!`, {
            horizontalPosition: 'center',
            className: 'toast-danger',
            duration: 5000
          })
        }
      })
    }
  }
</script>

<template lang="pug" src="@/templates/todos.pug"></template>
