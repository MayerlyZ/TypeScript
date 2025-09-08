# TypeScript

Guía de inicio rápido y conceptos básicos de TypeScript.

## 1. Instalación

Antes de comenzar, asegúrate de tener instalado [Node.js](https://nodejs.org/) y npm.

Puedes instalar TypeScript globalmente en tu sistema usando npm:

```bash
npm install -g typescript
```

## 2. Inicialización de un Proyecto

1.  Navega hasta la carpeta donde deseas crear tu proyecto.
2.  Ejecuta el siguiente comando para crear un archivo `tsconfig.json`:

    ```bash
    tsc --init
    ```

El archivo `tsconfig.json` es fundamental para la configuración de tu proyecto, ya que le indica al compilador de TypeScript cómo debe procesar tus archivos.

### Configuraciones Importantes en `tsconfig.json`

Dentro de `tsconfig.json`, estas son algunas de las opciones más comunes:

-   `"target"`: Define la versión de JavaScript a la que se compilará tu código (ej. `"ES2016"`, `"ESNext"`).
-   `"module"`: Especifica el sistema de módulos a utilizar (ej. `"commonjs"`, `"ES2015"`).
-   `"strict"`: Activa un conjunto de comprobaciones de tipo estrictas para un código más robusto. Es muy recomendable mantenerlo en `true`.
-   `"outDir"`: Especifica el directorio donde se generarán los archivos JavaScript compilados (ej. `"./dist"`).
-   `"rootDir"`: Especifica el directorio raíz de los archivos de entrada TypeScript (ej. `"./src"`).

## 3. Tipos de Datos Básicos

TypeScript extiende JavaScript añadiendo tipos. Aquí tienes algunos ejemplos:

```typescript
let esActivo: boolean = true;
let total: number = 10;
let nombre: string = "Gemini";

// Arreglos
let numeros: number[] = [1, 2, 3];
let nombres: Array<string> = ["Juan", "Pedro"];
```

## 4. Compilación

1.  Crea un archivo con extensión `.ts`, por ejemplo, `index.ts`.
2.  Escribe tu código TypeScript.
3.  Compila tu código ejecutando `tsc` en la terminal. Si tienes un `tsconfig.json`, compilará todos los archivos del proyecto según la configuración.

    ```bash
    tsc
    ```

Esto generará los archivos `.js` correspondientes en el directorio de salida (`outDir`) que hayas configurado.