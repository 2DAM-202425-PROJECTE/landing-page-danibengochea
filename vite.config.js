import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/landing-page-danibengochea/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                projects: resolve(__dirname, 'idiomes.html'),
                projects: resolve(__dirname, 'programacio.html'),
                projects: resolve(__dirname, 'login.html'),
            },
        },
    },
})
