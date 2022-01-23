import { extendType } from 'nexus'

export const friends = extendType({
  type: 'Query',
  definition(t) {
    t.crud.friends({
      async resolve(root, args, ctx, info, originalResolve) {
        const res = await originalResolve(root, args, ctx, info)
        return res
      },
      ordering: true,
      pagination: true,
    })
  },
})
