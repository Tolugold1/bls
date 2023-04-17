import * as prototype from "../prototypes"

export const Business = (state = {isLoading: true, errMess: null, businessData: []}, action) => {

  switch (action.type) {
    case prototype.LOADINGTRANSCRIP:
      return {...state, isLoading: true, errMess: null, businessData: []}
    
    case prototype.TRANSCRIPTFAIL:
      return {...state, isLoading: false, errMess: action.payload, businessData: []}
    
    case prototype.GETTRANSCRIPT:
      return {...state, isLoading: false, errMess: null, businessData: action.payload}
      
    default:
      return (state)
  }
}