# Static Deployment Guide

This guide explains how to compile your React portfolio into static HTML files for hosting at razine.bensari.dev.

## Option 1: Using the Build Script

I've created a `build-static.sh` script that handles the entire process:

1. Run the script:
   ```bash
   ./build-static.sh
   ```

2. After completion, you'll find all static files in the `static-site` directory.

3. Upload these files to your web hosting provider.

## Option 2: Manual Export

If you prefer to handle the process manually:

1. Install a static HTTP server:
   ```bash
   npm install -g serve
   ```

2. Create a production build:
   ```bash
   cd client
   npm run build
   ```

3. Test the build locally:
   ```bash
   serve -s dist
   ```

4. Upload the contents of the `dist` directory to your hosting provider.

## Hosting Recommendations

### Traditional Web Hosting

Upload the files to your web hosting via FTP/SFTP. Configure your domain (razine.bensari.dev) to point to the directory where you uploaded these files.

### GitHub Pages

1. Create a repository on GitHub
2. Push your static files to the `gh-pages` branch
3. Configure GitHub Pages in repository settings
4. Set up your custom domain

### Netlify or Vercel

1. Create an account on Netlify or Vercel
2. Connect your GitHub repository or upload the static files
3. Configure your custom domain

## Important Configuration for SPA Routing

For proper routing in a single-page application, you need to redirect all requests to index.html:

- For Apache (.htaccess file):
  ```
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  ```

- For Nginx:
  ```
  location / {
    try_files $uri $uri/ /index.html;
  }
  ```

The `_redirects` file (already included in the static-site directory) handles this for Netlify deployments.

## Final Checklist

- Verify all links work in the static build
- Ensure all assets (images, fonts, etc.) are loaded correctly
- Test the site on multiple devices and browsers
- Set up HTTPS for your domain