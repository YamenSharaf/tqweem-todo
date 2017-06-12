<script>
import Login from './components/Login'
import Register from './components/Register'
import Main from './components/Main'
export default {
  name: 'app',
  components: {
    Login, Register, Main
  }
}
</script>

<template lang="pug" src="./templates/layout.pug"></template>
<style lang="sass" src="./styles/app.sass"></style>
