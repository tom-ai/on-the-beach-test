export type Booking = {
  numAdults: number;
  numChildren: number;
  numInfants: number;
  date: Date;
  duration: number;
  departingFrom: string;
  price: number;
};

export type Hotel = {
  hotelName: string;
  hotelLocation: string;
  starRating: 1 | 2 | 3 | 4 | 5;
  overview: string;
};
