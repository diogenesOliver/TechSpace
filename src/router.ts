import { Router, Response, Request } from "express";
const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Testando a rota da API'
    })
})

export { routes }