import http from './http'

export const get = () => {
  return http({
    url: '/movies',
    method: 'GET',
  })
}

export const getById = id => {
  return http({
    url: `/movies/${id}`,
    method: 'GET',
  })
}
export const getMoviesSearch = query => {
  return http({
    url: `/movies`,
    method: 'GET',
    params: {
      q: query,
    },
  })
}