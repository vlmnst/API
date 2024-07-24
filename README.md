# Proyecto de API y Ejercicios 🚀

Este repositorio está dividido en dos secciones principales: **API** y **Ejercicios**.

## Ejercicios 📚

En la carpeta `Ejercicios` se encuentran resueltos los problemas planteados previos al challenge, bases de datos, entre otros.

## API 🛠️

La carpeta `API` contiene una implementación completa de un CRUD para artículos, un sistema de autenticación y una ruta para crear usuarios y probar los endpoints mencionados.

### Configuración ⚙️

1. **Archivo .env**: Se proporciona un archivo `.env.template` como referencia. Debes crear tu propio archivo `.env` al descargar el repositorio.
2. **Instalación de dependencias**: Una vez situado en la carpeta `/API`, ejecuta el comando `npm i` para instalar todas las dependencias listadas en el `package.json`.

### Scripts 📜

Para correr el backend, contamos con los siguientes scripts en el `package.json`:

- `"build": Este script compila el código TypeScript en JavaScript. Úsalo antes de desplegar tu aplicación o cuando necesites generar los archivos compilados.
- `"start": Este script ejecuta el archivo compilado de la aplicación con Node.js. Úsalo para correr la aplicación en un entorno de producción.
- `"dev": Este script utiliza nodemon y ts-node para ejecutar la aplicación en modo desarrollo. Es ideal para el desarrollo, ya que reinicia automáticamente el servidor al detectar cambios en los archivos.


### Notas Importantes 📝

- No es necesario crear el esquema de la base de datos antes de ejecutar la aplicación, ya que esta lo creará automáticamente en caso de no existir.

¡Disfruta recorriendo este proyecto! 🎉
