<script>
// Loading child components into main component
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Todos from './components/Todos'
export default {
  name: 'app',
  data () {
    return {
      // Holds the user name for keeping a session
      user: ''
    }
  },
  methods: {
    // Get the user name from local storage and save is
    getUser () {
      this.user = localStorage.getItem('name')
    },
    logOut () {
      // Clear token and user then go home
      localStorage.setItem('name', '')
      this.user = ''
      localStorage.setItem('token', '')
      this.$router.push('/')
    },
    userRedirect () {
      if (this.user !== '' || undefined || null || false) {
        this.$router.push('/todos')
      } else {
        this.$router.push('/')
      }
    }
  },
  // Get user on component update
  beforeUpdate () {
    this.getUser()
  },
  beforeMount () {
    this.getUser()
    this.userRedirect()
  },
  components: {
    Home, Login, Register, Todos
  }
}
</script>

<template lang="pug" src="./templates/layout.pug"></template>
<style lang="sass" src="./styles/app.sass"></style>
