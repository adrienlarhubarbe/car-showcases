export const calculateCarRent = (city_mpg: number, year: number) => {
}

// Function to call API

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "dafc8fa35bmsh9f574dde5d35996p1b23cbjsn9b09d00b6ec1",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const reponse = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await reponse.json();

  return result;
}
