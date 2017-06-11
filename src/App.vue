<template lang="pug" src="./templates/layout.pug" > 
  <div id="app">
  </div>
</template>

<script>
import Login from './components/Login'
import Register from './components/Register'
export default {
  name: 'app',
  components: {
    Login, Register
  }
}
</script>

<style lang="sass" src="./styles/app.sass">

</style>
