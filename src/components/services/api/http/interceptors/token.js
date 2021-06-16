import axios from "axios";

const token = (instance) => {
  const JWTToken = localStorage.getItem('token') || 'Wookie2019'

  if (JWTToken) {
    instance.defaults.headers['Authorization'] = `Bearer ${JWTToken}`
  }
}

export default token