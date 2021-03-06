import { extendType } from 'nexus'

export const post = extendType({
  type: 'Query',
  definition(t) {
    t.crud.post({
      async resolve(root, args, ctx, info, originalResolve) {
        const res = await originalResolve(root, args, ctx, info)
        return res
      },
    })
    t.crud.posts({
      async resolve(root, args, ctx, info, originalResolve) {
        const res = await originalResolve(root, args, ctx, info)
        return res
      },
      ordering: true,
      pagination: true,
    })
  },
})
