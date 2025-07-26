# GitHub Pages Setup Guide

This guide will help you set up your IntelliGym website on GitHub Pages with secure API key management.

## 🚀 Quick Setup (5 minutes)

### Step 1: Add Your API Keys to GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret** and add these secrets:

#### Required Secrets:
```
SUPABASE_URL = https://your-project-id.supabase.co
SUPABASE_ANON_KEY = your-supabase-anon-key-here
```

#### Optional Secrets (with defaults):
```
APP_DOMAIN = www.intelligym.app
EMAIL_REDIRECT_URL = https://www.intelligym.app
RESET_PASSWORD_REDIRECT_URL = https://www.intelligym.app/redirect.html
```

### Step 2: Enable GitHub Pages

1. In your repository, go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically deploy when you push to main/master

### Step 3: Test Your Deployment

1. Push any change to your main branch
2. Go to **Actions** tab to see the deployment progress
3. Once complete, visit your site at: `https://yourusername.github.io/your-repo-name`

## 🔧 Detailed Setup

### Getting Your Supabase Credentials

1. Go to [supabase.com](https://supabase.com) and sign in
2. Select your project (or create a new one)
3. Go to **Settings** → **API**
4. Copy the **Project URL** and **anon public** key

### Setting Up GitHub Secrets

1. **SUPABASE_URL**: Your Supabase project URL
   - Format: `https://your-project-id.supabase.co`
   - Example: `https://lwuppbcymbcrwotixjly.supabase.co`

2. **SUPABASE_ANON_KEY**: Your Supabase anon key
   - Format: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - This is the "anon public" key from your Supabase dashboard

3. **APP_DOMAIN** (optional): Your custom domain
   - Default: `www.intelligym.app`
   - Change if you have a custom domain

4. **EMAIL_REDIRECT_URL** (optional): Email confirmation redirect
   - Default: `https://www.intelligym.app`
   - Should match your GitHub Pages URL

5. **RESET_PASSWORD_REDIRECT_URL** (optional): Password reset redirect
   - Default: `https://www.intelligym.app/redirect.html`
   - Should be your GitHub Pages URL + `/redirect.html`

### Custom Domain Setup (Optional)

If you want to use a custom domain:

1. Add your domain to GitHub Pages settings
2. Update the **APP_DOMAIN** secret with your domain
3. Update **EMAIL_REDIRECT_URL** and **RESET_PASSWORD_REDIRECT_URL** secrets
4. Configure your DNS to point to GitHub Pages

## 🔍 How It Works

### The Deployment Process

1. **Push to main/master** triggers the GitHub Action
2. **GitHub Action** creates `config.local.js` with your secrets
3. **Website deploys** with your API keys securely embedded
4. **Secrets stay private** - never visible in the repository

### Security Features

- ✅ API keys stored as GitHub Secrets (encrypted)
- ✅ Keys never committed to repository
- ✅ Keys only available during deployment
- ✅ Repository remains public and secure

## 🧪 Testing Your Setup

### 1. Check Deployment Status
- Go to **Actions** tab in your repository
- Look for green checkmarks on the latest deployment

### 2. Test Authentication
- Visit your deployed website
- Try to create a new account
- Check if confirmation email is received
- Test login functionality

### 3. Check Console for Errors
- Open browser developer tools
- Look for any configuration warnings
- Should see no API key errors

## 🐛 Troubleshooting

### "Configuration not found" error
- Check that all GitHub Secrets are set correctly
- Verify the secret names match exactly (case-sensitive)
- Check the Actions tab for deployment errors

### Authentication not working
- Verify Supabase credentials in GitHub Secrets
- Check Supabase dashboard for CORS settings
- Ensure email templates are configured in Supabase

### Deployment fails
- Check the Actions tab for error messages
- Verify all required secrets are set
- Check that the workflow file is in `.github/workflows/deploy.yml`

### Website not loading
- Check GitHub Pages settings
- Verify the repository is public (or you have GitHub Pro)
- Check the Actions tab for deployment status

## 📞 Need Help?

1. **Check the Actions tab** for deployment logs
2. **Verify all secrets** are set correctly
3. **Test locally** with `config.local.js` first
4. **Check Supabase dashboard** for any errors

## 🔄 Updating Configuration

To update your configuration:

1. **Edit GitHub Secrets** in repository settings
2. **Push any change** to trigger a new deployment
3. **Wait for deployment** to complete (usually 1-2 minutes)

The website will automatically update with your new configuration! 