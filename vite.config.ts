import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/cliente/js/main.jsx', 
                //'resources/cliente/AppCliente.jsx',
                'resources/admin/js/main.jsx',
                //'resources/admin/AppAdmin.jsx'
            ],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    build: {
        manifest: 'manifest.json',
        outDir: 'public/build',
        emptyOutDir: true,
    },
    
    // CONFIGURACIÓN CLAVE PARA HTTPS
    base: process.env.NODE_ENV === 'production' ? '/build/' : '/',
    publicDir: false,
    
    // Configuración del servidor para forzar HTTPS
    server: {
        hmr: process.env.NODE_ENV === 'development' ? {
            host: 'localhost',
            protocol: 'ws'
        } : undefined,
    },

});
