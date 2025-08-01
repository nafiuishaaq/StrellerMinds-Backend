import { Injectable, type ExecutionContext } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { GqlExecutionContext } from "@nestjs/graphql"

@Injectable()
export class GqlAuthGuard extends AuthGuard("jwt") {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    const request = ctx.getContext().req
    return request
  }
}
