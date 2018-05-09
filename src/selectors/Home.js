import { createSelector } from 'reselect'
import { isArray, isEmpty, tail, head, isNil } from 'lodash'

export const propertyOr = (defaultValue, object, propertyOrArray) => {
  if (isArray(propertyOrArray)) {
    if (isEmpty(propertyOrArray)) {
      return object
    }
    const firstProperty = head(propertyOrArray)
    const remainingProperties = tail(propertyOrArray)
    const objectForFirstProperty = propertyOr(defaultValue, object, firstProperty)

    return propertyOr(defaultValue, objectForFirstProperty, remainingProperties)
  }
  // if (isNil(object)) {
  //   return defaultValue
  // }
  // if (isNil(object[propertyOrArray])) {
  //   return defaultValue
  // }
  return object[propertyOrArray]
}

export const propertyOrNull = (object, property) => propertyOr(null, object, property)

export const getHome = state => propertyOrNull(state, 'home')
