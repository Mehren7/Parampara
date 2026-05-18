
# 🌏 Parampara

**Connecting Diaspora with Heritage | Empowering Indian Women**

## 📌 Overview

**Parampara** is a platform that reconnects the global Indian diaspora with their cultural roots while creating sustainable income opportunities for women in India.

Through live, interactive sessions in traditional skills—such as language, arts, crafts, cooking, and storytelling—Parampara builds a meaningful cultural and economic bridge.

---

## 🎯 Problem & 💡 Solution

**Problem:**
* Cultural disconnect among diaspora generations
* Lack of authentic, accessible cultural learning platforms
* Limited income opportunities and global reach for skilled Indian women

**Solution:**

A digital marketplace that connects **verified women instructors from India** with **global learners seeking cultural experiences** through:

* Live 1:1 or group sessions
* Secure and transparent payments
* Ratings and feedback system
* Flexible learning formats

---

## ✨ Key Features

* 👩‍🏫 Instructor onboarding & verification
* 📅 Session booking system
* 💳 Integrated payment gateway
* ⭐ Ratings & reviews
* 🌐 Multi-language support
* 📱 Clean and intuitive UI

---


## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS
- **State/UX:** React Context, Toast notifications
- **Styling:** Tailwind CSS, PostCSS
- **Linting:** ESLint
- **API:** Next.js API routes (Node.js)
- **Payments (Planned):** Razorpay / Stripe
- **Video (Planned):** WebRTC / Zoom API


---

## 📋 Prerequisites

- **Node.js:** v18.17+ or v20+
- **npm:** v9+ (or pnpm/yarn)
- **Git:** For cloning the repository
- A code editor (VS Code recommended)

---

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

This repository now includes a starter Next.js app with:

* Landing page and instructor marketplace
* Instructor profile pages
* Sample API routes for instructors and bookings
* Tailwind CSS styling

---

## 📦 Available Scripts

Run these commands in the project directory:

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Build optimized production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

---

## 🗂️ Project Structure

```
├── app/                     # Next.js app directory (pages & routes)
│   ├── about/               # About page
│   ├── api/                 # API routes
│   │   ├── bookings/route.ts
│   │   └── instructors/route.ts
│   ├── instructor/[id]/     # Individual instructor profile
│   ├── instructors/         # Instructor marketplace
│   ├── terms/               # Terms of Service
│   ├── layout.tsx           # Root layout + SEO metadata
│   ├── page.tsx             # Landing page
│   ├── globals.css          # Global styles
│   └── ...
├── components/              # Reusable React components
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer
│   ├── InstructorCard.tsx   # Instructor profile card
│   ├── Providers.tsx        # Context providers
│   └── ...
├── lib/                     # Utilities & data
│   └── data.ts              # Sample instructor data
├── package.json             # Dependencies & scripts
├── tailwind.config.ts       # Tailwind CSS config
├── tsconfig.json            # TypeScript config
├── next.config.mjs          # Next.js config
└── README.md                # This file
```

---

## 🚀 Roadmap & Current Status

| Feature | Status | Notes |
|---------|--------|-------|
| Landing page | ✅ Done | Full responsive UI |
| Instructor marketplace | ✅ Done | Displays instructors with cards |
| Instructor profiles | ✅ Done | Individual instructor pages |
| Booking system | 🔄 In Progress | API routes added, UI pending |
| Payment integration | ⏳ Planned | Razorpay/Stripe integration |
| Multi-language support | ⏳ Planned | i18n setup needed |
| Video sessions | ⏳ Planned | WebRTC or Zoom API |
| Email notifications | ⏳ Planned | Nodemailer integration |

---

## 🛠️ Development Workflow

### Setting Up a New Feature

1. Create a branch: `git checkout -b feature/your-feature`
2. Make your changes in the appropriate directory
3. Test locally: `npm run dev`
4. Lint your code: `npm run lint`
5. Build and test: `npm run build`
6. Commit with a clear message
7. Push and open a Pull Request

### Best Practices

- Use TypeScript for type safety
- Keep components small and reusable
- Use Tailwind CSS for styling
- Follow the existing code structure
- Add comments for complex logic
- Test on mobile devices (responsive)

---

## ❓ Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 already in use | Use `npm run dev -- -p 3001` or stop the conflicting process |
| Dependencies not installing | Delete `node_modules` and `pnpm-lock.yaml`, then run `npm install` |
| TypeScript errors on first run | Run `npm run build` to generate Next.js types |
| Tailwind styles not applying | Ensure `tailwind.config.ts` paths are correct and restart dev server |

---

## 🌐 Community & Contact

- [Contribute on GitHub](https://github.com/Mehren7/Parampara)
- [NSoC '26 Project Page](https://www.nsoc.in/projects)

For questions or feedback, open an issue or reach out via GitHub.


## 🤝 Contribution

We welcome contributors passionate about:

* Open source
* Social impact
* Cultural preservation

**How to contribute:**

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 🌱 Impact Vision

* Empower Indian women with sustainable, flexible income
* Preserve and share cultural knowledge globally
* Strengthen identity and belonging across generations

---

## 📜 License

This project is licensed under the **Apache License 2.0**.
See the `LICENSE` file for details.

---

## 💬 Vision Statement

“Parampara is not just a platform—it’s a living bridge between tradition and technology, enabling culture to thrive across borders.”
