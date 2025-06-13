# Chord Finder App

Chord Finder es un buscador de acordes que utiliza [Chords API](https://chords.alday.dev) para permitir al usuario buscar listados de acordes y filtrarlos por nota y tipo, así como manejar la paginación.

La App está construida a través de la metodología TDD (Test Driven Development), basada en crear la aplicación partiendo de tests.

## Sprints y Updates

### feature/home

* Configuración de axios y tanstack query
  - npm install axios
  - npm install @tanstack/react-query
* Creación del test del home que valide la petición a la API
  - Debe mockear axios, la petición con React Query y el resultado

### feature/header

* Creación del componente "Footer", que tendrá su propio test
* Trabajo con los estilos de esta sección (responsive, mobile first)

### feature/header

* Creación del componente "Logo", que tendrá su propio test
* Creación del componente "Header", con su propio test
* Trabajo con los estilos de esta sección (responsive, mobile first)

### feature/structure

* Instalar react router dom + types
  - npm install react-router-dom
  - npm install -D @types/react-router-dom
* Crear archivo con rutas y directorios y ficheros iniales (pages, layout, components)
* Creación del layout global inicial

### Initial commit

* Inicialización de React (TS) + SWC con Vite
* Limpieza del proyecto inicial
* Instalación de los @types de node
  - npm install --save-dev @types/node
* Configuración de alias "@ = src" ===> En todos los tsconfig.json y vite.config.ts
* Configuración del eslint:
  - npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-import-resolver-typescript eslint-plugin-import
  - Esto instala:
    - ESLint y su parser para TypeScript
    - Plugin para TypeScript
    - Plugin para React
    - Plugin para manejar importaciones y resolver alias de TypeScript
* Instalación de vitest:
  - npm install -D vitest
* Configuración de vitest
* Instalación de React Testing Library y otras funcionalidades
  - npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom





