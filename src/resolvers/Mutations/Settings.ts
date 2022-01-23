import { extendType } from 'nexus'

export const settings = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneSettings()
    t.crud.updateOneSettings()
    t.crud.deleteOneSettings()
  },
})
