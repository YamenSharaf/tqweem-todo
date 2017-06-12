<script>
import {signIn} from '@/api/users'
export default {
  name: 'login',
  data () {
    return {
      api_key: 'b2306b4eb272a2956e873591b392f9ff',
      email: '',
      password: ''
    }
  },
  methods: {
    loginUser () {
      signIn(this.email, this.password)
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


<template lang="pug" src="@/templates/login.pug"></template>

