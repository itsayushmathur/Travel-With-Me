import React, { useState } from "react";
import Popup from "./Popup";

const Booking = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    // Previous destinations...
    {
      name: "Paris",
      intro:
        "Welcome to the city of love and lights, Paris. Explore its iconic landmarks such as the Eiffel Tower and Louvre Museum.",
      travelAdvice:
        "When traveling to Paris, it's recommended to familiarize yourself with the local transportation system and be cautious of pickpockets.",
      bestTime:
        "The best time to visit Paris is during the spring season when the weather is mild and the city blooms with cherry blossoms.",
      gettingAround:
        "Getting around in Paris is convenient with an extensive metro network and a bike-sharing system called Vélib.",
      customs:
        "Experience the cultural customs and etiquette of Paris by greeting locals with a polite 'Bonjour' and embracing the café culture.",
      placesToSee:
        "Discover iconic landmarks like Notre-Dame Cathedral, Montmartre, and take a leisurely stroll along the Seine River.",
      whatToEat:
        "Indulge in the exquisite French cuisine of Paris, including croissants, macarons, escargots, and the famous French baguette.",
    },
    {
      name: "Tokyo",
      intro:
        "Immerse yourself in the bustling metropolis of Tokyo and experience its vibrant blend of tradition and modernity.",
      travelAdvice:
        "Before your trip to Tokyo, make sure to learn some basic Japanese phrases and be respectful of local customs.",
      bestTime:
        "Tokyo is best visited during the spring season when cherry blossoms adorn the city, creating a picturesque scenery.",
      gettingAround:
        "Navigating Tokyo's extensive transportation network is easy with the efficient subway system and the iconic Shinkansen bullet trains.",
      customs:
        "Learn about the unique customs and traditions of Tokyo, such as bowing as a sign of respect and taking off shoes in certain establishments.",
      placesToSee:
        "Explore the vibrant neighborhoods of Shibuya and Shinjuku, visit historic temples like Senso-ji, and enjoy panoramic views from Tokyo Skytree.",
      whatToEat:
        "Savor the diverse and delicious flavors of Tokyo's cuisine, including sushi, ramen, tempura, and street food like takoyaki and okonomiyaki.",
    },
    {
      name: "Cape Town",
      intro:
        "Experience the beauty and diversity of Cape Town, a city nestled between mountains and the ocean in South Africa.",
      travelAdvice:
        "When traveling to Cape Town, it's important to take necessary precautions regarding personal safety and be aware of the local wildlife.",
      bestTime:
        "The ideal time to visit Cape Town is during the summer months (December to February) when you can enjoy outdoor activities and beach visits.",
      gettingAround:
        "Getting around Cape Town is made easy with various transportation options, including MyCiti buses, taxis, and rental cars.",
      customs:
        "Discover the cultural customs and traditions of Cape Town by respecting local customs, such as greetings and etiquette in different settings.",
      placesToSee:
        "Explore the breathtaking landscapes of Table Mountain, Cape Point, and the picturesque beaches of Camps Bay and Clifton.",
      whatToEat:
        "Taste the flavors of the vibrant culinary scene in Cape Town, including traditional dishes like bobotie, biltong, and seafood delicacies.",
    },
    {
      name: "Sydney",
      intro:
        "Welcome to the stunning city of Sydney, known for its iconic Sydney Opera House and picturesque harbor.",
      travelAdvice:
        "Before your trip to Sydney, familiarize yourself with the local transport options, including the Opal card for convenient travel.",
      bestTime:
        "Sydney is best visited during the spring and autumn seasons when the weather is mild, and there are various cultural events and festivals.",
      gettingAround:
        "Getting around Sydney is convenient with an extensive public transportation network, including buses, trains, and ferries.",
      customs:
        "Learn about the local customs and traditions of Sydney, such as saying 'G'day' as a casual greeting and respecting the Indigenous heritage.",
      placesToSee:
        "Discover the iconic landmarks of Sydney, including the Sydney Harbour Bridge, Bondi Beach, and the Royal Botanic Garden.",
      whatToEat:
        "Indulge in the diverse and delicious cuisine of Sydney, from fresh seafood at Sydney Fish Market to multicultural dishes in Chinatown.",
    },
    {
      name: "New York City",
      intro:
        "Experience the vibrant energy of New York City, the city that never sleeps, with its iconic skyline and cultural diversity.",
      travelAdvice:
        "When planning your trip to New York City, consider purchasing a MetroCard for convenient travel on the subway and buses.",
      bestTime:
        "The best time to visit New York City is during the spring and fall seasons when the weather is pleasant and the city hosts various events.",
      gettingAround:
        "Getting around New York City is made convenient with an extensive subway system, iconic yellow taxis, and rideshare services.",
      customs:
        "Discover the unique customs and melting pot culture of New York City by embracing its diversity and respecting personal space.",
      placesToSee:
        "Explore the iconic attractions and diverse neighborhoods of New York City, including Times Square, Central Park, and the Statue of Liberty.",
      whatToEat:
        "Delight in the culinary delights and international cuisine of New York City, from classic New York-style pizza to gourmet food trucks.",
    },
    {
      name: "Rome",
      intro:
        "Step into the ancient city of Rome, where history comes alive with its magnificent ruins and iconic landmarks.",
      travelAdvice:
        "Before your visit to Rome, familiarize yourself with the local transportation options and be cautious of pickpockets in crowded areas.",
      bestTime:
        "The best time to visit Rome is during the spring and fall seasons when the weather is mild and the tourist crowds are relatively smaller.",
      gettingAround:
        "Getting around Rome is convenient with an extensive public transportation system, including buses, trams, and the metro.",
      customs:
        "Experience the customs and traditions of Rome by greeting locals with a friendly 'Buongiorno' and embracing the Italian dining culture.",
      placesToSee:
        "Explore the historic sites of Rome, such as the Colosseum, Vatican City, and the Roman Forum, to immerse yourself in its rich history.",
      whatToEat:
        "Indulge in the delicious Italian cuisine of Rome, including authentic pasta dishes, pizza, gelato, and espresso.",
    },
    {
      name: "Bangkok",
      intro:
        "Welcome to the vibrant city of Bangkok, where ancient temples and bustling markets coexist with modern skyscrapers.",
      travelAdvice:
        "When traveling to Bangkok, it's advisable to dress modestly when visiting temples and be cautious of scams and touts.",
      bestTime:
        "The best time to visit Bangkok is during the cooler months of November to February when the weather is more comfortable for exploring.",
      gettingAround:
        "Navigating Bangkok is made easy with its extensive public transportation system, including the BTS Skytrain, MRT subway, and river taxis.",
      customs:
        "Learn about the customs and etiquette of Bangkok, such as showing respect by removing shoes in temples and not touching someone's head.",
      placesToSee:
        "Discover the grandeur of temples like Wat Arun and Wat Phra Kaew, explore the vibrant street markets, and cruise along the Chao Phraya River.",
      whatToEat:
        "Experience the flavors of Thai cuisine in Bangkok, from savory street food like pad Thai and green curry to sweet treats like mango sticky rice.",
    },
    {
      name: "Barcelona",
      intro:
        "Immerse yourself in the vibrant city of Barcelona, known for its unique architecture, rich history, and vibrant cultural scene.",
      travelAdvice:
        "Before your trip to Barcelona, familiarize yourself with the public transportation system and be cautious of pickpockets in crowded areas.",
      bestTime:
        "Barcelona is best visited during the spring and fall seasons when the weather is pleasant for exploring the city's attractions.",
      gettingAround:
        "Getting around Barcelona is convenient with its efficient metro system, buses, and walking, as many attractions are within walking distance.",
      customs:
        "Discover the customs and traditions of Barcelona by embracing the local Catalan culture and trying regional dishes and wines.",
      placesToSee:
        "Explore the architectural marvels of Antoni Gaudí, including the famous Sagrada Família and Park Güell, and stroll along the vibrant street of La Rambla.",
      whatToEat:
        "Indulge in the delicious Catalan cuisine of Barcelona, such as tapas, paella, and local specialties like calcots and crema catalana.",
    },
    {
      name: "Rio de Janeiro",
      intro:
        "Welcome to the lively city of Rio de Janeiro, where stunning beaches, vibrant culture, and lively carnivals await you.",
      travelAdvice:
        "When visiting Rio de Janeiro, be cautious of your belongings, especially on crowded beaches and avoid venturing into unsafe areas.",
      bestTime:
        "The best time to visit Rio de Janeiro is during the summer months of December to March when the weather is warm and the city comes alive with festivals.",
      gettingAround:
        "Getting around Rio de Janeiro is made easy with taxis, ride-hailing services, and the extensive metro system.",
      customs:
        "Experience the vibrant customs and traditions of Rio de Janeiro by joining in the festive celebrations, such as Carnival, and embracing the beach culture.",
      placesToSee:
        "Discover the iconic landmarks of Rio de Janeiro, including the Christ the Redeemer statue, Copacabana Beach, and the Sugarloaf Mountain.",
      whatToEat:
        "Indulge in the flavors of Brazilian cuisine in Rio de Janeiro, from feijoada (black bean stew) to churrasco (Brazilian barbecue) and refreshing caipirinhas.",
    },
    {
      name: "Tokyo",
      intro:
        "Step into the bustling metropolis of Tokyo, where traditional Japanese culture blends seamlessly with futuristic technology.",
      travelAdvice:
        "When visiting Tokyo, familiarize yourself with the efficient public transportation system and be mindful of Japanese customs and etiquette.",
      bestTime:
        "The best time to visit Tokyo is during the spring and autumn seasons when the weather is pleasant and the city is adorned with cherry blossoms or autumn foliage.",
      gettingAround:
        "Getting around Tokyo is made convenient with its extensive subway network, buses, and trains, allowing easy access to various attractions.",
      customs:
        "Immerse yourself in Japanese customs and traditions by practicing proper etiquette, such as bowing and removing shoes in certain establishments.",
      placesToSee:
        "Explore the vibrant neighborhoods of Tokyo, visit iconic landmarks like the Tokyo Tower and Meiji Shrine, and indulge in shopping and dining experiences.",
      whatToEat:
        "Savor the diverse flavors of Japanese cuisine in Tokyo, from sushi and ramen to tempura and traditional tea ceremonies.",
    },
    // Add more destinations here
  ];

  const openPopup = (index) => {
    setSelectedDestination(destinations[index]);
  };

  const closePopup = () => {
    setSelectedDestination(null);
  };

  return (
    <div id="booking" className="max-w-[1140px] m-auto w-full -p-4">
      <div className="flex flex-col my-2 py-2">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Destinations
          </span>
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white border rounded-md p-4 cursor-pointer shadow-md"
              onClick={() => openPopup(index)}
            >
              <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
              <p className="text-gray-600">{destination.intro}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedDestination && (
        <Popup destination={selectedDestination} onClose={closePopup} />
      )}
    </div>
  );
};

export default Booking;
