import { extendType } from 'nexus'

export const friends = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneFriends()
    t.crud.updateOneFriends()
    t.crud.deleteOneFriends()
  },
})
