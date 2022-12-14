 
export const exerciseOptions =  {

  // получили с сайта Rapid 
  // X-RapidAPI-Key переносим в файл .env
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
 
 }
};
// Можно через Promises (then())
export const fetchData = async (url, options) => {
  const response = await fetch (url, options);
   const data = await response.json();

  return data
}

