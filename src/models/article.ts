type Article = {
  id?: number,
  featured: boolean,
  title: string,
  imageUrl: string,
  summary: string,
  publishedAt: string,
  writers: [
    {
      id: string,
      signature: string
    }
  ]
}

export default Article
