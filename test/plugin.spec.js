import mustache from '../src'
import {rollup} from 'rollup'
import commonjs from 'rollup-plugin-commonjs'
import temp from 'temp'
import path from 'path'

const FIXTURES = path.resolve(__dirname, 'fixtures')

temp.track()

describe('rollup-plugin-mustache', function () {
  it('compiles and runs', async function () {
    const {path: dest} = temp.openSync({suffix: '.js'})
    const rollupConfig = {
      entry: path.join(FIXTURES, 'entry.js'),
      plugins: [
        mustache({
          include: path.join(FIXTURES, '*.mustache')
        }),
        commonjs()
      ]
    }
    const bundle = await rollup(rollupConfig)
    await bundle.write({
      dest,
      format: 'cjs'
    })
    const result = require(dest)
    expect(result).to.equal('<p>Hi, John Doe</p>')
  })
})
