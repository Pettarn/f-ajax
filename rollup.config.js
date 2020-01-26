import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
    input: "./src/index.js",
    output: {
        file: './dist/FAjax.umd.js',
        name: 'FAjax',
        format: 'umd'
    },
    plugin: [
        babel({
            exclude: 'node_modules',
        }),
        commonjs()
    ]
}