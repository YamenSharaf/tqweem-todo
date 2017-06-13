<script>

import {createTask, getTodoTasks, getDoneTasks, crossTask} from '@/api/tasks'
  export default {
    name: 'main',
    data () {
      return {
        todoInput: '',
        todoItems: [],
        doneItems: [],
        api_key: 'b2306b4eb272a2956e873591b392f9ff'
      }
    },
    methods: {
      addTodo () {
      createTask(this.todoInput)
      .then((res) => {
        console.log(res.status)
        this.refreshTodos()
      })
      .catch((err) => {
          console.log(err)
        })
      this.todoInput = ''
    },
    refreshTodos () {
      this.todoItems = null
      this.todoItems = []
      getTodoTasks()
      .then((res) => {
        this.todoItems = res.data.reverse()
      }).catch((err) => {
        console.log(err)
      })
      getDoneTasks()
      .then((res) => {
        this.doneItems = res.reverse()
      }).catch((err) => {
        console.log(err)
      })
    },
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
      todoCount () {
        return this.todoItems.length
      },
      doneCount () {
        return this.doneItems.length
      }
    },
    beforeMount () {
      console.log('refreshed')
      getTodoTasks()
      .then((res) => {
        if (res.status === 200) {
          console.log('success')
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

<template lang="pug" src="@/templates/main.pug"></template>
