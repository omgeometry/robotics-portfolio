# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Vercel Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   cd /home/channing/job-searching/website/robotics-portfolio
   git init
   git add .
   git commit -m "Initial commit: Robotics portfolio"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
cd /home/channing/job-searching/website/robotics-portfolio
vercel

# Follow prompts:
# - Setup and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - What's your project's name? robotics-portfolio
# - In which directory is your code? ./
# - Want to override settings? No

# Deploy to production
vercel --prod
```

## Local Testing

Before deploying, test locally:

```bash
# Development server
npm run dev
# Open http://localhost:3000

# Production build test
npm run build
npm start
# Open http://localhost:3000
```

## Post-Deployment Checklist

- [ ] Test all navigation links work
- [ ] Verify resume PDF downloads correctly
- [ ] Check all project links (GitHub, PDFs)
- [ ] Test on mobile devices
- [ ] Verify contact links (email, GitHub, LinkedIn)
- [ ] Check site speed with Lighthouse
- [ ] Test accessibility with screen reader

## Custom Domain Setup

1. In Vercel dashboard, go to project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., `channingtan.com`)
4. Update your DNS records as instructed by Vercel:
   - **A Record:** `76.76.21.21`
   - **CNAME:** `cname.vercel-dns.com`
5. Wait for DNS propagation (5-60 minutes)
6. Vercel will automatically provision SSL certificate

## Environment Variables (Optional)

If you add analytics or other services:

1. Create `.env.local` file (NOT tracked by git):
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

2. Add to Vercel dashboard:
   - Go to project settings → Environment Variables
   - Add key-value pairs
   - Redeploy

## Performance Optimization

Your site is already optimized, but you can further improve:

1. **Enable Vercel Analytics:**
   - Install: `npm install @vercel/analytics`
   - Add to `app/layout.tsx`:
     ```typescript
     import { Analytics } from '@vercel/analytics/react'
     // Add <Analytics /> before closing </body>
     ```

2. **Image Optimization:**
   - If you add images, use Next.js `<Image>` component
   - Automatic WebP conversion and lazy loading

3. **Font Optimization:**
   - Already using system fonts for speed
   - Can add custom fonts via `next/font` if needed

## Monitoring

- **Vercel Dashboard:** Real-time logs, deployments, analytics
- **Uptime Monitoring:** Consider UptimeRobot or StatusCake
- **Performance:** Use Vercel Speed Insights or Google Lighthouse

## Troubleshooting

### Build fails on Vercel
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify `npm run build` works locally

### 404 on resume.pdf
- Ensure `/public/resume.pdf` exists
- Rebuild and redeploy

### Styling looks different
- Clear browser cache
- Check Tailwind config
- Verify `globals.css` is imported

## Updating Content

After making changes:

```bash
git add .
git commit -m "Update: [describe changes]"
git push

# Vercel automatically redeploys on push
```

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Contact: channingtan@gmail.com
