import http from './http'

export const get = () => {
  return http({
    url: '',
    method: 'GET',
  })
}

export const getById = id => {
  return http({
    url: `/${id}`,
    method: 'GET',
  })
}

export const searchById = id => {
  return http({
    url: `?q=${id}`,
    method: 'GET',
  })
}