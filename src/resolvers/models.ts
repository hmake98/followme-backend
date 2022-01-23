import { objectType } from 'nexus'

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id()
    t.model.published()
    t.model.content()
    t.model.author()
    t.model.comments({ pagination: true })
    t.model.content()
    t.model.image()
    t.model.likes({ pagination: true })
    t.model.share({ pagination: true })
    t.model.createdAt()
    t.model.updatedAt()
  },
})

export const Likes = objectType({
  name: 'Likes',
  definition(t) {
    t.model.id()
    t.model.comments()
    t.model.createdAt()
    t.model.likedBy()
    t.model.post()
    t.model.updatedAt()
  },
})

export const Share = objectType({
  name: 'Share',
  definition(t) {
    t.model.id()
    t.model.post()
    t.model.shareTo()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

export const Comments = objectType({
  name: 'Comments',
  definition(t) {
    t.model.id()
    t.model.likes()
    t.model.mentionedUsers()
    t.model.post()
    t.model.updatedAt()
    t.model.commentedBy()
    t.model.content()
    t.model.createdAt()
  },
})

export const Settings = objectType({
  name: 'Settings',
  definition(t) {
    t.model.createdAt()
    t.model.enableNotification()
    t.model.id()
    t.model.postPrivacy()
    t.model.profilePrivacy()
    t.model.updatedAt()
    t.model.user()
  },
})

export const Friends = objectType({
  name: 'Friends',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.fromUser()
    t.model.status()
    t.model.toUser()
    t.model.updatedAt()
  },
})

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.createdAt()
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.posts({ pagination: true })
    t.model.comments({ pagination: true })
    t.model.createdAt()
    t.model.dateOfBirth()
    t.model.deviceId()
    t.model.friends({ pagination: true })
    t.model.gender()
    t.model.likes({ pagination: true })
    t.model.role()
    t.model.settings()
    t.model.share({ pagination: true })
    t.model.updatedAt()
    t.model.userFriends({ pagination: true })
    t.model.username()
  },
})

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('accessToken')
    t.field('user', { type: 'User' })
  },
})
