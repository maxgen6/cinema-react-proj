const log = (instance) => {
  instance.interceptors.response.use(null, (err) => {
    let message;

    const { config, response } = err
    const regExp = /Error \d{3}: /;

    if (
      response &&
      response.data &&
      (response.data.errorMessage || '').match(regExp)
    ) {
      message = response.data.errorMessage.replace(regExp, '');
    } else if (config && response) {
      message = `${config.method.toUpperCase()} ${config.url} responded with
      status ${response.status}`;
    } else {
      message = err.message;
    }

    err.message = message
    console.error(`ERROR: ${message}`)

    return Promise.reject(err)
  })
}

export default log;