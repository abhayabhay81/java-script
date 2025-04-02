const sampleListings = [
  {
    "title": "My New Villa",
    "description": "By the beach",
    "image": "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "price": 1200,
    "location": "Calangute, Goa",
    "country": "India"
  },
  {
    "title": "Luxury Beach House",
    "description": "Ocean view with modern amenities",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
    "price": 2500,
    "location": "Baga Beach, Goa",
    "country": "India"
  },
  {
    "title": "Cozy Cottage",
    "description": "Perfect for a peaceful retreat",
    "image": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
    "price": 800,
    "location": "Lonavala, Maharashtra",
    "country": "India"
  },
  {
    "title": "Mountain View Cabin",
    "description": "Serene atmosphere with a stunning view",
    "image": "https://i.ytimg.com/vi/KDMUddVZqwo/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDPZi1_Rx9EyY9j7NW8vN5FSeEv5g",
    "price": 1500,
    "location": "Manali, Himachal Pradesh",
    "country": "India"
  },
  {
    "title": "Cityscape Penthouse",
    "description": "Modern apartment in the heart of the city",
    "image": "https://media.istockphoto.com/id/2155879397/photo/house-in-a-charming-neighborhood-with-stunning-sidewalk-landscaping.jpg?s=612x612&w=0&k=20&c=nQJOUoNb2RNev3QVNjIohcmxQABCTetCdgfnc8MV8sU=",
    "price": 3500,
    "location": "Mumbai, Maharashtra",
    "country": "India"
  },
  {
    "title": "Heritage Villa",
    "description": "A traditional Goan-style villa with a private pool",
    "image": "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201702280041528135-8ad05efaf8ff11e7b5e002755708f0b3.jpg",
    "price": 1800,
    "location": "Panaji, Goa",
    "country": "India"
  },
  {
    "title": "Seaside Bungalow",
    "description": "Enjoy a stay by the ocean with spectacular views",
    "image": "https://media.istockphoto.com/id/2155879397/photo/house-in-a-charming-neighborhood-with-stunning-sidewalk-landscaping.jpg?s=1024x1024&w=is&k=20&c=v0DeDQonRpxL3G60S2IOwL-5OEb8YVNaz0ItH02svKU=",
    "price": 2200,
    "location": "Alleppey, Kerala",
    "country": "India"
  },
  {
    "title": "Forest Lodge",
    "description": "Escape into nature with this peaceful retreat",
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    "price": 900,
    "location": "Coorg, Karnataka",
    "country": "India"
  },
  {
    "title": "Hilltop Haven",
    "description": "A luxurious getaway in the hills",
    "image": "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjY2NDEyODQzODA3ODg0MDIy/original/7d7e3557-a377-4a9e-96f4-5862b3a31872.jpeg?im_w=720",
    "price": 2000,
    "location": "Ooty, Tamil Nadu",
    "country": "India"
  },
  {
    "title": "Lakeview Chalet",
    "description": "Scenic lake views and cozy interiors",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAOqX1LtJA0B1wm8oLIAIGdir8huIB0slBA&s",
    "price": 1700,
    "location": "Nainital, Uttarakhand",
    "country": "India"
  },

  {
    "title": "Mountain Retreat",
    "description": "Secluded cabin with breathtaking mountain views",
    "image": "https://b-cdn.springnest.com/media/img/sh/53437636834099b7.jpg?crop=1024%2C410%2C0%2C153&width=1500",
    "price": 2200,
    "location": "Shimla, Himachal Pradesh",
    "country": "India"
  },
  {
    "title": "Beachfront Villa",
    "description": "Luxury villa with direct beach access",
    "image": "https://www.theluxurysignature.com/wp-content/uploads/2015/02/villa-anavaya-samui-seaview.jpg",
    "price": 3500,
    "location": "Goa",
    "country": "India"
  },
  {
    "title": "City Apartment",
    "description": "Modern apartment in the heart of the city",
    "image": "https://www.casagrand.co.in/wp-content/uploads/2024/04/clubhouse-1-scaled.jpg?ver=1.201",
    "price": 1500,
    "location": "Mumbai, Maharashtra",
    "country": "India"
  },
  {
    "title": "Riverside Cottage",
    "description": "Quaint cottage by a peaceful river",
    "image": "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=60",
    "price": 1800,
    "location": "Manali, Himachal Pradesh",
    "country": "India"
  },
  {
    "title": "Forest Lodge",
    "description": "Rustic lodge surrounded by dense forest",
    "image": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=60",
    "price": 2000,
    "location": "Coorg, Karnataka",
    "country": "India"
  },
  {
    "title": "Desert Oasis",
    "description": "Luxurious retreat in the desert landscape",
    "image": "https://www.wondergifts.ae/cdn/shop/files/One_20Night_20Hotel_20Stay_20in_20Dubai_20with_20IMG_20World_20Tickets_20for_20Two.webp?v=1719022504",
    "price": 2800,
    "location": "Jaisalmer, Rajasthan",
    "country": "India"
  },
  {
    "title": "Tea Garden Bungalow",
    "description": "Charming bungalow amidst tea plantations",
    "image": "https://www.getbengal.com/ckeditor/userfiles/1619868611-Namring-0001.jpg",
    "price": 1900,
    "location": "Darjeeling, West Bengal",
    "country": "India"
  },
  {
    "title": "Hilltop Villa",
    "description": "Elegant villa with panoramic hill views",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_naP9sTwBOjsT8JhUeUjugMsamXKos8i-A&s",
    "price": 2500,
    "location": "Mussoorie, Uttarakhand",
    "country": "India"
  },
  {
    "title": "Backwater Houseboat",
    "description": "Traditional houseboat experience on Kerala backwaters",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLj2NSIV3M38RbCPQ5NvQsYMuiwBvd-bcoA&s",
    "price": 3000,
    "location": "Alleppey, Kerala",
    "country": "India"
  },
  {
    "title": "Historical Palace",
    "description": "Stay in a restored historical palace",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpnxcZ9HiLK0Wga0H3v0fJKQg_2IlATWIww&s",
    "price": 4000,
    "location": "Udaipur, Rajasthan",
    "country": "India"
  },
  {
    "title": "Rural Farmhouse",
    "description": "Experience rural life in a traditional farmhouse",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtE13PcQ2ihXPfo-vjfLdxznvfTLdrUNsUmw&s",
    "price": 1600,
    "location": "Hampi, Karnataka",
    "country": "India"
  },
  {
    "title": "Wildlife Resort",
    "description": "Resort near a national park with wildlife sightings",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIP84QUJRv1Vtst9R0lz1bdfWs2QKDIm3Q4w&s",
    "price": 2700,
    "location": "Jim Corbett National Park, Uttarakhand",
    "country": "India"
  },
  {
    "title": "Coastal Bungalow",
    "description": "Relaxing bungalow near the coastline",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbDHpIenbb-QFOX2Mxv5pNPHYvgCkGBOW7A&s",
    "price": 2100,
    "location": "Pondicherry",
    "country": "India"
  },
  {
    "title": "Spiritual Ashram",
    "description": "Find peace in a traditional spiritual ashram",
    "image": "https://r1imghtlak.mmtcdn.com/a61bab69-4eec-4f15-bc8e-ef3451345c6f.jpeg",
    "price": 1400,
    "location": "Rishikesh, Uttarakhand",
    "country": "India"
  },
  {
    "title": "Snow Peak Cabin",
    "description": "Cozy cabin with stunning snow-capped peak views",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuT8JFC8HnAmiDoil4zfgYYgOCo1G0U2hC-w&s",
    "price": 2300,
    "location": "Gulmarg, Jammu and Kashmir",
    "country": "India"
  },
  {
    "title": "Lakeview Chalet",
    "description": "Scenic lake views and cozy interiors",
    "image": "https://static.toiimg.com/thumb/89433372.cms?resizemode=4&width=400",
    "price": 1700,
    "location": "Nainital, Uttarakhand",
    "country": "India"
  },
  {
    "title": "Ancient Temple Stay",
    "description": "Stay near ancient temples and experience cultural heritage",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOwoZzUWWi-9Q1ee7UtltSeKcYjdvn6LHGw&s",
    "price": 1950,
    "location": "Madurai, Tamil Nadu"
  }
]

module.exports = { data: sampleListings };



