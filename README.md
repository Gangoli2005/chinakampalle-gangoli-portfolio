# CHINAKAMPALLE GANGOLI — Portfolio

A high-performance, single-page developer portfolio showcasing data analytics projects, interactive dashboards, and technical competencies.

**Live site:** https://YOUR-SITE-URL/

## Tech Stack

- **React 19** — Component-driven frontend library
- **Vite** — Fast modern build tooling
- **Tailwind CSS 4** — Modern utility-first styling
- **Framer Motion** — Physics-based fluid interactions and page animations
- **AOS (Animate On Scroll)** — Scroll-triggered element reveals
- **EmailJS** — Client-side direct contact form submissions
- **WebGL** — Hardware-accelerated fluid simulation canvas

## Run Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/Gangoli2005/my_portfolio.git
cd my_portfolio
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Environment Variables

To enable the direct contact form via EmailJS, create a `.env.local` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(If these variables are omitted, the contact form automatically falls back to opening the visitor's default email client via mailto.)*

## Credits

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).
