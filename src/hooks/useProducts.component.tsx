import { Product } from '../types';

export default function useProducts(): Product[] {
  const hotelA: Product = {
    hotel: {
      hotelName: 'Gran Hotel Miramar',
      hotelLocation: 'Malaga, Spain',
      starRating: 5,
      imageAltText: 'Gran Hotel Miramar',
      overview:
        'Overlooking the Mediterranean Sea, the Gran Hotel Miramar is a luxurious beachfront resort in the heart of Malaga. With its stunning architecture, world-class amenities, and impeccable service, it offers an unforgettable stay in the vibrant city of Malaga.',
    },
    booking: {
      numAdults: 2,
      numChildren: 3,
      numInfants: 1,
      date: new Date(2024, 7, 15),
      durationInDays: 10,
      departingFrom: 'London Gatwick Airport',
      priceInPounds: 2200.0,
    },
  };

  const hotelB: Product = {
    hotel: {
      hotelName: 'Palacio de la Marquesa',
      hotelLocation: 'Seville, Spain',
      starRating: 4,
      imageAltText: 'Palacio de la Marquesa',
      overview:
        'Housed in a beautifully restored 16th-century palace, the Palacio de la Marquesa is a boutique hotel that seamlessly blends historic charm with modern comforts. Located in the heart of Seville, it offers an unparalleled experience of Andalusian hospitality and culture.',
    },
    booking: {
      numAdults: 4,
      numChildren: 1,
      numInfants: 2,
      date: new Date(2023, 9, 2),
      durationInDays: 7,
      departingFrom: 'Manchester Airport',
      priceInPounds: 3500.0,
    },
  };

  const hotelC: Product = {
    hotel: {
      hotelName: 'Hotel Maria Cristina',
      hotelLocation: 'San Sebastian, Spain',
      starRating: 5,
      imageAltText: 'Hotel Maria Cristina',
      overview:
        'The Hotel Maria Cristina is a magnificent Belle Époque-style hotel located in the heart of San Sebastian. Originally built in 1912, this iconic hotel offers elegant accommodation, world-class dining, and an unmatched sense of old-world charm and sophistication.',
    },
    booking: {
      numAdults: 1,
      numChildren: 0,
      numInfants: 0,
      date: new Date(2024, 6, 10),
      durationInDays: 5,
      departingFrom: 'Edinburgh Airport',
      priceInPounds: 650,
    },
  };

  const products: Product[] = [hotelA, hotelB, hotelC];

  return products;
}
