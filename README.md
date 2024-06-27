# PROJECT 8 ROCK{THECODE}🤖🤖
-------------------------------------------
# REQUISITOS DEL PROYECTO: 
-
- Servidor con Express
- Conexión a una base de datos de Mongo Atlas mediante mongoose.
- Creación de dos modelos, ambos, con un campo que nos permita almacenar un archivo.
- Una semilla que suba datos a una de las colecciones.
- Una relación entre colecciones.
- CRUD completo de todas las colecciones.
- README.md con la documentación del proyecto, indicando los endpoints y que hace cada uno.
- Subida de archivos mediante cloudinary a ambas colecciones.
- Eliminación de archivos en cloudinary cuando se borra el dato en la BBDD.
- Intento de reutilización del storage de cloudinary cambiando la carpeta (puede estar comentado)
-----------------------------------------
# TECNOLOGICAS USADAS EN EL PROYECTO:  
-
- Node.js
- Express.js
- MongoDB
---------------------------------------------
# SCRIPTS: 
-
![image](https://github.com/RaulMF40/project8-apirestfiles/assets/144492714/5b1ba772-9ab1-4343-957b-55a13b347b3d)

-------------------------------------------
# DEPENDENCIAS DE DESARROLLADOR Y DEPENDENCIAS: 
-
![image](https://github.com/RaulMF40/project8-apirestfiles/assets/144492714/37906f0c-2c94-4184-8c85-10b8713fd9f7)

-------------------------------------------

# METODOS Y ENDPOINTS DE FILMSPROJECTS API #

1) ENDPOINTS DE FILMS.JS

| METHOD | ENDPOINT | DESCRIPTION |
| ------ | ------ | ------ |
| filmsRouter.get | /not-verified, [isAdmin], getFilmsAdmin | Obtiene películas no verificadas, requiere permisos de administrador.
| filmsRouter.get | /years/:year, getFilmsByYears | Obtiene películas por año, el año es un parámetro en la ruta.
| filmsRouter.get | /genre/:genre, getFilmsByGenre | Obtiene películas por género, el género es un parámetro en la ruta.
| filmsRouter.get | /:id, getFilmsById | Obtiene detalles de una película por su ID
| filmsRouter.get | /, getFilms | Obtiene todas las películas.
| filmsRouter.post | /, [isAuth], upload('films').single('imagen'), postFilms | Sube una nueva película, requiere autenticación y un archivo de imagen, y crea una carpeta en cloudinary con el nombre Films
| filmsRouter.put | /:id, [isAdmin], upload('films').single('imagen'), putFilms | Actualiza una película por su ID, requiere permisos de administrador y permite actualizar la imagen, y crea una carpeta en cloudinary con el nombre Films
| filmsRouter.delete | /:id, [isAdmin], deleteFilms | Elimina una película por su ID, requiere permisos de administrador.

2) ENDPOINTS DE PRODUCTORAS.JS

| METHOD | ENDPOINT | DESCRIPTION |
| ------ | ------ | ------ |
| productorasRouter.get | /:id, getProductorasById | Obtiene detalles de una productora por su ID.
| productorasRouter.get | /, getProductoras | Obtiene todas las productoras.
| productorasRouter.post | /', [isAdmin], upload('productoras').single('imagen'), postProductoras | Añade una nueva productora (requiere permisos de administrador), y tambien permite subir una imagen (imagen), y crea una carpeta en cloudinary con el nombre Productoras
| productorasRouter.put | /:id, [isAdmin], upload('productoras').single('imagen'), putProductoras | Actualiza los detalles de una productora por su ID (requiere permisos de administrador), y también permite actualizar la imagen (imagen), y crea una carpeta en cloudinary con el nombre Productoras
| productorasRouter.delete | /:id, [isAdmin], deleteProductoras | Elimina una productora por su ID (requiere permisos de administrador).

3) ENDPOINTS DE USERS.JS

| METHOD | ENDPOINT | DESCRIPTION |
| ------ | ------ | ------ |
| usersRoutes.get | /, [isAdmin], getUsers | Obtiene todos los usuarios (requiere permisos de administrador).
| usersRoutes.post | /register, upload('users').single('imagen'), register | Registra un nuevo usuario y permite subir una imagen y también una carpeta con el nombre Users
| usersRoutes.post | /login, login | Inicia sesión de usuario.
| usersRoutes.delete | /:id, [isAdmin], deleteUserOrImage | Elimina un usuario por su ID o su imagen (requiere permisos de administrador).

4) ENDPOINTS DE MAIN.JS

| METHOD | ENDPOINT | DESCRIPTION |
| ------ | ------ | ------ |
| mainRouter.use | /productoras, productorasRouter | Este enrutador gestiona las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) relacionadas con entidades de productoras, incluyendo endpoints para obtener, agregar, actualizar y eliminar productoras
| mainRouter.use | /films, filmsRouter | Este enrutador maneja las operaciones CRUD para entidades de películas, proporcionando endpoints para listar todas las películas, obtener detalles por ID, filtrar por año o género, así como agregar, actualizar y eliminar películas.
| mainRouter.use | /users, usersRoutes | Este enrutador se encarga de la gestión de usuarios, incluyendo endpoints para registro, autenticación, recuperación de contraseñas, y gestión de perfiles de usuario, utilizando métodos para crear, obtener, actualizar y eliminar usuarios.

--------------------------------------------------------
## AUTOR

Proyecto realizado por Raúl Moya
