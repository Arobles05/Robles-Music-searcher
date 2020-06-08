import roblesMusicServices from './robles-music'

const tracksService = {}

tracksService.search = function (q) {
  const type = 'track'

  return roblesMusicServices.get('/search', {
    params: { q: q, type: type }
  }).then(res => res.data)
}

tracksService.getByid = function (id) {
  return roblesMusicServices.get(`/tracks/${id}`).then(res => res.data)
}
export default tracksService
