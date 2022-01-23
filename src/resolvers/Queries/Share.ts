import { extendType } from 'nexus'

export const share = extendType({
  type: 'Query',
  definition(t) {
    t.crud.share({
      async resolve(root, args, ctx, info, originalResolve) {
        const res = await originalResolve(root, args, ctx, info)
        return res
      },
    })
    t.crud.shares({
      async resolve(root, args, ctx, info, originalResolve) {
        const res = await originalResolve(root, args, ctx, info)
        return res
      },
      ordering: true,
      pagination: true,
    })
  },
})
