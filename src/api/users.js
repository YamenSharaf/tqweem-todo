// This file contains the code for API calls for user management

// Libraries to handle API calls
import axios from 'axios'
import qs from 'qs'

// Global constants
const apiKey = 'b2306b4eb272a2956e873591b392f9ff'

// Handle sign-up
export function signUp (username, email, password) {
  // API URL
  const url = 'http://pilot.tqweem.com/api/register'
  // POST //Params: username, email, password, API key
    return axios.post(url, qs.stringify({ 'name': username, 'email': email, 'password': password, 'api_key': apiKey }),
     {
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*'
      }
       })
       .then(
        (response) => response.data
      ).catch(
        (error) => error
      )
}
// Handle sign-up
export function signIn (email, password) {
  // API URL
  const url = 'http://pilot.tqweem.com/api/login'
  // POST //Params: username, password, API key
    return axios.post(url, qs.stringify({ 'email': email, 'password': password, 'api_key': apiKey }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' }
       })
       .then(
        (response) => {
          // Grabbing unique JWT
          const token = response.data.token
          // Keeping the token in local storage for later use
          localStorage.setItem('token', token)
          return response
        }
      ).catch(
        (error) => error
      )
}
