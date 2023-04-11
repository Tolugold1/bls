export const getLocation = () => {
  
  const fetchLocation =  fetch('http://localhost:3000/users/nearestBusiness', {
    headers: {
      "Content-Type": "application/json"
    }
  })
  return fetchLocation;
}