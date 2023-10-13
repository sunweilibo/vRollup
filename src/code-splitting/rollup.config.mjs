import path from 'path';
import { fileURLToPath } from 'url';
import clear from 'rollup-plugin-clear'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const getAbsPath = (name) => path.resolve(__dirname, name)
const outputDir = getAbsPath('build')
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
    })
  ]
}

export default options