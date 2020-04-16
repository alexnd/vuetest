import axios from 'axios'

export default(config) => {
  return axios.create({
    baseURL: config.apiUrl,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
