import { defineConfig } from 'vite';
import statamic from '@statamic/cms/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    plugins: [
        statamic(),
        tailwindcss(),
    ],
    build: {
        outDir: 'resources/dist',
        emptyOutDir: true,
        manifest: true,
        sourcemap: false,
        minify: false,
        rollupOptions: {
            input: {
                cp: 'resources/js/cp.js',
            },
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'css/[name][extname]';
                    }
                    return 'assets/[name][extname]';
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@ui': '@statamic/cms/ui',
        },
    },
});
