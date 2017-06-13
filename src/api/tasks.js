// This file contains the code for API calls for task management

// Libraries to handle API calls
import axios from 'axios'
import qs from 'qs'

// Global constants
const apiKey = 'b2306b4eb272a2956e873591b392f9ff'
const token = localStorage.getItem('token')

// Creating tasks
export function createTask (task) {
  // API URL
  const url = 'http://pilot.tqweem.com/api/task/create'
  // POST //Params: Title, API Key
  return axios.post(url, qs.stringify({ 'title': task, 'api_key': apiKey }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json', 'Authorization': 'Bearer: ' + token }
       })
       .then(
         // Return results
        (response) => response.data
      ).catch(
        (error) => error
      )
}

// Getting current uncompleted tasks
export function getTodoTasks () {
  // API URL
  const url = 'http://pilot.tqweem.com/api/task/todo?api_key=b2306b4eb272a2956e873591b392f9ff'
  // GET // Params: API key
  return axios.get(url,
      { headers: { 'Authorization': 'Bearer: ' + token }
       })
       .then(
        (response) => response
      ).catch(
        (error) => error
      )
}

// Getting current completed tasks
export function getDoneTasks () {
  // API URL
  const url = 'http://pilot.tqweem.com/api/task/done?api_key=b2306b4eb272a2956e873591b392f9ff'
  // GET // Params: API key
  return axios.get(url,
      { headers: { 'Authorization': 'Bearer: ' + token }
       })
       .then(
        (response) => response.data
      ).catch(
        (error) => error
      )
}

// Marking tasks as read
export function crossTask (id) {
  // API URL
  const url = `http://pilot.tqweem.com/api/task/${id}?api_key=b2306b4eb272a2956e873591b392f9ff`
  // PUT // Params: Task ID, API key
  return axios.put(url, qs.stringify({ 'api_key': apiKey }),
      { headers: { 'Accept': 'application/json', 'Authorization': 'Bearer: ' + token }
       })
       .then(
        (response) => response
      ).catch(
        (error) => error
      )
}
