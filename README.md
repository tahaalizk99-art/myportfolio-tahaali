# 🚀 Taha Ali - Official Portfolio Website

A modern, high-performance, fully responsive personal portfolio website for **Taha Ali** — Creative Professional & Digital Creator.

Built with a premium dark cyber aesthetic featuring glowing purple and electric blue gradient accents, glassmorphic UI, dynamic project filtering, and automated WhatsApp order integration.

---

## 🌟 Key Features

### 1. Exactly 4 Navigation Tabs
- **Home:** Hero introduction, dynamic role typing animation, stats counters, creative profile showcase, and dual action buttons.
- **Projects:** Curated showcase with category filters (*Video Editing*, *Graphic Design*, *Social Media*, *UI/UX*), card hover effects, and a comprehensive project detail modal.
- **Order:** Commission form with customer name, phone number, service selector, budget chips, and project brief that generates an automated, structured WhatsApp message to `923158615052`.
- **Contact:** Interactive verified social cards and direct contact links for WhatsApp, TikTok, Instagram, and Facebook with one-click number copying.

### 2. Design & Experience Highlights
- **Dark Theme Palette:** Deep cosmic dark (`#07090e`), frosted glass cards (`backdrop-filter: blur(16px)`), and cyber grid overlay.
- **Electric Accents:** Gradient blends of royal purple (`#8b5cf6`) and neon electric cyan (`#06b6d4`).
- **Floating WhatsApp Beacon:** Fixed bottom-right glowing button with pulsing radar ring on every screen.
- **Fully Responsive:** Smooth layout adaptation across mobile phones, tablets, and wide monitors.
- **Zero Build Dependencies:** Pure HTML5, CSS3, and JavaScript — works instantly in any browser.

---

## 📱 Official Social & Contact Profiles

- **WhatsApp:** [03158615052](https://wa.me/923158615052)
- **TikTok:** [@muhammad_taha450k](https://www.tiktok.com/@muhammad_taha450k?_r=1&_t=ZS-9BE6iIigsnY)
- **Instagram:** [@itx_tahaali.k](https://www.instagram.com/itx_tahaali.k)
- **Facebook:** [Taha Ali Profile](https://www.facebook.com/share/18WbuNJE87/)

---

## 🛠️ How to Add or Edit Projects

All project data is stored cleanly inside `js/projects-data.js`.

To add a new project, simply open `js/projects-data.js` and add an object:

```javascript
{
  id: 7,
  title: "Your Project Title",
  category: "video", // "video" | "design" | "social" | "uiux"
  categoryLabel: "Video Editing",
  description: "A short, engaging description of what you created.",
  image: "https://your-image-url-or-local-path.jpg",
  client: "Client Name",
  duration: "1 Week",
  tools: ["Premiere Pro", "After Effects"],
  highlights: ["Feature 1", "Feature 2"]
}
```

---

## 🌐 How to Launch & Host Online

### Option A: Local Testing
Simply double click `index.html` to open it in Chrome, Edge, Brave, or Safari.

### Option B: Free Online Deployment (GitHub Pages)
1. Create a free repository on [GitHub](https://github.com).
2. Upload the files in this folder.
3. Go to **Settings > Pages** and select `main` branch.
4. Your portfolio will be live in 60 seconds with a free `https://yourname.github.io` URL!

### Option C: Vercel / Netlify
Drag and drop this entire folder into [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com) for instant free hosting with custom domain support.
