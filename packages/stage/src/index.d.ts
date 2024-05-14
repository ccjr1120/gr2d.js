import { ObjectType, BaseObject, type BaseParentType } from '@gr2d/basis'

export type DataTree = {
  parent?: BaseParentType
  name: string
  objectType: ObjectType
  children: BaseObject[]
}
