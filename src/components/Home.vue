<script>
export default {
  data () {
    return {
      animate: true
    }
  },
  methods: {
    // Redirect to login page
    goToLogin () {
      this.$router.push('/login')
    },
    // Redirect to registration page
    goToRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<template lang="pug" src="@/templates/home.pug" ></template>
