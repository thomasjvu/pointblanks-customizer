import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import dalleRoutes from './routes/dalle.routes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: "25mb" }))

app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req, res) => {
    res.status(200).json({ message: "PointBlanks Product Configurator"})
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server has started on PORT: ${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}`)
})
