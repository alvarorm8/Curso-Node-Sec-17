/*TypeScript es un superset de JavaScript que añade funcionalidades a JavaScript ya que este es demasiado flexible y puede generar problemas.

Para compilar el proyecto se escribe tsc en la terminal, con lo que genera una carpeta dist con los archivos de javascript creados para ese TypeScript.
Una cosa que pasa es que el tsc no copia los archivos html por ejemplo, sólo los .tsc. Para que los copie se define en package.json un comando, de manera que para
compilar un proyecto se hace primero tsc y luego npm run html (nombre del comando)

Se ha creado un comando llamado build que llama a los 2 a la vez, por lo que se hace sólo npm run build
*/



import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

const server = Server.init(3000);
server.app.use(router);

server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
})