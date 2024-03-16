export type Booking = {
  numAdults: number;
  numChildren: number;
  numInfants: number;
  date: Date;
  durationInDays: number;
  departingFrom: string;
  priceInPence: number;
};

export type Hotel = {
  hotelName: string;
  hotelLocation: string;
  starRating: 1 | 2 | 3 | 4 | 5;
  overview: string;
};
