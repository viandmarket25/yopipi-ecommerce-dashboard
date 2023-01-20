import { fileURLToPath, URL } from "url";
//import vue from 'rollup-plugin-vue2';
import css from 'rollup-plugin-css-only';
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import nodePolyfills from "rollup-plugin-polyfill-node";
import requireTransform from "vite-plugin-require-transform";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
//import {NodeGlobalsPolyfillPlugin} from "@esbuild-plugins/node-globals-polyfill";
import GlobalsPolyfills from "@esbuild-plugins/node-globals-polyfill";
import NodeModulesPolyfills from "@esbuild-plugins/node-modules-polyfill";
import resolve from "rollup-plugin-node-resolve";




const MODE = process.env.NODE_ENV

export default defineConfig({
    plugins: [
          
        vue(),
        css(), MODE === 'development' ? nodePolyfills({
            include: [
                '*.js',
                'node_modules/**/*.js',
                new RegExp('node_modules/.vite/.*js')
            ],
        }) : '',
        GlobalsPolyfills({
            process: true,
            buffer: true,
        }), requireTransform({}),


        (() => ({
            name: "prod-vue-resolver",
            resolveId(id) {
                // dev mode vite resolves vue in other way
                // only in prod mode, `id === vue` is true
                if (id === "vue") {
                    return resolve(
                        __dirname,
                        "./node_modules/vue/dist/vue.runtime.esm-bundler.js"
                    );
                }
            },
        }))(),


    ],
    server: {
        port: 8082,
    },
    resolve: {
        alias: {
            process: "process/browser",
            "@": fileURLToPath(new URL("./src",
                import.meta.url)),
            "~@": fileURLToPath(new URL("./src",
                import.meta.url)),

            buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
            util: 'rollup-plugin-node-polyfills/polyfills/util',
            sys: 'util',
            events: 'rollup-plugin-node-polyfills/polyfills/events',
            stream: 'rollup-plugin-node-polyfills/polyfills/stream',
            path: 'rollup-plugin-node-polyfills/polyfills/path',
            querystring: 'rollup-plugin-node-polyfills/polyfills/qs',
            punycode: 'rollup-plugin-node-polyfills/polyfills/punycode',
            url: 'rollup-plugin-node-polyfills/polyfills/url',
            string_decoder: 'rollup-plugin-node-polyfills/polyfills/string-decoder',
            http: 'rollup-plugin-node-polyfills/polyfills/http',
            https: 'rollup-plugin-node-polyfills/polyfills/http',
            os: 'rollup-plugin-node-polyfills/polyfills/os',
            assert: 'rollup-plugin-node-polyfills/polyfills/assert',
            constants: 'rollup-plugin-node-polyfills/polyfills/constants',
            _stream_duplex: 'rollup-plugin-node-polyfills/polyfills/readable-stream/duplex',
            _stream_passthrough: 'rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough',
            _stream_readable: 'rollup-plugin-node-polyfills/polyfills/readable-stream/readable',
            _stream_writable: 'rollup-plugin-node-polyfills/polyfills/readable-stream/writable',
            _stream_transform: 'rollup-plugin-node-polyfills/polyfills/readable-stream/transform',
            timers: 'rollup-plugin-node-polyfills/polyfills/timers',
            console: 'rollup-plugin-node-polyfills/polyfills/console',
            vm: 'rollup-plugin-node-polyfills/polyfills/vm',
            zlib: 'rollup-plugin-node-polyfills/polyfills/zlib',
            tty: 'rollup-plugin-node-polyfills/polyfills/tty',
            domain: 'rollup-plugin-node-polyfills/polyfills/domain',
            //web3: '/node_modules/web3/dist/web3.min.js',
            //web3: '/node_modules/vue-metamask/node_modules/web3/dist/web3.min.js',
        },
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    },
    build: {
        target: "es2020",
        rollupOptions: {
            plugins: [
                // ↓ Needed for build
                rollupNodePolyFill(),
                nodePolyfills(),
                resolve(),
                //
            ]
        },
        // ↓ Needed for build
        commonjsOptions: {
            transformMixedEsModules: true
        }

    },
    optimizeDeps: {
        esbuildOptions: {
            // Node.js global to browser globalThis
            define: {
                global: 'globalThis'
            },
            // Enable esbuild polyfill plugins
            plugins: [
                NodeModulesPolyfills(),
                GlobalsPolyfills({
                    process: true,
                    buffer: true,
                }),
            ]
        }
    }
});
