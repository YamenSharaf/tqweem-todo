<script>
export default {
  data () {
    return {
      animate: true
    }
  },
  methods: {
    goToLogin () {
      this.$router.push('/login')
    },
    goToRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<template lang="pug" src="@/templates/home.pug" ></template>
