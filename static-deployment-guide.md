# Static Deployment Guide for Your Portfolio

This guide explains how to build and deploy your React portfolio as a static website to be hosted at https://razine.bensari.dev.

## Step 1: Building the Static Site

Run the included build script to generate your static files:

```bash
./build-static.sh
```

This will:
1. Create a `static-site` directory
2. Build the React application using Vite
3. Place all optimized static files in the `static-site` folder

## Step 2: Configuring the Static Site

### Handle Client-Side Routing

For a single-page application with client-side routing, you'll need to configure your web server to redirect all requests to index.html. 

Create a file called `_redirects` (for Netlify) or `vercel.json` (for Vercel) in your static-site directory:

For Netlify (`_redirects`):
```
/* /index.html 200
```

For Vercel (`vercel.json`):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Step 3: Deployment Options

### Option 1: GitHub Pages

1. Create a GitHub repository
2. Push your static-site directory contents to the `gh-pages` branch
3. Configure GitHub Pages in your repository settings

### Option 2: Netlify

1. Create a Netlify account
2. Connect to your GitHub repository or upload the static-site directory
3. Configure the build settings (if deploying from source)

### Option 3: Vercel

1. Create a Vercel account
2. Connect to your GitHub repository or upload the static-site directory
3. Configure the build settings (if deploying from source)

### Option 4: Custom Domain (razine.bensari.dev)

1. Upload the contents of the static-site directory to your web hosting server
2. Configure your DNS to point razine.bensari.dev to your hosting
3. Set up HTTPS certificates

## Important Notes

1. **Assets**: All assets are properly referenced with relative paths
2. **SEO**: The static build includes all metadata for search engines
3. **Performance**: The build process optimizes all JavaScript, CSS, and images
4. **Analytics**: If you want to add analytics, insert the tracking code into the index.html file before deploying

## Testing the Static Build

Before deploying, you can test your static build locally with a simple HTTP server:

```bash
cd static-site
npx serve
```

This will start a local server and show you the URL to view your site.