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
      // Handle sign-in
      signIn(this.email, this.password)
      .then((res) => {
        // If okay, go to home page
        if (res.status === 200) {
          localStorage.setItem('name', res.data.name)
          this.$router.push('/main')
        } else {
          // If not okay show error toast
          this.$toast('Invalid credentials. Please sign up', {
            horizontalPosition: 'center',
            className: 'toast',
            duration: 2000
          })
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