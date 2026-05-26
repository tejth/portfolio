# 🚀 Tejendra Pal Singh — Personal Portfolio

A modern, premium portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features AI-powered chatbot, smooth animations, glassmorphism UI, and full responsiveness.

---

## ✨ Features

- **Glassmorphism UI** — frosted glass cards with subtle shadows
- **Framer Motion Animations** — page-load reveals, scroll animations, hover effects
- **AI Chatbot** — Claude-powered assistant answering questions about you (falls back to smart mock responses without an API key)
- **Dark/Light Mode** — toggling with persistent localStorage preference
- **Custom Cursor** — animated dot + ring cursor (desktop only)
- **Particle Background** — canvas-based floating particle network
- **Type Animation** — animated role titles in the hero section
- **Contact Form** — with API route, validation, and success/error states
- **Fully Responsive** — mobile, tablet, desktop
- **SEO Meta Tags** — OpenGraph, Twitter card metadata
- **Smooth Scroll Navigation** — sticky navbar with active section detection

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/route.ts        # AI chatbot endpoint
│   │   │   └── contact/route.ts     # Contact form endpoint
│   │   ├── globals.css              # Global styles + Tailwind
│   │   ├── layout.tsx               # Root layout + fonts + SEO
│   │   └── page.tsx                 # Main page (assembles sections)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Sticky navbar + mobile menu
│   │   │   ├── Footer.tsx           # Footer with socials
│   │   │   └── ThemeProvider.tsx    # Dark/light mode context
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Hero with typewriter animation
│   │   │   ├── About.tsx            # Bio + animated skill bars
│   │   │   ├── Projects.tsx         # Project cards with hover effects
│   │   │   ├── Experience.tsx       # Timeline work history
│   │   │   ├── Education.tsx        # Degree + certifications
│   │   │   ├── AIAssistant.tsx      # AI chatbot UI
│   │   │   └── Contact.tsx          # Contact form + details
│   │   └── ui/
│   │       ├── CustomCursor.tsx     # Animated custom cursor
│   │       ├── ParticleBackground.tsx # Canvas particle network
│   │       └── SectionHeader.tsx    # Reusable section title component
│   │
│   ├── lib/
│   │   ├── data.ts                  # All portfolio content (EDIT THIS)
│   │   └── utils.ts                 # Helper functions
│   │
│   └── types/
│       └── index.ts                 # TypeScript interfaces
│
├── public/
│   └── resume.pdf                   # Your resume (add this file)
│
├── .env.local.example               # Environment variable template
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## 🛠️ Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your API keys:

```env
# For AI chatbot (optional — falls back to smart mock responses)
ANTHROPIC_API_KEY=your_key_here

# For contact form emails (optional)
RESEND_API_KEY=your_key_here
CONTACT_EMAIL=you@email.com
```

### 3. Personalize your data

Edit **`src/lib/data.ts`** to update:
- Your name, title, tagline, bio
- Skills and proficiency levels
- Project details (title, description, image, links)
- Work experience (company, role, achievements)
- Education and certifications
- Contact info and social links

### 4. Add your resume

Place your resume PDF at `public/resume.pdf`.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment

### Deploy to Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Add your environment variables in the Vercel dashboard under **Settings → Environment Variables**.

### Build for production

```bash
npm run build
npm start
```

---

## 🎨 Customization

### Colors
The entire palette is defined in `tailwind.config.ts`. Primary colors are blue shades. Change the `blue` and `navy` color values to switch the theme.

### Fonts
Fonts are set in `src/app/layout.tsx`. Currently using:
- **DM Serif Display** — headings (Google Fonts)
- **DM Sans** — body text (Google Fonts)
- **JetBrains Mono** — code/mono text (Google Fonts)

### Sections
Each section is a standalone component in `src/components/sections/`. Enable/disable sections by editing `src/app/page.tsx`.

### AI Knowledge Base
Edit the `aiKnowledge` string in `src/lib/data.ts` to customize what the AI assistant knows about you.

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| react-type-animation | Typewriter effect |
| react-intersection-observer | Scroll-triggered animations |
| Anthropic Claude API | AI chatbot |

---

## 📄 License

MIT — feel free to use and adapt for your own portfolio.

---

**Made with ❤️ by Alex Morgan**
