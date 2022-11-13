import express from 'express'
import { Request, Response } from 'express'

const app = express()
const PORT = 8080

app.listen(8080, () => {
    console.log(`Server run on port: ${PORT}`)
})