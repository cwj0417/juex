import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs"

export default {
    entry: "./src/index.js",
    dest: "index.js",
    plugins: [
        resolve(),
        babel({
            exclude: "node_modules/**",
            presets: ["es2015-rollup"]
        }),
        commonjs({
            namedExports: {}
        })
    ],
    format: "umd",
    moduleName: "juex"
};
