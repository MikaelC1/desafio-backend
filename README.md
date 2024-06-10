# Proyecto de Backend

Este es un proyecto de backend que proporciona una API para gestionar usuarios y publicaciones.

## Configuración

1. **Instalación de dependencias**: Antes de ejecutar el servidor, asegúrate de instalar todas las dependencias ejecutando `npm install`.

2. **Variables de entorno**: El proyecto utiliza variables de entorno para la configuración. Asegúrate de crear un archivo `.env` en el directorio raíz del proyecto y proporcionar los siguientes valores:

    ```plaintext
    PORT=8080
    DB_USER=usuario
    DB_PASSWORD=contraseña
    DB_HOST=host.mongodb.com
    DB_NAME=nombre_basedatos
    JWT_SECRET=clave_secreta_jwt
    ```

3. **Ejecución del servidor**: Una vez que hayas instalado las dependencias y configurado las variables de entorno, puedes iniciar el servidor ejecutando `npm run dev`.

## Estructura del proyecto

El proyecto sigue una estructura de carpetas organizada de la siguiente manera:

- `src/`: Contiene todo el código fuente de la aplicación.
  - `middlewares/`: Middlewares para procesar las solicitudes antes de ser manejadas por las rutas.
  - `models/`: Modelos de datos que representan las entidades en la base de datos.
  - `routes/`: Rutas para definir los endpoints de la API.
  - `usecases/`: Casos de uso que encapsulan la lógica de negocio de la aplicación.
  - `lib/`: Utilidades y funciones auxiliares.
- `server.js`: Contiene la informacion del servidor.
- `index.js`: Inicia y conecta el servidor junto con la base de datos

## Endpoints de la API

La API proporciona los siguientes endpoints:

- **POST /auth/login**: Inicia sesión y devuelve un token JWT.
- **POST /users**: Crea un nuevo usuario.
- **GET /users/:id**: Obtiene la información de un usuario por su ID.
- **POST /posts**: Crea una nueva publicación.
- **GET /posts**: Obtiene todas las publicaciones, con opción de filtrado por título.
- **GET /posts/:id**: Obtiene la información de una publicación por su ID.
- **PATCH /posts/:id**: Actualiza una publicación existente.
- **DELETE /posts/:id**: Elimina una publicación existente.
