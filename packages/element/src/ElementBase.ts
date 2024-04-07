import { getGlobalId } from './utils/globalId'

export default abstract class ElementBase {
  _id: string = getGlobalId()
}
