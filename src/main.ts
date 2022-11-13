import express from 'express'
import { Request, Response } from 'express'

const app = express()
const PORT = 8080

app.get('/', (req: Request, res: Response) => {

    res.send('Testando')

})

app.listen(8080, () => {
    console.log(`Server run on port: ${PORT}`)
})