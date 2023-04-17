import * as prototype from './prototypes';


export const sendTrascript = (transcript) => async (dispatch) => {
  dispatch(transcriptLoading(true));
  var obj = {
    transcript: transcript
  }
  return fetch("https://tan-talented-magpie.cyclic.app/users/transcript", {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(obj)
  })
  .then(response => {
    if (response.ok) {
      return response
    } else {
      var error = new Error("Error" + response.status + ":" + response.statusText);
      error.response = response;
      throw error
    }
  }, (error) => {
    var errMess = new Error(error.message);
    throw errMess;
  })
  .then(resp => resp.json())
  .then(resp => {
    console.log(resp);
    if (resp.statusCode === 200) {
      dispatch(getTranscript(resp.answer.businesses))
    } else if ( resp.statusCode === 400) {
      console.log(resp.response.body.split('"')[9])
      dispatch(failedToGetTranscript(resp.response.body.split('"')[9]));
    }
  })
}

export const transcriptLoading = () => ({
  type: prototype.LOADINGTRANSCRIP
})

export const getTranscript = (response) => ({
  type: prototype.GETTRANSCRIPT,
  payload: response
})

export const failedToGetTranscript = (errMess) => ({
  type: prototype.TRANSCRIPTFAIL,
  payload: errMess
})


export const fetchWithForm = ( obj ) => async (dispatch) => {
  dispatch(fetchWithFormLoading(true))

  return fetch('https://tan-talented-magpie.cyclic.app/users/places', {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(obj)
  })
  .then(response => {
    if (response.ok) {
      return response
    } else {
      var err = new Error("Error" + response.status + ":" + response.statusText);
      err.response = response;
      throw err;
    }
  },
  (error) => {
    var errMess = new Error(error.message);
    throw errMess;
  })
  .then(resp => resp.json())
  .then(resp => {
    console.log(resp)
    if (resp.answer === null) {
      console.log("businesses", resp);
      dispatch(fetchWithFormNearest(resp.exactLoc));
    } else {
      dispatch(fetchWithFormSuccess(resp.answer[0].businesses))
      console.log(resp)
    }
  }).catch(err => { return (console.log(err), dispatch(fetchWithFormFailed(err)))});
}

export const fetchWithFormSuccess = (response) => ({
  type: prototype.FETCHWITHFORMSUCCESS,
  payload: response
})
export const fetchWithFormNearest = (response) => ({
  type: prototype.FETCHWITHFORMNEAREST,
  payload: response
})


export const fetchWithFormFailed = (errMess) => ({
  type: prototype.FETCHWITHFORMFAILED,
  payload: errMess
})

export const fetchWithFormLoading = () => ({
  type: prototype.FETCHWITHFORMLOADING
})