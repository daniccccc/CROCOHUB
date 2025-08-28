export const siteConfig = {
  name: "CROCO HUB",
  description: "Hub sociale per fuggire dalla noia - Giochi • Relax • Community",
  tagline: "Il tuo rifugio dalla noia quotidiana",
  url: "https://croco-hub.vercel.app",
  ogImage: "https://croco-hub.vercel.app/og.jpg",
  
  contact: {
    email: "hub@hypecroco.com"
  },
  
  schedule: {
    hours: [
      { day: "Lunedì", time: "Chiuso" },
      { day: "Martedì", time: "Chiuso" },
      { day: "Mer - Gio", time: "19:00 - 00:00" },
      { day: "Venerdì", time: "19:00 - 01:00" },
      { day: "Sabato", time: "15:00 - 01:00" },
      { day: "Domenica", time: "15:00 - 00:00" }
    ]
  },
  
  pricing: {
    weekday: 7,
    weekend: 10,
    subscription: 25
  },
  
  features: [
    {
      icon: "gamepad-2",
      title: "Console Gaming",
      description: "PlayStation5 • Nintendo Switch per sfide epiche tra amici"
    },
    {
      icon: "tv",
      title: "Zone TV Dedicate",
      description: "Due zone TV • Una per film e partite • Una per console gaming"
    },
    {
      icon: "table-tennis",
      title: "Ping Pong",
      description: "Tavolo professionale • Tornei improvvisati • Sfide tra amici"
    },
    {
      icon: "spade",
      title: "Giochi da Tavolo & Carte",
      description: "Ampia collezione • Board games moderni • Carte da gioco"
    },
    {
      icon: "wifi",
      title: "Connettività & Clima",
      description: "WiFi veloce • Ambiente climatizzato • Comfort garantito"
    },
    {
      icon: "coffee",
      title: "Minibar",
      description: "Snack e bevande • Prezzi accessibili • Costi a parte"
    }
  ],
  
  rules: [
    {
      title: "Accesso solo su prenotazione",
      description: "Il club è riservato ai soli membri privati"
    },
    {
      title: "Orari a slot",
      description: "Prenotazioni a slot di 4 ore per evitare sovrapposizioni"
    },
    {
      title: "Rispetto del vicinato",
      description: "Volume moderato e comportamento rispettoso"
    },
    {
      title: "Pulizia condivisa",
      description: "Lasciare tutto in ordine dopo l'utilizzo"
    }
  ],
  
  gallery: [
    {
      id: 1,
      alt: "Area gaming con TV e console",
      placeholder: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      alt: "Tavolo da ping pong",
      placeholder: "https://images.unsplash.com/photo-1544718749-7438c7df2b86?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      alt: "Zona relax e giochi da tavolo",
      placeholder: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      alt: "Area minibar",
      placeholder: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      alt: "Ambiente generale del club",
      placeholder: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      alt: "Zona gaming setup",
      placeholder: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
    }
  ],
  
  links: {
    googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSc7peX_GclOwtu3P4Swn8eDnhu5K6Lm6SZ2jztjns-NHnwNJQ/viewform?embedded=true",
    googleFormDirect: "https://docs.google.com/forms/d/e/1FAIpQLSc7peX_GclOwtu3P4Swn8eDnhu5K6Lm6SZ2jztjns-NHnwNJQ/viewform",
    calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/placeholder/croco-hub-slot",
    instagram: "https://www.instagram.com/croc0hub"
  }
} 