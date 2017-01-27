import riot from 'rollup-plugin-riot'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import serve from 'rollup-plugin-serve'

import postcss from 'postcss'
import cssnext from 'postcss-cssnext'

export default {
  entry: 'src/index.js',
  dest: 'dist/bundle.js',
  plugins: [
    riot({
      style: 'cssnext',
      parsers: {
        css: {
          cssnext: function(tag, css) {
            css = css.replace(/:scope/g, ':root')
            css = postcss([cssnext]).process(css).css
            css = css.replace(/:root/g, ':scope')
            return css
          }
        }
      }
    }),
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
      port: 3000,
      historyApiFallback: true
    })
  ],
  format: 'iife'
}
