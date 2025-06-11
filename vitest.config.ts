import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
    plugins: [react()], // 1. Plugins que usaremos, React en este caso
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"), // 2. Alias '@' para importar desde la carpeta src sin ../../..
        },
    },
    test: {
        globals: true, // 3. Permite usar funciones globales como 'describe', 'it', 'expect' sin importarlas en cada archivo de test
        environment: "jsdom", // 4. Entorno para tests: 'jsdom' simula un navegador (necesario para React y DOM)
        setupFiles: "./src/setupTests.ts", // 5. Archivo que corre antes de los tests para configurar cosas globales (opcional)
        include: ["src/**/*.{test,spec}.{ts,tsx}"], // 6. Qué archivos serán considerados tests, aquí los que terminan en .test.ts(x) o .spec.ts(x)
    },
});
