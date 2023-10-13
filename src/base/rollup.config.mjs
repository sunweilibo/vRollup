import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const getAbsPath = (name) => path.resolve(__dirname, name)

// @ts-check
/** @type {import('rollup/dist/rollup').RollupOptions} */
const options = {
  input: path.resolve(__dirname, './main.js'),
  output: {
    file: getAbsPath('build/bundle.js'),
  }
}

export default options