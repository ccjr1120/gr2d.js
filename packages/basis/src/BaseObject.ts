import type { BaseParentType, ObjectType } from './base.d'

export abstract class BaseObject {
  abstract parent?: BaseParentType
  abstract objectType: ObjectType
}
