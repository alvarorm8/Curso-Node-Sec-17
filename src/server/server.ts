import express = require('express');
import path = require('path');

 export default class Server { //se exporta y el default se usa para que cuando se importe, se importe esta clase
    public app: express.Application;
    public port: number; //esto hace que de un error si quiero asignar otro tipo de variable

    constructor (puerto: number){
        this.port = puerto;
        this.app = express();
    }

    static init (puerto: number){
        return new Server(puerto);
    }

    private publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }

    start(callback: () => void){
        this.app.listen(this.port, callback);
        this.publicFolder();
    }
 }