import { extendType } from 'nexus'

export const comments = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneComments()
    t.crud.updateOneComments()
    t.crud.deleteOneComments()
  },
})
