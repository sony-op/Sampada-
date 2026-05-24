const venues = [
  {
    id:1, name:"The Grand Pavilion", city:"Surat", type:"Wedding", capacity:500,
    price:85000, rating:4.9, reviews:234,
    img:"https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
    badge:"Popular", location:"Dumas Road, Surat",
    desc:"An opulent wedding destination featuring grand chandeliers, marble floors, and lush garden terrace. Perfect for royal-style celebrations.",
    amenities:["🍽️ In-house Catering","🅿️ Valet Parking","❄️ AC","🎤 Sound System","💡 LED Lighting","📸 Decor Setup","🛂 Bridal Suite","🔒 24/7 Security","🌿 Garden Area"],
    imgs:[
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80",
      "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=400&q=80"
    ]
  },
  {
    id:2, name:"Skyline Conference Centre", city:"Surat", type:"Corporate", capacity:300,
    price:45000, rating:4.8, reviews:187,
    img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    badge:"Top Rated", location:"Adajan, Surat",
    desc:"A state-of-the-art conference facility with high-speed internet, AV equipment, and panoramic city views from the 15th floor.",
    amenities:["📶 High-Speed WiFi","🖥️ AV Equipment","❄️ AC","☕ Catering","🅿️ Parking","🎤 Mics & PA","🏢 Breakout Rooms","🔒 Security","📋 Whiteboard"],
    imgs:[
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=400&q=80"
    ]
  },
  {
    id:3, name:"Garden of Eden Banquet", city:"Surat", type:"Birthday", capacity:200,
    price:32000, rating:4.7, reviews:312,
    img:"https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=600&q=80",
    badge:"Best Value", location:"Vesu, Surat",
    desc:"A magical garden venue draped in fairy lights and lush greenery. Ideal for intimate birthday celebrations and outdoor parties.",
    amenities:["🌿 Garden Setting","🍽️ Buffet Setup","🎵 DJ System","💡 Fairy Lights","📸 Photo Booth","🎂 Cake Table","❄️ AC Indoor Area","🅿️ Parking","🎉 Decor"],
    imgs:[
      "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80"
    ]
  },
  {
    id:4, name:"Royal Durbar Hall", city:"Surat", type:"Wedding", capacity:800,
    price:150000, rating:5.0, reviews:98,
    img:"https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?w=600&q=80",
    badge:"Luxury", location:"Piplod, Surat",
    desc:"Experience royalty at this heritage haveli-style banquet. Intricate Rajasthani architecture, royal decor and world-class hospitality.",
    amenities:["🏰 Heritage Architecture","🍽️ Royal Cuisine","🎶 Live Music","💃 Dance Floor","🕯️ Candlelit Ambiance","🛂 Bridal Rooms","🌿 Courtyard","🔒 Security","🅿️ Valet"],
    imgs:[
      "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?w=800&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&q=80",
      "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=400&q=80"
    ]
  },
  {
    id:5, name:"The Rooftop Lounge", city:"Surat", type:"Party", capacity:150,
    price:28000, rating:4.6, reviews:421,
    img:"https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=600&q=80",
    badge:"Trending", location:"Varachha, Surat",
    desc:"A stunning rooftop party venue with panoramic city views, a full bar setup, and a vibrant dance floor under the open sky.",
    amenities:["🌃 City View","🍹 Full Bar","🎵 DJ Setup","💡 Mood Lighting","🎤 Karaoke","📸 Selfie Wall","🌿 Open Air","🔒 Security","☕ Lounge Area"],
    imgs:[
      "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80",
      "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=400&q=80"
    ]
  },
  {
    id:6, name:"Emerald Convention Centre", city:"Surat", type:"Conference", capacity:600,
    price:70000, rating:4.8, reviews:156,
    img:"https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&q=80",
    badge:"Premium", location:"Pal, Surat",
    desc:"A world-class convention centre equipped with the latest AV technology, modular seating, and dedicated event management staff.",
    amenities:["🖥️ 4K Projection","📶 Fiber WiFi","🎤 Wireless Mics","☕ F&B Service","❄️ AC","🅿️ 500 Car Parking","🏢 10 Breakout Rooms","🔒 Security","🎬 Recording Studio"],
    imgs:[
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
    ]
  }
];

const invitations = [
  {
    id: 1,
    title: "Maharaja Royal Silk Scroll",
    type: "Boxed",
    theme: "Traditional",
    price: 250,
    minOrder: 100,
    rating: 5.0,
    reviewsCount: 142,
    tags: ["Royal", "Gold Foil", "Silk Scroll"],
    img: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=600&q=80",
    desc: "A breathtaking velvet-cased silk scroll invitation. Features traditional Indian border patterns in deep metallic gold hot-stamping with calligraphy script.",
    details: {
      paper: "Pure silk scroll inside a handmade crimson velvet box",
      printing: "Gold foil hot stamping & raised thermography",
      delivery: "12-15 working days",
      colors: ["Royal Crimson & Gold", "Emerald & Gold", "Navy & Gold"]
    },
    imgs: [
      "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=600&q=80",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&q=80"
    ]
  },
  {
    id: 2,
    title: "Aura of Flora Watercolor Suite",
    type: "Unboxed",
    theme: "Floral",
    price: 120,
    minOrder: 150,
    rating: 4.8,
    reviewsCount: 96,
    tags: ["Pastel", "Floral", "Handmade Paper"],
    img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
    desc: "Delicate watercolor pastel card set with botanical elements and beautiful deckled edges. Comes with an elegant matching envelope and envelope liner.",
    details: {
      paper: "300 GSM handmade recycled deckle-edge paper",
      printing: "Premium digital flat print with gold wax seal",
      delivery: "7-10 working days",
      colors: ["Pastel Mint & Blush", "Peach & Lavender", "Dusty Blue & Cream"]
    },
    imgs: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&q=80"
    ]
  },
  {
    id: 3,
    title: "Golden Royal Crest Box",
    type: "Boxed",
    theme: "Traditional",
    price: 380,
    minOrder: 80,
    rating: 4.9,
    reviewsCount: 118,
    tags: ["Premium Boxed", "Laser Cut", "Sweets Compartment"],
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80",
    desc: "A gorgeous rigid box card featuring a high-end laser-cut palace gate design. Includes a special partition for traditional sweets or premium dry fruits.",
    details: {
      paper: "Heavy rigid board wrapped in metallic textured sheet",
      printing: "Laser engraving, gold foil and blind embossing",
      delivery: "15-20 working days",
      colors: ["Maroon Gold", "Royal Ivory & Copper", "Deep Plum Gold"]
    },
    imgs: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80",
      "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=500&q=80"
    ]
  },
  {
    id: 4,
    title: "Vibrant Doodle Caricature E-Invite",
    type: "Digital",
    theme: "Modern",
    price: 1800,
    minOrder: 1,
    rating: 4.7,
    reviewsCount: 74,
    tags: ["Quirky", "Caricature", "Doodle"],
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80",
    desc: "A highly personalized, cute doodle caricature invitation showing your unique love story. Perfect for sharing instantly over WhatsApp and email.",
    details: {
      paper: "High-resolution PDF / PNG digital format",
      printing: "Bespoke digital design custom hand-drawn illustration",
      delivery: "3-5 working days",
      colors: ["Custom bright palette", "Retro chic", "Monotone modern"]
    },
    imgs: [
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80"
    ]
  },
  {
    id: 5,
    title: "Luxe Botanical Cinematic Video",
    type: "Video",
    theme: "Minimalist",
    price: 3500,
    minOrder: 1,
    rating: 4.9,
    reviewsCount: 88,
    tags: ["Cinematic", "Animated Video", "Royalty Music"],
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    desc: "An enchanting, animated video invitation featuring lush botanical watercolor movements, beautiful gold calligraphy, and soulful romantic background music.",
    details: {
      paper: "HD 1080p MP4 Cinematic Video Invite (30-45 seconds)",
      printing: "Digital motion graphics & custom audio synchronization",
      delivery: "4-6 working days",
      colors: ["Emerald Gold theme", "Pastel Rose theme", "Royal Navy theme"]
    },
    imgs: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80"
    ]
  },
  {
    id: 6,
    title: "Classic Ivory Monogram Suite",
    type: "Unboxed",
    theme: "Minimalist",
    price: 140,
    minOrder: 100,
    rating: 4.8,
    reviewsCount: 65,
    tags: ["Monogram", "Heavy Cardstock", "Debossed"],
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
    desc: "Clean, elegant, and timelessly modern monogram card. Debossed with a custom emblem on thick fine-textured cotton board with smooth gilded gold edges.",
    details: {
      paper: "600 GSM ultra-heavy premium cotton board",
      printing: "Deep letterpress debossing & metallic edge-gilding",
      delivery: "8-12 working days",
      colors: ["Ivory & Gold", "Charcoal & Rose Gold", "Forest Green & Silver"]
    },
    imgs: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80"
    ]
  },
  {
    id: 7,
    title: "Royal Peacock Velvet Boxed Set",
    type: "Boxed",
    theme: "Traditional",
    price: 320,
    minOrder: 100,
    rating: 4.9,
    reviewsCount: 154,
    tags: ["Velvet Box", "Peacock Theme", "Foil Printing"],
    img: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80",
    desc: "An ultra-luxurious, deep blue velvet box design featuring an exquisite gold Peacock laser-cut motif. Open the lid to reveal triple inserts with gold-gilded cards.",
    details: {
      paper: "Velvet wrapped hardbound box with pearlescent inserts",
      printing: "Multi-color foil printing & textured embossing",
      delivery: "12-16 working days",
      colors: ["Royal Blue Gold", "Vibrant Teal Gold", "Imperial Crimson Gold"]
    },
    imgs: [
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80",
      "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=500&q=80"
    ]
  },
  {
    id: 8,
    title: "Botanical Garden Eco Seed Card",
    type: "Unboxed",
    theme: "Minimalist",
    price: 95,
    minOrder: 200,
    rating: 4.6,
    reviewsCount: 42,
    tags: ["Eco-friendly", "Seed Paper", "Water-soluble"],
    img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
    desc: "Celebrate your love while caring for the Earth. Made of plantable seed paper embedded with wildflower seeds. Plant the card afterwards and watch it grow!",
    details: {
      paper: "280 GSM organic biodegradable plantable seed paper",
      printing: "Soy-based eco ink flat printing",
      delivery: "6-9 working days",
      colors: ["Natural Off-White", "Pale Sage Green", "Soft Lavender tint"]
    },
    imgs: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80"
    ]
  }
];

if(typeof module!=='undefined') module.exports = { venues, invitations };
