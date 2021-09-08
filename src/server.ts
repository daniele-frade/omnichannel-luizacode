import express from 'express'
import routes from './routes'
import './database/createConnection'

const app = express()
const port = 3000

app.use(express.json())
app.use(routes) 


app.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}`)
})