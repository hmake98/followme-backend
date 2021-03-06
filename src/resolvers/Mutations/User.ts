import { stringArg, extendType, nonNull } from 'nexus'
import { compare, hash } from 'bcrypt'
import { generateAccessToken, handleError } from '../../utils/helpers'
import { errors } from '../../utils/constants'

export const user = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        username: nonNull(stringArg()),
        name: stringArg(),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_parent, { username, name, email, password }, ctx) {
        try {
          const hashedPassword = await hash(password, 10)
          const user = await ctx.prisma.user.create({
            data: {
              username,
              name,
              email,
              password: hashedPassword,
              role: 'USER',
              settings: {
                create: {
                  postPrivacy: 'PUBLIC',
                  profilePrivacy: 'PUBLIC',
                  enableNotification: true,
                },
              },
            },
          })

          const accessToken = generateAccessToken(user.id)
          return {
            accessToken,
            user,
          }
        } catch (e) {
          handleError(errors.userAlreadyExists)
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_parent, { email, password }, ctx) {
        let user = null
        try {
          user = await ctx.prisma.user.findUnique({
            where: {
              email,
            },
          })
        } catch (e) {
          handleError(errors.invalidUser)
        }

        if (!user) handleError(errors.invalidUser)

        const passwordValid = await compare(password, user.password)
        if (!passwordValid) handleError(errors.invalidUser)

        const accessToken = generateAccessToken(user.id)
        return {
          accessToken,
          user,
        }
      },
    })

    t.crud.updateOneUser()
  },
})
