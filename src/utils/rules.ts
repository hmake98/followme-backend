import { shield, rule, allow } from 'graphql-shield'
import { Context } from '../types'
import { handleError } from './helpers'
import { errors } from './constants'

export const rules = {
  isAuthenticatedUser: rule({ cache: 'contextual' })(
    (_parent, _args, ctx: Context) => {
      try {
        if (ctx.userId === -1) {
          return handleError(errors.notAuthenticated)
        }
        return true
      } catch (e) {
        return e
      }
    }
  ),
  isPostOwner: rule({ cache: 'contextual' })(
    async (_parent, { id }, ctx: Context) => {
      try {
        const author = await ctx.prisma.post
          .findUnique({
            where: {
              id,
            },
          })
          .author()
        return ctx?.userId === author?.id
      } catch (e) {
        return e
      }
    }
  ),
}

export const permissions = shield({
  Query: {
    '*': rules.isAuthenticatedUser,
  },
  Mutation: {
    login: allow,
    signup: allow,
    '*': rules.isAuthenticatedUser,
  },
  Subscription: {
    latestPost: rules.isAuthenticatedUser,
  },
})
