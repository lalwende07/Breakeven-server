import { Request, Response } from 'express'
import express from 'express'
const parkings = require('../features/parkings.json')

export default class Server {

    readonly port: number

    constructor(port: number) {
        this.port = port
    }

    start () {
        const app = express()
        app.get('/parkings', function (req: Request, res: Response) {
            res.send('Liste des parkings')
        })

        app.get('/', function (req: Request, res: Response) {
            res.send('Salut')
        })

        app.listen(this.port, function () {
            console.log('Serveur démarré')
        })
    }
}