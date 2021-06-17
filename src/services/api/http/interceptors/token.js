const token = (instance) => {
  const JWTToken = 'Wookie2019'

  if (JWTToken) {
    instance.defaults.headers['Authorization'] = `Bearer ${JWTToken}`
  }
}

export default token