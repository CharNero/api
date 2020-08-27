import Koa from 'koa'
import { router } from './router'

const app = new Koa()

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('app is running at http://localhost:3000/api/swagger')
})
