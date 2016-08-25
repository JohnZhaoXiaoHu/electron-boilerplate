import path from 'path'
import electron from 'electron'
import pkg from '../package.json'

const app = electron.app || electron.remote.app

const config = {}

// app info
config.app = {
  name: app.getName(),
  path: app.getAppPath(),
  version: pkg.version,
  updated: pkg.updated,
  description: pkg.description
}

// storage config
config.storage = {
  root: path.resolve(config.app.path, '..', 'data'),
  ext: '.dat',
  sign: `© ${new Date().getFullYear()} WEDN.NET`
}

// log4js appender config
const logFile = path.resolve(config.app.path, '..', pkg.name + '.log')
config.log4js = [
  { type: 'file', filename: logFile, category: 'main' },
  { type: 'file', filename: logFile, category: 'renderer' }
]

// server config
config.server = {
  address: '',
  port: 56831
}

export default Object.assign(config, {
  stamp_length: 8
})
