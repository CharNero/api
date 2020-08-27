import { SwaggerRouter } from 'koa-swagger-decorator'
import v1Routes from './v1'

export const router = new SwaggerRouter({
  prefix: '/api'
})

router.swagger({
  title: 'Api of all',
  description: '全部API',
  version: '1.00',
  prefix: '/api',
  swaggerHtmlEndpoint: '/swagger'
})

// 路由前缀需在此处定义，不能使用@koa/router的prefix，否则swagger-json路径解析会有问题
router.use('/v1', v1Routes.routes())

router.mapDir(__dirname)
