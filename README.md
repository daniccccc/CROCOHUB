
# CROCO HUB

Landing page moderna per club privato tra amici con sistema di prenotazioni integrato.

![CROCO HUB](https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop)

## ✨ Caratteristiche

- **🎮 Gaming Zone**: 2× Nintendo Switch, TV grande, collezione giochi
- **🏓 Ping Pong**: Tavolo professionale per sfide avvincenti  
- **🎲 Board Games**: Vasta collezione di giochi da tavolo
- **☕ Minibar**: Area ristoro con sistema "cassetta onestà"
- **📱 Responsive**: Design mobile-first e accessibile
- **🌙 Dark Mode**: Tema scuro elegante con accenti lime
- **⚡ Performance**: Next.js 14, export statico, zero JavaScript pesante

## 🛠️ Stack Tecnologico

- **Framework**: Next.js 14 (App Router)
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS
- **Animazioni**: Framer Motion
- **Icone**: Lucide React
- **Deployment**: Vercel (export statico)

## 🚀 Quick Start

### 1. Installazione

```bash
# Clona il repository
git clone <your-repo-url>
cd croco-hub

# Installa le dipendenze
npm install
```

### 2. Configurazione

```bash
# Copia il file di esempio delle variabili d'ambiente
cp env.example .env.local

# Modifica le variabili d'ambiente
nano .env.local
```

### 3. Sviluppo

```bash
# Avvia il server di sviluppo
npm run dev

# Apri http://localhost:3000
```

### 4. Build e Deploy

```bash
# Build di produzione
npm run build

# Deploy su Vercel (automatico)
git push origin main
```

## ⚙️ Configurazione

### Variabili d'Ambiente

Modifica il file `.env.local`:

```env
# Google Form per modulo interesse
NEXT_PUBLIC_GOOGLE_FORM_URL=https://forms.google.com/viewform?embedded=true&formid=YOUR_FORM_ID

# Calendly per prenotazioni
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/croco-hub-slot
```

### Personalizzazione Contenuti

Modifica `config/site.ts` per personalizzare:

- **Prezzi**: tariffe infrasettimanali, weekend, abbonamento
- **Orari**: fasce orarie disponibili
- **Caratteristiche**: servizi e aree del club
- **Contatti**: email e informazioni
- **Galleria**: immagini segnaposto

### Google Form Setup

1. Crea un Google Form con questi campi:
   - Nome
   - Email  
   - Gruppo di appartenenza
   - Preferenze attività
   - Note

2. Condividi → Incorpora → Copia URL
3. Aggiungi `?embedded=true` all'URL
4. Inserisci in `NEXT_PUBLIC_GOOGLE_FORM_URL`

### Calendly Setup

1. Crea account Calendly
2. Configura evento "CROCO HUB Slot"
3. Imposta durata 4 ore
4. Limita a 6 partecipanti
5. Copia link pubblico
6. Inserisci in `NEXT_PUBLIC_CALENDLY_URL`

## 📁 Struttura Progetto

```
croco-hub/
├── app/
│   ├── (pagine principali)
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── Gallery.tsx
│   ├── BookingTabs.tsx
│   └── ...
├── config/
│   └── site.ts
├── public/
│   ├── robots.txt
│   └── sitemap.xml
└── README.md
```

## 🎨 Personalizzazione Design

### Colori

Modifica `tailwind.config.js` per cambiare la palette:

```js
colors: {
  primary: {
    500: '#84cc16', // Lime principale
    // ...altre tonalità
  }
}
```

### Font

Sostituisci Inter in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

### Animazioni

Personalizza le animazioni in `tailwind.config.js`:

```js
animation: {
  'custom-bounce': 'bounce 2s infinite',
  // ...altre animazioni
}
```

## 📱 Pagine Incluse

### 🏠 Home (/)
- Hero con CTA doppia
- Caratteristiche del club
- Prezzi indicativi
- Galleria fotografica
- Regole essenziali
- Modulo interesse

### 📅 Prenotazioni (/prenota)
- Tab Google Form / Calendly
- Informazioni slot
- Alert conferma manuale
- Contatti assistenza

### 📋 Regolamento (/regolamento)
- Accesso e membership
- Orari e prenotazioni
- Rispetto vicinato
- Pulizia condivisa
- Consumazioni
- Responsabilità

### 🔒 Privacy (/privacy)
- Dati raccolti
- Utilizzo informazioni
- Diritti utente
- No cookie tracking
- Contatti privacy

## 🚢 Deploy su Vercel

### Automatic Deploy

1. Push su GitHub
2. Connetti repository a Vercel
3. Le variabili d'ambiente vengono lette automaticamente
4. Deploy automatico ad ogni push

### Manual Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_GOOGLE_FORM_URL
vercel env add NEXT_PUBLIC_CALENDLY_URL
```

## 🔧 Manutenzione

### Aggiornare Prezzi

Modifica `config/site.ts`:

```ts
pricing: {
  weekday: 8,    // era 7
  weekend: 12,   // era 10  
  subscription: 30  // era 25
}
```

### Cambiare Orari

```ts
schedule: {
  slots: [
    { label: "Mattina", time: "10:00 - 14:00" },
    { label: "Pomeriggio", time: "15:00 - 19:00" },
    { label: "Sera", time: "20:00 - 24:00" }
  ]
}
```

### Aggiungere Servizi

```ts
features: [
  // ...servizi esistenti
  {
    icon: "gamepad",
    title: "PlayStation 5", 
    description: "Console next-gen per gaming 4K"
  }
]
```

## 🆘 Troubleshooting

### Form non si carica
- Verifica URL Google Form
- Controlla che sia impostato `embedded=true`
- Testa l'URL direttamente nel browser

### Calendly non funziona
- Verifica link pubblico Calendly
- Controlla le impostazioni di condivisione
- Assicurati che l'evento sia attivo

### Build fallisce
```bash
# Pulisci cache
rm -rf .next
npm run build
```

### Errori TypeScript
```bash
# Verifica configurazione
npx tsc --noEmit
```

## 📞 Supporto

Per problemi tecnici o domande:
- **Email**: info@crocohub.club
- **Issues**: Usa GitHub Issues per bug report
- **Docs**: Consulta la documentazione Next.js

## 📄 Licenza

Progetto privato per uso interno del club.

---

**CROCO HUB** - Gaming • Relax • Community 🎮 