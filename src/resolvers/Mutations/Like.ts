import { extendType } from 'nexus'

export const likes = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneLikes()
    t.crud.updateOneLikes()
    t.crud.deleteOneLikes()
  },
})
