import * as Posts from './Post'
import * as Users from './User'
import * as Friends from './Friends'
import * as Comments from './Comments'
import * as Like from './Like'
import * as Settings from './Settings'
import * as Share from './Share'

export const Mutation = {
  ...Posts,
  ...Users,
  ...Friends,
  ...Comments,
  ...Share,
  ...Settings,
  ...Like,
}
