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
    // Handle user sign up
    registerUser () {
      signUp(this.username, this.email, this.password)
      .then((res) => {
        if (res.status === 'success') {
          // In case of success, go to login page
          this.$router.push('/login')
          this.$toast('User created. Sign in please', {
            horizontalPosition: 'center',
            className: 'toast',
            duration: 2000
          })
        } else {
          // Did not create user
          this.$toast('Could not create user, please try again with different credentials', {
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


<template lang="pug" src="@/templates/register.pug"></template>
