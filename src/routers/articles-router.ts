import express from 'express'
import Article from '../models/article'

const articlesRouter = express.Router()

articlesRouter.post('/articles', (req, res) => {
  res.send('Cria novo article')
})

articlesRouter.get('/articles', (req, res) => {
  const articles: Article[] = [
    {
      id: 1,
      featured: true,
      title: 'How to drop cobweb',
      imageUrl: '/spider.jpg',
      summary: 'the principle',
      publishedAt: 'today',
      writers: [
        {
          id: '1',
          signature: 'spider-man'
        }
      ]
    },
  ]
  res.json(articles)
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
