import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 4000

const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()

app.get('/', (req, res) => {
  res.send('Back-end Challenge 2021 🏅 - Space Flight News')
})

app.use(cors({
  origin: ['http://localhost:3000']
}))

app.use((req, res) => {
  res.status(404)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})
