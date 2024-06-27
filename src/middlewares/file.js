const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')


/* Función para obtener el almacenamiento de Cloudinary con una carpeta dinámica
 @param {string} folderName - Nombre de la carpeta en Cloudinary
 @returns {CloudinaryStorage} - Instancia de almacenamiento de Cloudinary
*/

const getStorage = (folderName) => {
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folderName,
      allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp', 'avif']
    }
  })
}

// Middleware para cambiar dinámicamente la carpeta de Cloudinary, en este caso crearemos carpetas de films, users y productoras
const upload = (folderName) => multer({ storage: getStorage(folderName) })

module.exports = upload
