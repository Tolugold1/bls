/* import * as prototype from './prototypes';


export const get_nearest_business = (category, location, latitude, longitude, price, keywords) => async (dispatch) => {
  dispatch(loadingNearestBusiness(true))

  const url = `https://api.yelp.com/v3/businesses/search?location=${location}&latitude?=${latitude}&longitude?=${longitude}&term=${category}&category=${keywords}&price=${price}&sort_by=best_match&limit=20`;
  const options = {
    method: 'GET',
    headers: {
      mode: 'no-cors',
      accept: 'application/json',
      Authorization: 'Bearer V9qCmOggl9kmTJ3u-sG9hn_9Yg-XzxR6IFhMN5VgPtAcnLETKgLcSJLmt4JSgXho7vPRHos2uiv5U2Yc4podXuV9Y5WsaYvwXxlw5q0eGa0MB0l8XOCa7OIs4-sqZHYx'
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(resp => dispatch(get_the_most_nearest_business(resp.businesses)))
    .catch(err => (console.error('error:' + err), dispatch(getting_nearest_business_failed(err.error))));
}

export const loadingNearestBusiness = () => ({
  type: prototype.LOADING_NEAREST_BUSINESS
})

export const get_the_most_nearest_business = (businessData) => ({
  type: prototype.GET_NEAREST_BUSINESS,
  payload: businessData
})

export const getting_nearest_business_failed = (failed) => ({
  type: prototype.GETTING_NEAREST_BUSINESS_FAILED,
  payload: failed
}) */