import axios from 'axios';
import oauth from 'axios-oauth-client';

// const getAuthorizationCode = oauth.authorizationCode(
//     axios.create(),
//     'https://api.genius.com/oauth/token',
//     'JlUwXAPgKbBgXxJxfysw8dwYHbsP0i8sxouDmaczthGvb6JLfAu_k3J0PFC3UgGX',
//     'BJ_PZUOr2KeVJVEve3cgMgGKzDklonXvgKI-iFZ4DRQ8qRhHt-p910Jwg1rysiJsCeYDMEv4oxnUIdboEwUCNA',
//     'https://localhost:3000'
// )

// const auth = await getAuthorizationCode('AUTHORIZATION_CODE')
// console.log(auth)
// const options = {
//   method: 'GET',
//   url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
//   params: {q: 'muse', per_page: '10', page: '1'},
//   headers: {
//     'X-RapidAPI-Key': 'BJ_PZUOr2KeVJVEve3cgMgGKzDklonXvgKI-iFZ4DRQ8qRhHt-p910Jwg1rysiJsCeYDMEv4oxnUIdboEwUCNA',
//     'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });