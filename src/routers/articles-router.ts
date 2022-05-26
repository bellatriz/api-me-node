import express from 'express'

const articlesRouter = express.Router()

articlesRouter.post('/articles', (req, res) => {
  res.send('Cria novo article')
})

articlesRouter.get('/articles', (req, res) => {
  res.send('Lista todos os articles')
})

articlesRouter.get('/articles/:id', (req, res) => {
  const id: number = +req.params.id
  res.send(`Obtém a informação do article ${id}`)
})

articlesRouter.put('/articles/:id', (req, res) => {
  const id: number = +req.params.id
  res.send(`Atualiza o article ${id}`)
})

articlesRouter.delete('/articles/:id', (req, res) => {
  const id: number = +req.params.id
  res.send(`Apaga o article ${id}`)
})

export default articlesRouter
