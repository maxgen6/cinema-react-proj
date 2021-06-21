import axios from "axios";

import {
  log,
  connections,
  error,
  token
} from './interceptors'

const instance = axios.create({
  baseURL: `https://wookie.codesubmit.io`,
  headers: {
    'Content-Type': 'application/json'
  },
  data: {},
  params: {},
  timeout: 180000
})

log(instance)
connections(instance)
error(instance)
token(instance)

export default instance