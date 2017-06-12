<script>
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
  computed: {
    getUser () {
      this.user = localStorage.getItem('name')
      console.log(this.user)
      return this.user
    }
  },
  components: {
    Login, Register, Main
  }
}
</script>

<template lang="pug" src="./templates/layout.pug"></template>
<style lang="sass" src="./styles/app.sass"></style>
