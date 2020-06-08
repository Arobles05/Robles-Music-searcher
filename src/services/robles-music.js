import trae from 'trae'
import configService from './config'

const roblesMusicServices = trae.create({
  baseUrl: configService.apiUrl
})

export default roblesMusicServices
