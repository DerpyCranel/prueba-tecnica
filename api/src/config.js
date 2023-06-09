import {config} from "dotenv"

config()
/*configuracion de las variables de conexion
a la base de datos desde el .env 
*/
export const PORT =process.env.PORT || 3000
export const DB_HOST=process.env.DB_HOST || 'localhost'
export const DB_PORT=process.env.DB_PORT || 3306
export const DB_NAME=process.env.DB_NAME || 'db_prueba'
export const DB_USER=process.env.DB_USER || 'root'
export const DB_PASSWORD=process.env.DB_PASSWORD || ''