import * as prototype from "../prototypes"

export const Business = (state = {isLoading: true, errMess: null, businessData: []}, action) => {

  switch (action.type) {
    case prototype.LOADING_NEAREST_BUSINESS:
      return {...state, isLoading: true, errMess: null, businessData: []}
    
    case prototype.GETTING_NEAREST_BUSINESS_FAILED:
      return {...state, isLoading: false, errMess: action.payload, businessData: []}
    
    case prototype.GET_NEAREST_BUSINESS:
      return {...state, isLoading: false, errMess: null, businessData: action.payload}
      
    default:
      return (state)
  }
}