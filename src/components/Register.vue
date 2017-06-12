<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'register',
  data () {
    return {
      api_key: 'b2306b4eb272a2956e873591b392f9ff',
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser () {
      axios.post('http://pilot.tqweem.com/api/register', qs.stringify({ 'name': this.username, 'email': this.email, 'password': this.password, 'api_key': this.api_key }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' }
       })
      .then(
        (response) => console.log(response)
      ).catch(
        (error) => console.log(error)
      )
    }
  }
}
</script>


<template lang="pug" src="@/templates/register.pug"></template>
