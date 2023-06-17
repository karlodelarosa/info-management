import { Specification } from '../types/Specification.type'

export default class IsEmptyObject<T> implements Specification<T> {
  isSatisfiedBy(entity: T): boolean {
    if (typeof entity !== 'object' || entity === null) {
      return false
    }

    return Object.keys(entity).length === 0
  }
}
