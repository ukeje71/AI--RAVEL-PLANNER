import Palour1 from "../assets/Images/Palour1.jpg";
import Palour2 from "../assets/Images/Palour2.jpg";
import Palour3 from "../assets/Images/Palour3.jpg";
import Palour4 from "../assets/Images/Palour4.jpg";
import Palour5 from "../assets/Images/Palour5.jpg";
import Palour6 from "../assets/Images/Palour6.jpg";
import Palour7 from "../assets/Images/Palour7.jpg";
import Emirate1 from "../assets/Images/Emirate1.jpg";
import Emirate2 from "../assets/Images/Emirate2.jpg";
import Emirate3 from "../assets/Images/Emirate3.jpg";
import Emirate4 from "../assets/Images/Emirate4.jpg";
import Emirate5 from "../assets/Images/Emirate5.jpg";
import Emirate6 from "../assets/Images/Emirate6.jpg";
import Tour1 from "../assets/Images/Conservation1.jpg";
import Tour2 from "../assets/Images/Conservation2.jpg";
import Tour3 from "../assets/Images/Conservation3.jpg";
import Tour4 from "../assets/Images/Conservation4.jpg";
import Tour5 from "../assets/Images/Conservation5.jpg";
import Tour6 from "../assets/Images/Conservation6.jpg";
import Tour7 from "../assets/Images/Conservation7.jpg";
import Tour8 from "../assets/Images/Conservation8.jpg";
import {
  Bed,
  BedDouble,
  KeyRound,
  Lightbulb,
  LucideBookText,
  LucideStar,
  MapPin,
  User,
} from "lucide-react";

export const Products = [
  // APARTMENTS (IDs 1-7)
  {
    id: 1,
    title: "Executive Suite",
    medium1: "Exceptional check-in experience",
    Text1:
      "Contactless check-in with a smart lock and personalized welcome gift.",
    Medium2: "Apartment Overview",
    Text2:
      "Chic executive suite with ocean views, modern amenities, and 24/7 electricity.",
    Medium3: "Location Overview",
    Text3:
      "Located in the heart of Victoria Island, close to restaurants, shops, and the beach.",
    image: Palour1,
    Price: "$"+200  +" per night",
    TimeFrame: "For 1 night - 18 June-20",
    category: "apartment",
    location: "Victoria Island",
    rating: 4.8,
    icon1: KeyRound,
    icon2: BedDouble,
  },
  {
    id: 2,
    title: "Pearl Residence",
    medium1: "Exceptional check-in experience",
    Text1:
      "Smooth airport pickup and key handover by a courteous host within minutes.",
    Medium2: "Apartment Overview",
    Text2:
      "Elegant 2-bedroom space with a homey feel, fully equipped kitchen, and smart TV.",
    Medium3: "Location Overview",
    Text3:
      "Located in central Wuse 2, close to malls, embassies, and top restaurants.",
    image: Palour2,
    Price: "$"+200  +" per night",
    TimeFrame: "For 1 night - 18 June-20",
    category: "apartment",
    location: "Wuse 2, Abuja",
    rating: 5.2,
    icon1: KeyRound,
    icon2: BedDouble,
  },
  {
    id: 3,
    title: "Nest Apartments ",
    medium1: "Exceptional check-in experience",
    Text1: "Fast self-check-in with 24/7 concierge assistance on arrival.",
    Medium2: "Apartment Overview",
    Text2:
      "Cozy, clean studio perfect for short stays, ideal for solo travelers or business guests.",
    Medium3: "Location Overview",
    Text3: "Quiet and secure area near business districts and transport links.",
    image: Palour3,
    Price: 200,
    TimeFrame: "For 1 night - 18 June-20",
    category: "apartment",
    location: " GRA Phase 2, Port Harcourt",
    rating: 4.8,
    icon1: KeyRound,
    icon2: BedDouble,
  },
  {
    id: 4,
    title: "Sapphire Lodge",
    medium1: "Exceptional check-in experience",
    Text1:
      "Seamless smart door access with virtual tour and welcome call from host..",
    Medium2: "Apartment Overview",
    Text2:
      "Trendy 1-bedroom apartment with smart home features and workspace setup.",
    Medium3: "Location Overview",
    Text3:
      "Situated in a quiet estate in Lekki Phase 1, minutes from entertainment hubs.",
    image: Palour4,
    Price: 200,
    TimeFrame: "For 1 night - 18 June-20",
    category: "apartment",
    location: "Lekki Phase 1, Lagos",
    rating: 4.8,
    icon1: KeyRound,
    icon2: BedDouble,
  },
  {
    id: 5,
    title: "Executive Suite",
    medium1: "Exceptional check-in experience",
    Text1:
      "Contactless check-in with a smart lock and personalized welcome gift.",
    Medium2: "Apartment Overview",
    Text2:
      "Chic executive suite with ocean views, modern amenities, and 24/7 electricity.",
    Medium3: "Location Overview",
    Text3:
      "Located in the heart of Victoria Island, close to restaurants, shops, and the beach.",
    image: Palour5,
    Price: 200,
    TimeFrame: "For 1 night - 18 June-20",
    category: "apartment",
    location: "Victoria Island",
    rating: 4.8,
    icon1: KeyRound,
    icon2: BedDouble,
  },
  {
    id: 6,
    title: "Executive Suite",
    medium1: "Exceptional check-in experience",
    Text1:
      "Contactless check-in with a smart lock and personalized welcome gift.",
    Medium2: "Apartment Overview",
    Text2:
      "Chic executive suite with ocean views, modern amenities, and 24/7 electricity.",
    Medium3: "Location Overview",
    Text3:
      "Located in the heart of Victoria Island, close to restaurants, shops, and the beach.",
    image: Palour6,
    Price: 200,
    TimeFrame: "For 1 night - 18 June-20",
    category: "apartment",
    location: "Victoria Island",
    rating: 4.8,
    icon1: KeyRound,
    icon2: BedDouble,
  },
  {
    id: 7,
    title: "Executive Suite",
    medium1: "Exceptional check-in experience",
    Text1:
      "Contactless check-in with a smart lock and personalized welcome gift.",
    Medium2: "Apartment Overview",
    Text2:
      "Chic executive suite with ocean views, modern amenities, and 24/7 electricity.",
    Medium3: "Location Overview",
    Text3:
      "Located in the heart of Victoria Island, close to restaurants, shops, and the beach.",
    image: Palour7,
    Price: 200,
    TimeFrame: "For 1 night - 18 June-20",
    category: "apartment",
    location: "Victoria Island",
    rating: 4.8,
    icon1: KeyRound,
    icon2: BedDouble,
  },

  // AIRLINES (IDs 8-14)
  {
    id: 8,
    title: "Emirates Business Class (DXB-LOS)",
    medium1: "Premium Lounge Access",
    Text1:
      "Enjoy exclusive access to Emirates Business Class lounges worldwide with gourmet dining and spa facilities.",
    Medium2: "Flight Overview",
    Text2:
      "Spacious lie-flat seats, gourmet cuisine, and award-winning in-flight entertainment system.",
    Medium3: "Route Information",
    Text3:
      "Direct flight from Dubai to Lagos with a flight time of approximately 7 hours 30 minutes.",
    image: Emirate1,
    Price: 2500,
    TimeFrame: "Departure: 15 June 2023",
    category: "airline",
    location: "Air Nigeria",
    rating: 2.2,
    icon1: LucideStar,
    icon2: LucideBookText,
  },
  {
    id: 9,
    title: "Qatar Airways Economy (LOS-DOH)",
    medium1: "Comfort Guarantee",
    Text1:
      "Economy class seats with extra legroom and adjustable headrests for maximum comfort.",
    Medium2: "Flight Overview",
    Text2:
      "Enjoy complimentary meals and beverages with a wide selection of entertainment options.",
    Medium3: "Route Information",
    Text3:
      "Connecting flight from Lagos to Doha with a layover time of 2 hours.",
    image: Emirate2,
    Price: 850,
    TimeFrame: "Departure: 10 July 2023",
    category: "airline",
    location: "Emirates",
    rating: 4.2,
    icon1: LucideStar,
    icon2: LucideBookText,
  },
  {
    id: 10,
    title: "British Airways First Class (LHR-LOS)",
    medium1: "Exclusive Check-in",
    Text1:
      "Private first class check-in area with dedicated security lane and concierge service.",
    Medium2: "Flight Overview",
    Text2:
      "Fully enclosed private suites with flat-bed seats and premium amenity kits.",
    Medium3: "Route Information",
    Text3:
      "Direct flight from London Heathrow to Lagos with a flight time of 6 hours 45 minutes.",
    image: Emirate3,
    Price: 3800,
    TimeFrame: "Departure: 5 August 2023",
    category: "airline",
    location: "Heathrow Airport",
    rating: 4.8,
    icon1: LucideStar,
    icon2: LucideBookText,
  },
  {
    id: 11,
    title: "Air Peace Economy (LOS-JNB)",
    medium1: "Regional Comfort",
    Text1:
      "Modern aircraft with comfortable seating and friendly Nigerian hospitality.",
    Medium2: "Flight Overview",
    Text2: "Complimentary meals and beverages served during the flight.",
    Medium3: "Route Information",
    Text3:
      "Direct flight from Lagos to Johannesburg with a flight time of 5 hours 30 minutes.",
    image: Emirate4,
    Price: 750,
    TimeFrame: "Departure: 8 November 2023",
    category: "airline",
    location: "Murtala Muhammed International Airport",
    rating: 4.2,
    icon1: LucideStar,
    icon2: LucideBookText,
  },
  {
    id: 12,
    title: "Turkish Airlines Business Class (IST-LOS)",
    medium1: "Chef on Board",
    Text1:
      "Enjoy meals prepared by Turkish Airlines' flying chefs with à la carte menu options.",
    Medium2: "Flight Overview",
    Text2:
      "180-degree flat beds with massage function and noise-canceling headphones.",
    Medium3: "Route Information",
    Text3:
      "Direct flight from Istanbul to Lagos with a flight time of 5 hours 15 minutes.",
    image: Emirate5,
    Price: 2100,
    TimeFrame: "Departure: 3 October 2023",
    category: "airline",
    location: "Istanbul Airport",
    rating: 4.7,
    icon1: LucideStar,
    icon2: LucideBookText,
  },
  {
    id: 13,
    title: "Ethiopian Airlines Premium Economy (ADD-LOS)",
    medium1: "Enhanced Comfort",
    Text1:
      "Wider seats with more recline and legroom compared to standard economy class.",
    Medium2: "Flight Overview",
    Text2:
      "Priority boarding and upgraded meal service with complimentary drinks.",
    Medium3: "Route Information",
    Text3:
      "Connecting flight from Addis Ababa to Lagos with a 1.5 hour layover.",
    image: Emirate6,
    Price: 1200,
    TimeFrame: "Departure: 12 September 2023",
    category: "airline",
    location: "Bole International Airport",
    rating: 4.3,
    icon1: LucideStar,
    icon2: LucideBookText,
  },
  {
    id: 14,
    title: "Lufthansa First Class (FRA-LOS)",
    medium1: "Private Terminal",
    Text1:
      "Access to Lufthansa's exclusive First Class Terminal in Frankfurt with personal assistant.",
    Medium2: "Flight Overview",
    Text2:
      "Private suites with seating and sleeping areas, premium dining, and luxury amenities.",
    Medium3: "Route Information",
    Text3:
      "Direct flight from Frankfurt to Lagos with a flight time of 6 hours 15 minutes.",
    image: Emirate4,
    Price: 4200,
    TimeFrame: "Departure: 15 December 2023",
    category: "airline",
    location: "Frankfurt Airport",
    rating: 4.9,
    icon1: LucideStar,
    icon2: LucideBookText,
  },

  // TOURS (IDs 15-21)
  {
    id: 15,
    title: "Lekki Conservation Centre Nature Walk",
    medium1: "Unique Experience",
    Text1:
      "Address: Colosseum Entrance, Rome Meeting Point: Colosseum Main Gate\nNearby: Roman Forum, Palatine Hill",
    Medium2: "Tour Overview",
    Text2:
      "Guided nature Tour through 78 hectares of protected wetlands and savannah with opportunities to see monkeys, crocodiles, and exotic birds.",
    Medium3: "Location Highlights",
    Text3:
      "Located in Lekki, just 30 minutes from Victoria Island with easy access to other attractions.",
    image: Tour1,
    Price: 25,
    TimeFrame: "Daily Tours from 9AM-5PM",
    category: "Tour",
    location: "Lekki, Lagos",
    rating: 4.7,
    icon1: MapPin,
    icon2: User,
    icon3:Lightbulb,
  },
  {
    id: 16,
    title: "Obudu Mountain Resort Getaway",
    medium1: "Premium Package",
    Text1:
      "All-inclusive stay at Nigeria's premier mountain resort with private transfers.",
    Medium2: "Resort Features",
    Text2:
      "Luxury cottages, natural swimming pools, cable car rides, and the highest point in Cross River State with breathtaking views.",
    Medium3: "Travel Information",
    Text3:
      "Includes roundtrip flights from Lagos to Calabar and private transfers to the resort.",
    image: Tour2,
    Price: 450,
    TimeFrame: "3 days/2 nights package",
    category: "Tour",
    location: "Obudu",
    rating: 4.9,
    icon1: MapPin,
    icon2: User,
    icon3:Lightbulb,
  },
  {
    id: 17,
    title: "Badagry Slave Route History Tour",
    medium1: "Cultural Immersion",
    Text1:
      "Walk through history with expert guides explaining Nigeria's role in the transatlantic slave trade.",
    Medium2: "Tour Itinerary",
    Text2:
      "Visit the Slave Port, Museum of Slavery, Point of No Return, and the first storey building in Nigeria.",
    Medium3: "Logistics",
    Text3:
      "Air-conditioned transport from Lagos with lunch at a local restaurant included.",
    image: Tour3,
    Price: 75,
    TimeFrame: "Full day Tour",
    category: "Tour",
    location: "Badagry, Lagos",
    rating: 4.5,
    icon1: MapPin,
    icon2: User,
    icon3:Lightbulb,
  },
  {
    id: 18,
    title: "Yankari Game Safari Experience",
    medium1: "Wildlife Adventure",
    Text1:
      "Morning and evening safari drives to see elephants, lions, baboons and other wildlife in their natural habitat.",
    Medium2: "Resort Amenities",
    Text2:
      "Stay in comfortable lodges with access to Wikki Warm Springs - Africa's largest natural warm water spring.",
    Medium3: "Travel Package",
    Text3:
      "Includes return flights from Lagos to Bauchi, all transfers, full board accommodation and guided Tours.",
    image: Tour4,
    Price: 600,
    TimeFrame: "4 days/3 nights",
    category: "Tour",
    location: "Yankari, Bauchi",
    rating: 4.8,
    icon1: MapPin,
    icon2: User,
    icon3:Lightbulb,
  },
  {
    id: 19,
    title: "Nike Art Gallery Cultural Day",
    medium1: "Artistic Experience",
    Text1:
      "Private guided Tour of Nigeria's largest art collection with the opportunity to meet resident artists.",
    Medium2: "Activities",
    Text2:
      "Includes art demonstration, traditional fabric dyeing workshop, and lunch with local cuisine.",
    Medium3: "Location",
    Text3:
      "Located in Lekki Phase 1 with beautiful lagoon views and easy access to other attractions.",
    image: Tour5,
    Price: 40,
    TimeFrame: "Daily from 10AM-6PM",
    category: "Tour",
    location: "Lekki, Lagos",
    rating: 4.6,
    icon1: MapPin,
    icon2: User,
    icon3:Lightbulb,
  },
  {
    id: 20,
    title: "Olumo Rock Historical Tour",
    medium1: "Heritage Site",
    Text1:
      "Meeting Point: Pyramid Entrance of the Louvre\nNearby: Musée d’Orsay, Notre-Dame Cathedral",
    Medium2: "Tour Features",
    Text2:
      "Visit sacred caves, historical shrines, and enjoy panoramic views of Abeokuta from the summit.",
    Medium3: "Travel Details",
    Text3:
      "Roundtrip transport from Lagos with knowledgeable local guides and lunch included.",
    image: Tour6,
    Price: 65,
    TimeFrame: "Day trip",
    category: "Tour",
    location: "Abeokuta, Ogun",
    rating: 4.4,
    icon1: MapPin,
    icon2: User,
    icon3:Lightbulb,
  },
  {
    id: 21,
    title: "Calabar Carnival VIP Experience",
    medium1: "Festival Package",
    Text1:
      "Premium access to Africa's largest street carnival with reserved grandstand seating.",
    Medium2: "Package Inclusions",
    Text2:
      "4-star accommodation, all carnival events access, private transportation, and exclusive parties.",
    Medium3: "Event Information",
    Text3:
      "Held annually in December featuring colorful parades, cultural displays and international performers.",
    image: Tour7,
    Price: 800,
    TimeFrame: "5 days/4 nights",
    category: "Tour",
    location: "Calabar, Cross River",
    rating: 4.9,
    icon1: MapPin,
    icon2: User,
    icon3:Lightbulb,
  },
];
