import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/landing-page-danibengochea/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                idiomes: resolve(__dirname, 'idiomes.html'),
                programacio: resolve(__dirname, 'programacio.html'),
                login: resolve(__dirname, 'login.html'),
            },
        },
    },
})
