import typescript from "@rollup/plugin-typescript";
import url from '@rollup/plugin-url'
import commonjs from '@rollup/plugin-commonjs';
import ImportMetaGlob from 'rollup-plugin-import-meta-glob'
import resolve from '@rollup/plugin-node-resolve';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import jsx from 'acorn-jsx'
import path from 'node:path'

// import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

// import requireContext from 'rollup-plugin-require-context'; // ToDo：可能是坑，使用量少，且作者很久没维护了

export default {
  input: './src/index.tsx',
  // external: ['react'],
  output: {
    file: "./dist/index.js",
    format: "cjs",
    assetFileNames: '[name][extname]',
    manualChunks(id, {getModuleInfo}) {
      const match = /\/attributes\/(\w+)/.exec(id)
      if (match) {
        // console.log("🚀 ~ file: rollup.config.js:22 ~ manualChunks ~ id:", id)
        // console.log("🚀 ~ file: rollup.config.js:24 ~ manualChunks ~ match):", match)
      }
      if (id.includes('node_modules')) {
        console.log("🚀 ~ file: rollup.config.js:22 ~ manualChunks ~ id:", id)
      }
    },
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      jsx: "preserve"
    }),
    babel({ 
      presets: ['@babel/preset-react'], 
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx']  
    }),
    ImportMetaGlob(),
    url(),
    
  ],
  // external: ['lodash']
};
