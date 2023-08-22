import axios from 'axios';

export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b51dbed13amsh697095b7d0b8523p154809jsnaeda40cd75d7',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(geoApiOptions);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
export const GEO_API_URL= 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'