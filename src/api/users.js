import axios from 'axios'
import qs from 'qs'
const apiKey = 'b2306b4eb272a2956e873591b392f9ff'

export function signUp (username, email, password) {
  const url = 'http://pilot.tqweem.com/api/register'
    return axios.post(url, qs.stringify({ 'name': username, 'email': email, 'password': password, 'api_key': apiKey }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' }
       })
       .then(
        (response) => response.data
      ).catch(
        (error) => error
      )
}

export function signIn (email, password) {
  const url = 'http://pilot.tqweem.com/api/login'
    return axios.post(url, qs.stringify({ 'email': email, 'password': password, 'api_key': apiKey }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' }
       })
       .then(
        (response) => {
          console.log(response)
          const token = response.data.token
          const base64Url = token.split('.')[1]
          const base64 = base64Url.replace('-', '+').replace('_', '/')
          console.log(JSON.parse(window.atob(base64)))
          localStorage.setItem('token', token)
          return base64
        }
      ).catch(
        (error) => error
      )
}
