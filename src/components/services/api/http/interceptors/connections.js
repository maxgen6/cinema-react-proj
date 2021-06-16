const connections = (instance) => {
  instance.interceptors.response.use(null, (err) => {
    if (err.message === 'Connection terminated unexpectedly') {
      return instance(err.config)
    }
    return Promise.reject(err)
  })
}

export default connections