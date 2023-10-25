export async function fetchCars() {
  const url = "https://api.api-ninjas.com/v1/cars?model=corolla";
  const headers = {
    "X-Api-Key": "uMvsXSgbnSgqgnCXUF9jhA==dAyr5ZaM8RcV9LGJ",
  };

  const response = await fetch(url, { headers: headers });

  const result = response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };