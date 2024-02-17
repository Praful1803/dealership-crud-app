export interface Dealer {
  id: string;
  name: string;
  totalBudget: string;
  remainingBudget: string;
  owner: {
    firstName: string;
    lastName: string;
  };
  location: {
    latitude: string;
    longitude: string;
  };
  cars: Car[];
}

export interface Car {
  id: string;
  name: string;
  model: string;
  brand: string;
  color: string;
  price: string;
}
