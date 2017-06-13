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
          localStorage.setItem('name', res.user.name)
          // In case of success, go to login page
          this.$router.push('/todos')
          this.$toast(`<i class="fa fa-smile-o"></i>User created successfully. You've been signed in`, {
            horizontalPosition: 'center',
            className: 'toast-success',
            duration: 4000
          })
        } else {
          // Did not create user
          this.$toast(`<i class="fa fa-frown-o"></i>Could not create user, please try again with different credentials`, {
            horizontalPosition: 'center',
            className: 'toast-danger',
            duration: 4000
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
