import { extendType } from 'nexus'

export const post = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnePost()
    t.crud.updateOnePost()
    t.crud.deleteOnePost()
  },
})
