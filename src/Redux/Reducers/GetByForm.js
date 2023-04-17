import * as prototype from "../prototypes"

export const BusinessByForm = (state = {isLoading: true, errMess: null, businessData: [], nearestPlaces: []}, action) => {

  switch (action.type) {
    case prototype.FETCHWITHFORMLOADING:
      return {...state, isLoading: true, errMess: null, businessData: [], nearestPlaces: []}
    
    case prototype.FETCHWITHFORMFAILED:
      return {...state, isLoading: false, errMess: action.payload, businessData: [], nearestPlaces: []}
    
    case prototype.FETCHWITHFORMSUCCESS:
      return {...state, isLoading: false, errMess: null, businessData: action.payload, nearestPlaces: []}
    
    case prototype.FETCHWITHFORMNEAREST:
      return {...state, isLoading: false, errMess: null, businessData: [], nearestPlaces: action.payload}
      
    default:
      return (state)
  }
}