import { SwaggerRouter } from 'koa-swagger-decorator'

const router = new SwaggerRouter()

router.swagger({
  title: 'Api of Version 1',
  description: '版本1',
  version: '1.00',
  prefix: '/api/v1',
  swaggerHtmlEndpoint: '/swagger',
  swaggerOptions: {
    securityDefinitions: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
  },
})

router.mapDir(__dirname)

export default router