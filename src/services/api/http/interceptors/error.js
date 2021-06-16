const error = (instance) => {
  instance.interceptors.response.use(null, (err) => {
    console.error(error.response.data.message)

    return Promise.reject(error)
  })
}

export default error