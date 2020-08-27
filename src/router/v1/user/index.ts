import {
  request,
  Context,
  tags,
  prefix,
  summary,
  query
} from 'koa-swagger-decorator'

const userTag = tags(['用户模型'])

@prefix('/user')
export default class User {
  @request('get', '/')
  @summary('get user list')
  @query({
    type: { type: 'number', required: true, default: 1, description: 'type' }
  })
  @userTag
  static async getUser(ctx: Context): Promise<void> {
    ctx.body = '/v1/user'
  }
}
