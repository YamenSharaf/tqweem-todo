<script>
import jquery from 'jquery'
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
    registerUser () {
      var settings = {
  'async': true,
  'crossDomain': true,
  'url': 'http://pilot.tqweem.com/api/register',
  'method': 'POST',
  'headers': {
    'content-type': 'application/x-www-form-urlencoded',
    'accept': 'application/json'
  },
  'data': jquery.param({ name: this.username, email: this.email, password: this.password, api_key: this.api_key })
}

jquery.ajax(settings).done(function (response) {
  console.log(response)
})
    }
  }
}
</script>


<template lang="pug" src="./../templates/register.pug"  >
</template>
<style lang="sass" src="./../styles/app.sass">
</style>
