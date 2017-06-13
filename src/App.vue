<script>
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Main from './components/Main'
export default {
  name: 'app',
  data () {
    return {
      user: ''
    }
  },
  methods: {
    getUser () {
      this.user = localStorage.getItem('name')
      console.log(this.user)
    },
    logOut () {
      localStorage.setItem('name', '')
      localStorage.setItem('token', '')
      this.user = ''
      this.$router.push('/')
    }
  },
  beforeUpdate () {
    this.getUser()
  },
  beforeCreate () {
    this.getUser()
  },
  components: {
    Home, Login, Register, Main
  }
}
</script>

<template lang="pug" src="./templates/layout.pug"></template>
<style lang="sass" src="./styles/app.sass"></style>
