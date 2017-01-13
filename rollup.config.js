import riot from 'rollup-plugin-riot'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import serve from 'rollup-plugin-serve'

export default {
  entry: 'src/index.js',
  dest: 'dist/bundle.js',
  plugins: [
    riot(),
    nodeResolve({
      jsnext: true
    }),
    commonjs(),
    buble({
      target: {
        chrome: 48,
        firefox: 44
      }
    }),
    serve({
      port: 3000
    })
  ],
  format: 'iife'
}
