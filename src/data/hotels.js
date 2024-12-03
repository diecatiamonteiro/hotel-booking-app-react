// Room types with their features
const roomTypes = {
  classic: {
    name: "Classic Room",
    size: "25m²",
    bedType: "Queen",
    maxOccupancy: 2,
    amenities: ["TV", "Air conditioning", "Safe", "Mini fridge", "Private bathroom"],
    basePrice: 100
  },
  superior: {
    name: "Superior Room",
    size: "30m²",
    bedType: "King",
    maxOccupancy: 2,
    amenities: ["TV", "Air conditioning", "Safe", "Mini bar", "Private bathroom", "City view", "Coffee machine"],
    basePrice: 150
  },
  deluxe: {
    name: "Deluxe Suite",
    size: "45m²",
    bedType: "King",
    maxOccupancy: 3,
    amenities: ["TV", "Air conditioning", "Safe", "Mini bar", "Private bathroom", "Ocean view", "Coffee machine", "Separate living area"],
    basePrice: 250
  },
  family: {
    name: "Family Suite",
    size: "60m²",
    bedType: "2 Queens",
    maxOccupancy: 4,
    amenities: ["TV", "Air conditioning", "Safe", "Mini bar", "2 Bathrooms", "City view", "Kitchen", "Dining area"],
    basePrice: 300
  }
};

// Meal plans
const mealPlans = {
  roomOnly: {
    name: "Room Only",
    description: "No meals included",
    priceAdjustment: 0
  },
  breakfast: {
    name: "Breakfast Included",
    description: "Daily breakfast buffet (6:30 AM - 10:30 AM)",
    priceAdjustment: 25
  },
  halfBoard: {
    name: "Half Board",
    description: "Daily breakfast and dinner",
    priceAdjustment: 50
  },
  fullBoard: {
    name: "Full Board",
    description: "Daily breakfast, lunch, and dinner",
    priceAdjustment: 75
  }
};

// Hotel amenities categories
const hotelAmenities = {
  wellness: [
    "Spa", "Fitness center", "Yoga classes", "Swimming pool", "Sauna", 
    "Steam room", "Hot tub", "Massage services"
  ],
  dining: [
    "Restaurant", "Bar/Lounge", "Room service", "Breakfast buffet", 
    "À la carte restaurant", "Rooftop bar", "Coffee shop"
  ],
  business: [
    "Business center", "Meeting rooms", "Conference facilities", 
    "High-speed WiFi", "Printing services"
  ],
  services: [
    "24-hour front desk", "Concierge", "Laundry service", "Dry cleaning",
    "Airport shuttle", "Valet parking", "Currency exchange", "Luggage storage"
  ],
  facilities: [
    "Parking", "Electric vehicle charging", "Pet friendly", "Disabled access",
    "Garden", "Terrace", "Beach access", "Elevator"
  ]
};

// Tax and fee structure
const fees = {
  cityTax: 0.05, // 5% city tax
  serviceCharge: 0.10, // 10% service charge
  vatRate: 0.20, // 20% VAT
  additionalGuest: 50, // Fee per additional guest
  petFee: 30 // Daily pet fee
};

export const hotelTemplates = [
  {
    name: "Grand Palace Hotel",
    chainCode: "GP",
    starRating: 5,
    description: "Luxury hotel featuring elegant rooms, world-class spa, and stunning city views.",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    media: [
      {
        uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        category: "EXTERIOR"
      },
      {
        uri: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
        category: "ROOM"
      }
    ],
    rooms: {
      classic: { available: 30, basePrice: 200 },
      superior: { available: 20, basePrice: 300 },
      deluxe: { available: 15, basePrice: 450 },
      family: { available: 10, basePrice: 600 }
    },
    amenities: {
      wellness: ["Spa", "Fitness center", "Swimming pool", "Sauna"],
      dining: ["Restaurant", "Bar/Lounge", "Room service", "Breakfast buffet"],
      business: ["Business center", "Meeting rooms"],
      services: ["24-hour front desk", "Concierge", "Valet parking"],
      facilities: ["Parking", "Pet friendly"]
    },
    mealPlans: ["roomOnly", "breakfast", "halfBoard"],
    policies: {
      cancellation: "Free cancellation up to 24 hours before check-in",
      guarantee: "Credit card required for reservation",
      pets: "Allowed with additional fee",
      children: "Children under 12 stay free with parents"
    }
  },
  {
    name: "Riverside Inn",
    chainCode: "RI",
    starRating: 4,
    description: "Charming inn located by the river, offering cozy rooms and a relaxing atmosphere.",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    media: [
      {
        uri: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        category: "EXTERIOR"
      },
      {
        uri: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
        category: "ROOM"
      }
    ],
    rooms: {
      classic: { available: 25, basePrice: 150 },
      superior: { available: 15, basePrice: 250 },
      deluxe: { available: 10, basePrice: 350 }
    },
    amenities: {
      wellness: ["Fitness center", "Sauna"],
      dining: ["Restaurant", "Bar/Lounge"],
      business: ["Meeting rooms"],
      services: ["24-hour front desk", "Concierge"],
      facilities: ["Parking", "Pet friendly"]
    },
    mealPlans: ["roomOnly", "breakfast"],
    policies: {
      cancellation: "Free cancellation up to 48 hours before check-in",
      guarantee: "Credit card required for reservation",
      pets: "Allowed with additional fee"
    }
  },
  {
    name: "City Center Hotel",
    chainCode: "CC",
    starRating: 3,
    description: "Conveniently located in the city center, offering affordable accommodations.",
    checkInTime: "13:00",
    checkOutTime: "11:00",
    media: [
      {
        uri: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
        category: "EXTERIOR"
      },
      {
        uri: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
        category: "ROOM"
      }
    ],
    rooms: {
      classic: { available: 40, basePrice: 100 },
      superior: { available: 20, basePrice: 150 }
    },
    amenities: {
      wellness: ["Fitness center"],
      dining: ["Restaurant"],
      business: ["Business center"],
      services: ["24-hour front desk"],
      facilities: ["Parking"]
    },
    mealPlans: ["roomOnly"],
    policies: {
      cancellation: "Free cancellation up to 72 hours before check-in",
      guarantee: "Credit card required for reservation"
    }
  },
  {
    name: "Seaside Resort",
    chainCode: "SR",
    starRating: 5,
    description: "Luxurious resort by the sea, offering stunning views and top-notch amenities.",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    media: [
      {
        uri: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
        category: "EXTERIOR"
      },
      {
        uri: "https://images.unsplash.com/photo-1544124499-58912cbddaad",
        category: "ROOM"
      }
    ],
    rooms: {
      classic: { available: 20, basePrice: 300 },
      superior: { available: 15, basePrice: 400 },
      deluxe: { available: 10, basePrice: 500 },
      family: { available: 5, basePrice: 700 }
    },
    amenities: {
      wellness: ["Spa", "Fitness center", "Swimming pool", "Sauna"],
      dining: ["Restaurant", "Bar/Lounge", "Room service"],
      business: ["Conference facilities"],
      services: ["24-hour front desk", "Concierge", "Valet parking"],
      facilities: ["Beach access", "Parking", "Pet friendly"]
    },
    mealPlans: ["roomOnly", "breakfast", "fullBoard"],
    policies: {
      cancellation: "Free cancellation up to 24 hours before check-in",
      guarantee: "Credit card required for reservation",
      pets: "Allowed with additional fee"
    }
  },
  {
    name: "Mountain Lodge",
    chainCode: "ML",
    starRating: 4,
    description: "Cozy lodge nestled in the mountains, perfect for a peaceful retreat.",
    checkInTime: "16:00",
    checkOutTime: "10:00",
    media: [
      {
        uri: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac",
        category: "EXTERIOR"
      },
      {
        uri: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
        category: "ROOM"
      }
    ],
    rooms: {
      classic: { available: 15, basePrice: 200 },
      superior: { available: 10, basePrice: 300 },
      deluxe: { available: 5, basePrice: 400 }
    },
    amenities: {
      wellness: ["Sauna", "Hot tub"],
      dining: ["Restaurant", "Bar/Lounge"],
      business: ["Meeting rooms"],
      services: ["24-hour front desk"],
      facilities: ["Parking", "Pet friendly"]
    },
    mealPlans: ["roomOnly", "breakfast"],
    policies: {
      cancellation: "Free cancellation up to 48 hours before check-in",
      guarantee: "Credit card required for reservation",
      pets: "Allowed with additional fee"
    }
  },
  {
    name: "Urban Boutique Hotel",
    chainCode: "UB",
    starRating: 4,
    description: "Stylish boutique hotel in the heart of the city, offering personalized service.",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    media: [
      {
        uri: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
        category: "EXTERIOR"
      },
      {
        uri: "https://images.unsplash.com/photo-1544124499-58912cbddaad",
        category: "ROOM"
      }
    ],
    rooms: {
      classic: { available: 20, basePrice: 250 },
      superior: { available: 15, basePrice: 350 },
      deluxe: { available: 10, basePrice: 450 }
    },
    amenities: {
      wellness: ["Fitness center"],
      dining: ["Restaurant", "Bar/Lounge", "Room service"],
      business: ["Business center"],
      services: ["24-hour front desk", "Concierge"],
      facilities: ["Parking", "Pet friendly"]
    },
    mealPlans: ["roomOnly", "breakfast"],
    policies: {
      cancellation: "Free cancellation up to 24 hours before check-in",
      guarantee: "Credit card required for reservation",
      pets: "Allowed with additional fee"
    }
  },
  {
    name: "Historic Castle Hotel",
    chainCode: "HC",
    starRating: 5,
    description: "Stay in a historic castle with luxurious rooms and a unique atmosphere.",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    media: [
      {
        uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        category: "EXTERIOR"
      },
      {
        uri: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
        category: "ROOM"
      }
    ],
    rooms: {
      classic: { available: 10, basePrice: 400 },
      superior: { available: 8, basePrice: 500 },
      deluxe: { available: 5, basePrice: 600 },
      family: { available: 3, basePrice: 800 }
    },
    amenities: {
      wellness: ["Spa", "Fitness center", "Swimming pool"],
      dining: ["Restaurant", "Bar/Lounge", "Room service"],
      business: ["Conference facilities"],
      services: ["24-hour front desk", "Concierge", "Valet parking"],
      facilities: ["Parking", "Pet friendly"]
    },
    mealPlans: ["roomOnly", "breakfast", "halfBoard"],
    policies: {
      cancellation: "Free cancellation up to 24 hours before check-in",
      guarantee: "Credit card required for reservation",
      pets: "Allowed with additional fee"
    }
  },
  {
    name: "Eco-Friendly Retreat",
    chainCode: "EF",
    starRating: 4,
    description: "Sustainable hotel offering eco-friendly accommodations and organic dining.",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    media: [
      {
        uri: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        category: "EXTERIOR"
      },
      {
        uri: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
        category: "ROOM"
      }
    ],
    rooms: {
      classic: { available: 25, basePrice: 180 },
      superior: { available: 15, basePrice: 280 },
      deluxe: { available: 10, basePrice: 380 }
    },
    amenities: {
      wellness: ["Yoga classes", "Spa"],
      dining: ["Organic restaurant", "Bar/Lounge"],
      business: ["Meeting rooms"],
      services: ["24-hour front desk", "Concierge"],
      facilities: ["Parking", "Pet friendly"]
    },
    mealPlans: ["roomOnly", "breakfast"],
    policies: {
      cancellation: "Free cancellation up to 48 hours before check-in",
      guarantee: "Credit card required for reservation",
      pets: "Allowed with additional fee"
    }
  },
  {
    name: "Skyline Tower Hotel",
    chainCode: "ST",
    starRating: 5,
    description: "Modern luxury high-rise hotel with panoramic city views and rooftop infinity pool.",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    media: [
      {
        uri: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        category: "EXTERIOR"
      },
      {
        uri: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
        category: "ROOM"
      }
    ],
    rooms: {
      classic: { available: 40, basePrice: 350 },
      superior: { available: 30, basePrice: 450 },
      deluxe: { available: 20, basePrice: 550 },
      family: { available: 10, basePrice: 750 }
    },
    amenities: {
      wellness: ["Infinity pool", "Spa", "Fitness center", "Yoga studio"],
      dining: ["Rooftop restaurant", "Sky bar", "24/7 room service", "Executive lounge"],
      business: ["Business center", "Conference facilities", "Private meeting rooms"],
      services: ["24-hour front desk", "Concierge", "Valet parking", "Airport transfer"],
      facilities: ["Parking", "Electric car charging", "Helipad"]
    },
    mealPlans: ["roomOnly", "breakfast", "halfBoard", "fullBoard"],
    policies: {
      cancellation: "Free cancellation up to 24 hours before check-in",
      guarantee: "Credit card required for reservation",
      pets: "Not allowed",
      children: "Children under 12 stay free with parents"
    }
  }
];

// Function to calculate total price including all fees and taxes
const calculateTotalPrice = (basePrice, mealPlan, numberOfNights, numberOfGuests, extras = {}) => {
  let total = basePrice;
  
  // Add meal plan cost
  total += mealPlans[mealPlan].priceAdjustment * numberOfGuests * numberOfNights;
  
  // Add extra guest fees
  if (numberOfGuests > 2) {
    total += fees.additionalGuest * (numberOfGuests - 2) * numberOfNights;
  }
  
  // Add pet fee if applicable
  if (extras.hasPet) {
    total += fees.petFee * numberOfNights;
  }
  
  // Calculate taxes and fees
  const cityTax = total * fees.cityTax;
  const serviceCharge = total * fees.serviceCharge;
  const vat = total * fees.vatRate;
  
  return {
    basePrice: total,
    cityTax,
    serviceCharge,
    vat,
    totalPrice: total + cityTax + serviceCharge + vat,
    breakdown: {
      roomCharge: basePrice * numberOfNights,
      mealPlanCharge: mealPlans[mealPlan].priceAdjustment * numberOfGuests * numberOfNights,
      extraGuestCharge: numberOfGuests > 2 ? fees.additionalGuest * (numberOfGuests - 2) * numberOfNights : 0,
      petFee: extras.hasPet ? fees.petFee * numberOfNights : 0,
      taxes: cityTax + serviceCharge + vat
    }
  };
};

// Function to check room availability
const checkAvailability = (hotel, roomType, startDate, endDate, numberOfGuests) => {
  // Implementation for checking room availability
  const room = hotel.rooms[roomType];
  return {
    available: room.available > 0,
    remainingRooms: room.available,
    suitable: numberOfGuests <= roomTypes[roomType].maxOccupancy
  };
};

// Function to generate hotels for a city
export const generateHotelsForCity = (cityName, searchParams) => {
  const { checkIn, checkOut, guests, filters = {} } = searchParams;
  
  return hotelTemplates.map((template, index) => ({
    ...template,
    hotelId: `${cityName.substring(0, 3).toUpperCase()}${(index + 100).toString()}`,
    name: `${template.name} ${cityName}`,
    address: {
      lines: [`${Math.floor(Math.random() * 200) + 1} Main Street`],
      cityName: cityName,
      countryCode: "XX",
      postalCode: `${Math.floor(Math.random() * 90000) + 10000}`
    },
    geoCode: {
      latitude: (Math.random() * 180) - 90,
      longitude: (Math.random() * 360) - 180
    },
    // Calculate availability and prices for the search dates
    availability: Object.keys(template.rooms).map(roomType => ({
      roomType,
      ...checkAvailability(template, roomType, checkIn, checkOut, guests),
      pricing: calculateTotalPrice(
        template.rooms[roomType].basePrice,
        'breakfast', // default meal plan
        5, // number of nights (calculate from checkIn/checkOut)
        guests
      )
    }))
  }));
}; 