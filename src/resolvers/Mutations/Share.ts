import { extendType } from 'nexus'

export const share = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneShare()
    t.crud.updateOneShare()
    t.crud.deleteOneShare()
  },
})
