# Rehan — Fullstack Web Developer & Data Analyst

> A high-performance, dark-editorial personal branding portfolio website built for a Fullstack Web Developer and Data Analyst based in Klaten, Jawa Tengah, Indonesia.

Designed with an intentional **Black + Cream** editorial aesthetic, inspired by modern Swiss typography, minimalist agency portfolios, and clean structured software design.

---

## 1. Project Overview

This portfolio showcases the technical identity of **Rehan**, specializing in:
- **Fullstack Web Applications** (operational systems, workflows, CRUD architectures)
- **Relational Database Systems** (MySQL schema normalization, transactional integrity)
- **Data Analytics & Visualization** (operational reporting, Chart.js trends, decision support systems)

### Key Features
- **Editorial Black + Cream Palette**: `#0A0A0A` deep black, `#111111` secondary black, `#F3EBDD` cream, and `#FAF7F2` warm ivory.
- **Dynamic Project Filtering**: Filter smoothly between `ALL`, `WEB APP`, and `DATA & ANALYTICS` using Framer Motion's `AnimatePresence`.
- **Editorial Typography**: Scaled clamp headings (`Inter` & `Space Grotesk`) with tight line-heights and uppercase tracked metadata.
- **Web3Forms Integration**: Fully functional contact form with client validation, loading/success/error states, and graceful fallback to `mailto:`.
- **100% Client-Side & Static**: Zero backend, zero PHP/Laragon server requirements. Completely ready for Vercel, Netlify, or GitHub Pages.
- **Fully Responsive**: Crafted for 360px mobile, tablets, laptops, and ultra-wide desktop viewports.

---

## 2. Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter & Space Grotesk (via Google Fonts)

---

## 3. Project Structure

```text
personall/
├── public/
│   ├── images/
│   │   ├── profile.jpg          # Main hero portrait
│   │   ├── project-01.jpg       # Operational Management System
│   │   ├── project-02.jpg       # Gaming Laptop DSS
│   │   ├── project-03.jpg       # Tourism Visitor Analytics
│   │   ├── project-04.jpg       # Operational Performance Dashboard
│   │   └── project-05.jpg       # Location-Based Operational System
│   └── Rehan-CV.pdf             # Downloadable Curriculum Vitae
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Fixed header with active indicator & mobile menu
│   │   ├── HeroSection.jsx      # Editorial headline, portrait, & status badge
│   │   ├── AboutSection.jsx     # Section 01: Academic highlights & statistics
│   │   ├── SkillsSection.jsx    # Section 02: Categorized compact tech badges
│   │   ├── ProjectsSection.jsx  # Section 03: Filterable interactive archive
│   │   ├── ExperienceSection.jsx# Section 04: Key Focus areas & architectural pillars
│   │   ├── ContactSection.jsx   # Section 05: Web3Forms form & direct channels
│   │   └── Footer.jsx           # Editorial branding & dynamic year copyright
│   │
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all content
│   │
│   ├── App.jsx                  # Main application container & subtle cursor
│   ├── main.jsx                 # React root renderer
│   └── index.css                # Custom scrollbar, selection, & base rules
│
├── index.html                   # SEO metadata, Open Graph, & font links
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Black/cream theme definitions
├── vite.config.js               # Vite build configuration
└── README.md                    # Documentation & guides
```

---

## 4. Installation & Local Development

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn or pnpm

### Steps

1. Clone or open the project folder in your terminal:
   ```bash
   cd c:\laragon\www\personall
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

---

## 5. Production Build

To build the static optimized assets for deployment:

```bash
npm run build
```

This compiles your application into the `dist/` directory.

To test the production build locally:

```bash
npm run preview
```

---

## 6. Deployment to Vercel

### Option A: Using the Vercel Dashboard (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **Add New...** -> **Project**.
4. Import your GitHub repository.
5. In **Build and Output Settings**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**.

### Option B: Using the Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 7. How to Customize the Portfolio

All customizable content is centralized in **`src/data/portfolioData.js`**. You rarely need to edit the JSX components directly.

### 7.1 How to Change the Profile Photo
1. Place your portrait photo into:
   ```
   public/images/profile.jpg
   ```
2. Supported formats: `.jpg`, `.png`, or `.webp`.
3. If you change the filename, update the path in `src/data/portfolioData.js`:
   ```javascript
   export const personalInfo = {
     // ...
     profileImage: "/images/your-photo.jpg",
   };
   ```

### 7.2 How to Change the CV / Resume
1. Place your PDF file into the `public/` directory:
   ```
   public/Rehan-CV.pdf
   ```
2. If you change the filename, update `cv` in `src/data/portfolioData.js`:
   ```javascript
   export const personalInfo = {
     // ...
     cv: "/Your-Custom-Resume.pdf",
   };
   ```

### 7.3 How to Edit Projects
Open `src/data/portfolioData.js` and modify the `projects` array:

```javascript
export const projects = [
  {
    id: "project-01",
    number: "01",
    title: "Operational Management System",
    category: "Web App",
    filterCategory: "WEB APP", // Matches filter tab ("ALL" | "WEB APP" | "DATA & ANALYTICS")
    description: "Your project description...",
    details: "Deeper technical explanation...",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/yourusername/project-repo",
    liveUrl: "https://your-demo-url.com",
    image: "/images/project-01.jpg",
  },
  // Add more projects as needed...
];
```

### 7.4 How to Configure Web3Forms for the Contact Form
1. Visit [https://web3forms.com/](https://web3forms.com/) and create a free access key using your email.
2. Open `src/components/ContactSection.jsx`.
3. Locate line 18:
   ```javascript
   const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY";
   ```
4. Replace `"YOUR_ACCESS_KEY"` with your key:
   ```javascript
   const WEB3FORMS_ACCESS_KEY = "your-actual-uuid-access-key";
   ```
*(Note: If left unconfigured, the form will simulate submission and smoothly fall back to `mailto:your.email@example.com` automatically.)*

### 7.5 How to Change Social & Contact Links
In `src/data/portfolioData.js`, update the `personalInfo` object:

```javascript
export const personalInfo = {
  name: "Rehan",
  email: "rehan@example.com",
  github: "https://github.com/rehan",
  linkedin: "https://linkedin.com/in/rehan",
  location: "Klaten, Jawa Tengah, Indonesia",
  // ...
};
```

---

## 8. License

MIT License. Free to use, adapt, and deploy.
