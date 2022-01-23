import { extendType } from 'nexus'

export const comments = extendType({
  type: 'Query',
  definition(t) {
    t.crud.comments({
      async resolve(root, args, ctx, info, originalResolve) {
        const res = await originalResolve(root, args, ctx, info)
        return res
      },
      ordering: true,
      pagination: true,
    })
  },
})
