/**
 * ========================================================
 * TAHA ALI - PORTFOLIO PROJECTS DATA
 * Profession: App and Web Developer | Digital Creator
 * ========================================================
 * Categories available:
 * - "all" (Default for all projects)
 * - "web" (Web Development & SaaS)
 * - "app" (Mobile App Development - iOS & Android)
 * - "uiux" (UI/UX & Web Design)
 * - "creative" (Video Editing & Creative Media)
 */

const portfolioProjects = [
  {
    id: 1,
    title: "TS Style | Premium Footwear E-Commerce Store",
    category: "web",
    categoryLabel: "Web Development",
    description: "Authentic multi-brand sneaker and footwear e-commerce web platform featuring real-time Supabase database integration, dynamic shopping cart drawer, brand filtering (Nike, Adidas, Puma, New Balance, Vans, Converse), and instant checkout experience.",
    image: "assets/ts-style.jpg",
    client: "TS Style Store",
    duration: "Live Web Project",
    tools: ["Tailwind CSS", "JavaScript (ES6+)", "Supabase", "Lucide Icons", "HTML5/CSS3"],
    featured: true,
    highlights: [
      "Live Supabase Cloud Backend Integration",
      "Dynamic Slide-out Cart & Instant Checkout",
      "Brand Filtering & New Arrivals Showcase",
      "Modern Dark & Light Mode Support"
    ],
    liveLink: "https://tahaalizk12.github.io/TS-Style2/#new-arrivals",
    demoLink: "https://wa.me/923158615052?text=Hi%20Taha,%20I'm%20interested%20in%20an%20e-commerce%20web%20store%20like%20your%20'TS%20Style'%20project"
  },
  {
    id: 2,
    title: "SaaS Cloud Analytics & CRM Dashboard",
    category: "web",
    categoryLabel: "Web Development",
    description: "Full-featured cloud SaaS analytics web platform with real-time telemetry, user authentication, interactive data visualizations, and dark cyber UI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    client: "Nexus Cloud Systems",
    duration: "4 Weeks",
    tools: ["React", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL"],
    featured: true,
    highlights: ["Sub-second Realtime Charts", "Role-Based Access Control", "100% Responsive Clean Code"],
    liveLink: "",
    demoLink: "https://wa.me/923158615052?text=Hi%20Taha,%20I'm%20interested%20in%20a%20project%20like%20your%20'SaaS%20Analytics%20Dashboard'"
  },
  {
    id: 3,
    title: "FinTech Mobile Banking & Crypto Wallet App",
    category: "app",
    categoryLabel: "Mobile App",
    description: "Cross-platform mobile application featuring biometric login, instant peer-to-peer money transfers, interactive crypto charts, and sleek micro-animations.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    client: "Apex Digital Capital",
    duration: "6 Weeks",
    tools: ["Flutter", "Dart", "Firebase", "REST APIs", "Figma"],
    featured: true,
    highlights: ["iOS & Android Cross-Platform", "FaceID / Biometric Security", "Real-Time Push Notifications"],
    liveLink: "",
    demoLink: "https://wa.me/923158615052?text=Hi%20Taha,%20I'm%20interested%20in%20a%20project%20like%20your%20'FinTech%20Mobile%20Banking%20App'"
  },
  {
    id: 4,
    title: "On-Demand Delivery & Booking Mobile App",
    category: "app",
    categoryLabel: "Mobile App",
    description: "Full-stack mobile application with real-time GPS tracking, driver dispatch algorithms, customer live order tracker, and in-app customer support.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    client: "SwiftDrop Logistics",
    duration: "5 Weeks",
    tools: ["React Native", "TypeScript", "Google Maps API", "Socket.io"],
    featured: false,
    highlights: ["Live Real-Time GPS Tracking", "Smooth 60fps Native UI", "Driver & Rider Dual Interface"],
    liveLink: "",
    demoLink: "https://wa.me/923158615052?text=Hi%20Taha,%20I'm%20interested%20in%20a%20project%20like%20your%20'On-Demand%20Delivery%20App'"
  },
  {
    id: 5,
    title: "Dark Glassmorphism Web App & UI/UX Kit",
    category: "uiux",
    categoryLabel: "UI/UX & Web",
    description: "Futuristic dark-mode design system and responsive web interface featuring glowing neon accents, tactile cards, and accessible typography.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    client: "CyberVibe Agency",
    duration: "2 Weeks",
    tools: ["Figma", "HTML5", "CSS3 Modern Grid", "JavaScript"],
    featured: false,
    highlights: ["Design System with 80+ Components", "Mobile-First Design", "WCAG 2.1 Contrast Compliant"],
    liveLink: "",
    demoLink: "https://wa.me/923158615052?text=Hi%20Taha,%20I'm%20interested%20in%20a%20project%20like%20your%20'Dark%20Glassmorphism%20UI/UX'"
  },
  {
    id: 6,
    title: "Cinematic Tech Reel & Motion Branding",
    category: "creative",
    categoryLabel: "Video & Creative",
    description: "Dynamic product launch video reel and social media kit with sound design, 3D graphics, speed-ramped transitions, and high-retention cuts.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
    client: "TechVortex Media",
    duration: "2 Weeks",
    tools: ["Premiere Pro", "After Effects", "Photoshop", "Blender"],
    featured: false,
    highlights: ["4K 60fps Motion Graphics", "Beat-Synced Dynamic SFX", "Cross-Platform Aspect Ratios"],
    liveLink: "",
    demoLink: "https://wa.me/923158615052?text=Hi%20Taha,%20I'm%20interested%20in%20a%20project%20like%20your%20'Cinematic%20Tech%20Reel'"
  }
];
