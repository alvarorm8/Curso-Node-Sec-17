import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => { //ruta del servidor, lo que quiero que haga, sería http://localhost:3000/heroes
    const query = `
        SELECT *
        FROM heroes`;
    MySQL.ejecutarQuery(query, (err:any, heroes: Object[]) => {
        if (err){
            res.status(400).json({
                err: true,
                error: err
            });
        }else{
            res.json({
                ok: true,
                heroes
            })
        }
    });
});

router.get('/heroes/:id', (req: Request, res: Response) => { //ruta del servidor, lo que quiero que haga, sería http://localhost:3000/heroes
    const id = req.params.id;
    const escapedID = MySQL.instance.cnn.escape(id);
    const query = `
    SELECT *
    FROM heroes
    where id = ${escapedID}`;
    MySQL.ejecutarQuery(query, (err:any, heroe: Object[]) => {
        if (err){
            res.status(400).json({
                err: true,
                error: err
            });
        }else{
            res.json({
                ok: true,
                heroe: heroe[0]
            })
        }
    });
});

export default router;