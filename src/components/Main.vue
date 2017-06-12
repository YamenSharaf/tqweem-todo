<script>
import axios from 'axios'
import qs from 'qs'
  export default {
    name: 'main',
    data () {
      return {
        todoInput: '',
        todoItems: ['Have breakfast', 'Have lunch', 'Have dinner'],
        api_key: 'b2306b4eb272a2956e873591b392f9ff'
      }
    },
    methods: {
      addTodo () {
        const token = localStorage.getItem('token')
        axios.post('http://pilot.tqweem.com/api/task/create', qs.stringify({ 'title': this.todoInput, 'api_key': this.api_key }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json', 'Authorization': 'Bearer: ' + token },
      data: {
        title: this.todoInput
      }
       })
      .then(
        (response) => console.log(response.data)
      ).catch(
        (error) => console.log(error)
      )
        this.todoInput = ''
      }
    },
    computed: {
      todoCount () {
        return this.todoItems.length
      }
    }
  }
</script>

<template lang="pug" src="@/templates/main.pug"></template>
