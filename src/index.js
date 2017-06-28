import {createFilter} from 'rollup-pluginutils'
import Hogan from 'hogan.js'

export default function (options = {}) {
  const filter = createFilter(options.include, options.exclude)
  const hoganKey = options.hoganKey || require.resolve('hogan.js')
  const preamble = `import Hogan from ${JSON.stringify(hoganKey)};\n`
  return {
    name: 'mustache',
    transform (template, id) {
      if (!filter(id)) {
        return null
      }
      const compiled = Hogan.compile(template, {asString: 1})
      const code = preamble + `export default new Hogan.Template(${compiled});`
      return {code, map: {mappings: ''}}
    }
  }
}
