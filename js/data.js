const venues = [
  {
    id:1, name:"The Grand Pavilion", city:"Mumbai", type:"Wedding", capacity:500,
    price:85000, rating:4.9, reviews:234,
    img:"https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
    badge:"Popular", location:"Bandra West, Mumbai",
    desc:"An opulent wedding destination featuring grand chandeliers, marble floors, and lush garden terrace. Perfect for royal-style celebrations.",
    amenities:["🍽️ In-house Catering","🅿️ Valet Parking","❄️ AC","🎤 Sound System","💡 LED Lighting","📸 Decor Setup","🛂 Bridal Suite","🔒 24/7 Security","🌿 Garden Area"],
    imgs:[
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80",
      "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=400&q=80"
    ]
  },
  {
    id:2, name:"Skyline Conference Centre", city:"Delhi", type:"Corporate", capacity:300,
    price:45000, rating:4.8, reviews:187,
    img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    badge:"Top Rated", location:"Connaught Place, Delhi",
    desc:"A state-of-the-art conference facility with high-speed internet, AV equipment, and panoramic city views from the 15th floor.",
    amenities:["📶 High-Speed WiFi","🖥️ AV Equipment","❄️ AC","☕ Catering","🅿️ Parking","🎤 Mics & PA","🏢 Breakout Rooms","🔒 Security","📋 Whiteboard"],
    imgs:[
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=400&q=80"
    ]
  },
  {
    id:3, name:"Garden of Eden Banquet", city:"Pune", type:"Birthday", capacity:200,
    price:32000, rating:4.7, reviews:312,
    img:"https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=600&q=80",
    badge:"Best Value", location:"Koregaon Park, Pune",
    desc:"A magical garden venue draped in fairy lights and lush greenery. Ideal for intimate birthday celebrations and outdoor parties.",
    amenities:["🌿 Garden Setting","🍽️ Buffet Setup","🎵 DJ System","💡 Fairy Lights","📸 Photo Booth","🎂 Cake Table","❄️ AC Indoor Area","🅿️ Parking","🎉 Decor"],
    imgs:[
      "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80"
    ]
  },
  {
    id:4, name:"Royal Durbar Hall", city:"Jaipur", type:"Wedding", capacity:800,
    price:150000, rating:5.0, reviews:98,
    img:"https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?w=600&q=80",
    badge:"Luxury", location:"Civil Lines, Jaipur",
    desc:"Experience royalty at this heritage haveli-style banquet. Intricate Rajasthani architecture, royal decor and world-class hospitality.",
    amenities:["🏰 Heritage Architecture","🍽️ Royal Cuisine","🎶 Live Music","💃 Dance Floor","🕯️ Candlelit Ambiance","🛂 Bridal Rooms","🌿 Courtyard","🔒 Security","🅿️ Valet"],
    imgs:[
      "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?w=800&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&q=80",
      "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=400&q=80"
    ]
  },
  {
    id:5, name:"The Rooftop Lounge", city:"Bangalore", type:"Party", capacity:150,
    price:28000, rating:4.6, reviews:421,
    img:"https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=600&q=80",
    badge:"Trending", location:"Indiranagar, Bangalore",
    desc:"A stunning rooftop party venue with panoramic city views, a full bar setup, and a vibrant dance floor under the open sky.",
    amenities:["🌃 City View","🍹 Full Bar","🎵 DJ Setup","💡 Mood Lighting","🎤 Karaoke","📸 Selfie Wall","🌿 Open Air","🔒 Security","☕ Lounge Area"],
    imgs:[
      "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80",
      "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=400&q=80"
    ]
  },
  {
    id:6, name:"Emerald Convention Centre", city:"Hyderabad", type:"Conference", capacity:600,
    price:70000, rating:4.8, reviews:156,
    img:"https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&q=80",
    badge:"Premium", location:"HITEC City, Hyderabad",
    desc:"A world-class convention centre equipped with the latest AV technology, modular seating, and dedicated event management staff.",
    amenities:["🖥️ 4K Projection","📶 Fiber WiFi","🎤 Wireless Mics","☕ F&B Service","❄️ AC","🅿️ 500 Car Parking","🏢 10 Breakout Rooms","🔒 Security","🎬 Recording Studio"],
    imgs:[
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
    ]
  }
];

if(typeof module!=='undefined') module.exports=venues;
