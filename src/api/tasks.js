import axios from 'axios'
import qs from 'qs'
const apiKey = 'b2306b4eb272a2956e873591b392f9ff'
const token = localStorage.getItem('token')

export function createTask (task) {
  const url = 'http://pilot.tqweem.com/api/task/create'
  return axios.post(url, qs.stringify({ 'title': task, 'api_key': apiKey }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json', 'Authorization': 'Bearer: ' + token }
       })
       .then(
        (response) => response.data
      ).catch(
        (error) => error
      )
}

export function getTodoTasks () {
  const url = 'http://pilot.tqweem.com/api/task/todo?api_key=b2306b4eb272a2956e873591b392f9ff'
  return axios.get(url,
      { headers: { 'Authorization': 'Bearer: ' + token }
       })
       .then(
        (response) => response
      ).catch(
        (error) => error
      )
}

export function getDoneTasks () {
  const url = 'http://pilot.tqweem.com/api/task/done?api_key=b2306b4eb272a2956e873591b392f9ff'
  return axios.get(url,
      { headers: { 'Authorization': 'Bearer: ' + token }
       })
       .then(
        (response) => response.data
      ).catch(
        (error) => error
      )
}

export function crossTask (id) {
  const url = `http://pilot.tqweem.com/api/task/${id}?api_key=b2306b4eb272a2956e873591b392f9ff`
  return axios.put(url, qs.stringify({ 'api_key': apiKey }),
      { headers: { 'Accept': 'application/json', 'Authorization': 'Bearer: ' + token }
       })
       .then(
        (response) => response
      ).catch(
        (error) => error
      )
}
