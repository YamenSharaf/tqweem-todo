<script>
import {signUp} from '@/api/users'
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
      signUp(this.username, this.email, this.password)
      .then((res) => {
        console.log(res)
        .catch((err) => {
          console.log(err)
        })
      })
    }
  }
}
</script>


<template lang="pug" src="@/templates/register.pug"></template>
