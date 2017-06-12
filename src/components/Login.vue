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
        console.log(res.status)
        if (res.status === 200) {
          localStorage.setItem('name', res.data.name)
          this.$router.push('/main')
        } else {
          alert('Invalid credentials. Please Register first')
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>


<template lang="pug" src="@/templates/login.pug"></template>

