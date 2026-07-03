# Robotics Portfolio - Channing Tan

A modern, lightweight portfolio website for a robotics and perception engineer. Built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Overview
This website was made through the help of an AI agent, Claude Opus 4.7 through the openrouter API and CLINE extension to VSCode.

This portfolio showcases:
- **Robotics & Autonomy** projects (ROS2, VSLAM, autonomous systems)
- **Computer Vision & Perception** work (PyTorch, OpenCV, YOLO)
- **Machine Learning Systems** (neural networks, spatiotemporal forecasting)
- **Hardware & Prototyping** experience (embedded systems, PCB design)
- **Technical Skills** across robotics, software, and hardware

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Local Development

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
robotics-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Main page (assembles all sections)
│   └── globals.css          # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx           # Fixed navigation with smooth scroll
│   ├── Hero.tsx             # Landing section with name/tagline
│   ├── About.tsx            # Education and experience
│   ├── Projects.tsx         # Featured software/ML projects
│   ├── Hardware.tsx         # Hardware projects timeline
│   ├── Skills.tsx           # Technical skills by category
│   ├── Resume.tsx           # Resume download + preview
│   └── Contact.tsx          # Contact information
├── types/
│   └── index.ts             # TypeScript interfaces
├── public/
│   ├── resume.pdf           # Resume file
│   ├── papers/              # Research papers and project PDFs
│   └── images/              # Wiring diagrams and photos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Design Philosophy

**Aesthetic:**
- Dark mode by default (slate/blue color palette)
- Engineering lab/research website feel
- Typography-first design
- Minimal animations and clean interactions

**Technical:**
- Lightweight and fast (no heavy dependencies)
- Fully responsive (mobile-first approach)
- Accessible keyboard navigation
- SEO optimized with OpenGraph metadata

## 📝 Content Updates

### Updating Projects

Edit `components/Projects.tsx`:
```typescript
const projects = [
  {
    title: "Your Project Title",
    description: "Brief description...",
    tags: ["Tag1", "Tag2"],
    githubUrl: "https://github.com/...",
    pdfUrl: "/papers/your-paper.pdf",
  },
];
```

### Updating Skills

Edit `components/Skills.tsx`:
```typescript
const skillCategories = [
  {
    category: "Your Category",
    skills: ["Skill1", "Skill2", "Skill3"],
  },
];
```

### Updating Contact Info

Edit `components/Contact.tsx` and `components/Hero.tsx` with your:
- Email address
- GitHub profile
- LinkedIn profile
- Location

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow prompts:**
- Link to existing project or create new one
- Set production deployment settings
- Deploy!

### Deploy via Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js and configures build settings
5. Click "Deploy"

### Deploy to Other Platforms

**Netlify:**
- Build command: `npm run build`
- Publish directory: `.next`

**Self-hosted:**
```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables

Create `.env.local` for any environment-specific values:
```bash
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### SEO Metadata

Edit `app/layout.tsx` to customize:
- Page title and description
- OpenGraph tags
- Twitter card metadata
- Keywords

### Custom Domain

In Vercel dashboard:
1. Go to project settings
2. Add custom domain
3. Configure DNS records as instructed

## 🎯 Performance Tips

- Images are optimized automatically by Next.js
- Tailwind purges unused CSS in production
- Components are server-rendered by default
- Static assets are served from CDN on Vercel

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible styles
- High contrast text (WCAG AA compliant)

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel-ready
- **Icons:** Inline SVG

## 📈 Future Enhancements

Potential additions to expand the portfolio:

### Blog Section
- Technical writeups and tutorials
- Markdown or MDX support
- Syntax highlighting for code

### Project Demos
- Embedded videos (YouTube, Vimeo)
- GIF demonstrations
- Interactive WebGL visualizations

### ROS Visualizations
- RViz recordings
- Bag file playback interfaces
- 3D robot models

### Research Portfolio
- Detailed paper summaries
- Citation management
- Research timeline

### Embedded Systems Showcase
- Oscilloscope captures
- PCB design galleries
- Hardware build logs

### Analytics
- Vercel Analytics
- Plausible (privacy-friendly)
- Track visitor engagement

## 📄 License

Personal portfolio site. Feel free to use as inspiration for your own portfolio!

## 🙋 Support

For questions or issues:
- Email: channingtan@gmail.com
- GitHub: [@omgeometry](https://github.com/omgeometry)

---

**Built with ❤️ by Channing Tan**
