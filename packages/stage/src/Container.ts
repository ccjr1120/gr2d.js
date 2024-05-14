import { BaseObject } from '@gr2d/basis'
import type { ObjectType } from '@gr2d/basis/src/base'

export default class Container extends BaseObject {
  objectType: ObjectType = 'container'
  add() {}
}
