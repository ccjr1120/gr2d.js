import { BaseObject } from '@gr2d/basis'
import type { ObjectType } from '@gr2d/basis'
import type { DataTree } from './index.d'

export default class Stage extends BaseObject {
  parent = undefined
  objectType: ObjectType = 'container'
  objectTree: DataTree

  constructor() {
    super()
    this.objectTree = {
      name: 'stage',
      objectType: this.objectType,
      children: []
    }
  }

  add(object: BaseObject) {
    object.parent = this
    this.objectTree.children.push(object)
  }
}
