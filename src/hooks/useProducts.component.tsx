import { Product } from '../types';

export default function useProducts(): Product[] {
  const hotelA: Product = {
    hotel: {
      hotelName: 'Iberostar Grand Salome',
      hotelLocation: 'Costa Adeje, Tenerife',
      starRating: 5,
      imageAltText: 'Iberostar Grand Salome hotel',
      overview:
        'The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.',
    },
    booking: {
      numAdults: 2,
      numChildren: 2,
      numInfants: 1,
      date: new Date(2019, 6, 3),
      durationInDays: 7,
      departingFrom: 'East Midlands',
      priceInPounds: 1136.5,
    },
  };

  const hotelB: Product = {
    hotel: {
      hotelName: 'Hotel de Crillon',
      hotelLocation: 'Paris, France',
      starRating: 4,
      imageAltText: 'Hotel de Crillon',
      overview:
        'Located on Place de la Concorde, Hotel de Crillon offers luxurious accommodations and stunning views of Paris landmarks. With its historic charm and modern amenities, it provides an unforgettable experience for guests.',
    },
    booking: {
      numAdults: 1,
      numChildren: 0,
      numInfants: 0,
      date: new Date(2023, 8, 12),
      durationInDays: 7,
      departingFrom: 'Charles de Gaulle Airport',
      priceInPounds: 3500.0,
    },
  };

  const hotelC: Product = {
    hotel: {
      hotelName: 'Hotel Danieli',
      hotelLocation: 'Venice, Italy',
      starRating: 2,
      imageAltText: 'Hotel Danieli Venice',
      overview:
        'Overlooking the Grand Canal, Hotel Danieli is a landmark of Venetian luxury. With its exquisite décor and panoramic views, it offers an enchanting escape in the heart of Venice.',
    },
    booking: {
      numAdults: 4,
      numChildren: 1,
      numInfants: 2,
      date: new Date(2024, 5, 17),
      durationInDays: 10,
      departingFrom: 'Marco Polo Airport',
      priceInPounds: 4500.0,
    },
  };

  const products: Product[] = [hotelA, hotelB, hotelC];

  return products;
}
