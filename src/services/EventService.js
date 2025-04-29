import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://https://my-json-server.typicode.com/JoaoVictor2023/api-Composition',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
