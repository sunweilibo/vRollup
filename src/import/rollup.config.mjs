import path from 'path';
import { fileURLToPath } from 'url';
import clear from 'rollup-plugin-clear'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const getAbsPath = (name) => path.resolve(__dirname, name)
const outputDir = getAbsPath('output')
// @ts-check
/** @type {import('rollup/dist/rollup').RollupOptions} */
const options = {
  input: path.resolve(__dirname, './main.js'),
  output: {
    dir: outputDir,
  },
  plugins: [
    clear({
      targets: [outputDir]
    }),
    nodeResolve(),
    commonjs({
      strictRequires: true
    })
  ]
}

export default options