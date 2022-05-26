import express from 'express'
import cors from 'cors'
import articlesRouter from './routers/articles-router'

// Porta do servidor
const PORT = process.env.PORT || 4000

const app = express()

// Endpoint raiz
app.get('/', (req, res) => {
  res.send('Back-end Challenge 2021 🏅 - Space Flight News')
})

app.use(cors({
  origin: ['http://localhost:3000']
}))

// Rotas
app.use('/api', articlesRouter)

// Inicia o sevidor
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso 🚪: ${PORT}`)
})
