# Deployment Guide

This guide explains how to deploy your IntelliGym website with proper API key management for different hosting platforms.

## 🔐 API Key Management Strategies

### Option 1: Environment Variables (Recommended for Production)

Most hosting platforms support environment variables. This is the most secure approach.

#### Netlify
1. Go to Site Settings > Environment Variables
2. Add the following variables:
   ```
   SUPABASE_URL=https://your-project-id.supabase.co
   SUPABASE_ANON_KEY=your-supabase-anon-key
   APP_DOMAIN=your-domain.com
   EMAIL_REDIRECT_URL=https://your-domain.com
   RESET_PASSWORD_REDIRECT_URL=https://your-domain.com/redirect.html
   ```

#### Vercel
1. Go to Project Settings > Environment Variables
2. Add the same variables as above
3. Deploy your site

#### GitHub Pages (with GitHub Actions)
1. Go to Repository Settings > Secrets and Variables > Actions
2. Add the same environment variables
3. Create a GitHub Action workflow to build with environment variables

#### Other Platforms
Most modern hosting platforms support environment variables. Check your platform's documentation.

### Option 2: Local Configuration File (Development Only)

For local development, create a `config.local.js` file:

```bash
cp config.template.js config.local.js
```

Then edit `config.local.js` with your real API keys:

```javascript
const config = {
    supabase: {
        url: 'https://your-project-id.supabase.co',
        anonKey: 'your-supabase-anon-key'
    },
    app: {
        name: 'IntelliGym',
        tagline: 'Your AI-Powered Workout Companion',
        domain: 'your-domain.com',
        mobileAppScheme: 'intelligym://'
    },
    email: {
        redirectTo: 'https://your-domain.com',
        resetPasswordRedirect: 'https://your-domain.com/redirect.html'
    }
};

window.IntelliGymLocalConfig = config;
```

**⚠️ Important**: This file is gitignored and should NEVER be committed to your repository.

### Option 3: Build-time Configuration (Advanced)

For more advanced setups, you can use build tools to inject configuration at build time.

## 🚀 Platform-Specific Deployment

### GitHub Pages

1. **Push your code to GitHub**
2. **Enable GitHub Pages** in repository settings
3. **Set custom domain** if needed
4. **For environment variables**, use GitHub Actions:

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Create config file
      run: |
        cat > config.local.js << EOF
        const config = {
          supabase: {
            url: '${{ secrets.SUPABASE_URL }}',
            anonKey: '${{ secrets.SUPABASE_ANON_KEY }}'
          },
          app: {
            name: 'IntelliGym',
            tagline: 'Your AI-Powered Workout Companion',
            domain: '${{ secrets.APP_DOMAIN }}',
            mobileAppScheme: 'intelligym://'
          },
          email: {
            redirectTo: '${{ secrets.EMAIL_REDIRECT_URL }}',
            resetPasswordRedirect: '${{ secrets.RESET_PASSWORD_REDIRECT_URL }}'
          }
        };
        window.IntelliGymLocalConfig = config;
        EOF
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: .
```

### Netlify

1. **Connect your repository** to Netlify
2. **Set build settings**:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
3. **Add environment variables** in Site Settings
4. **Deploy**

### Vercel

1. **Import your repository** to Vercel
2. **Configure environment variables** in Project Settings
3. **Deploy**

### AWS S3 + CloudFront

1. **Upload files** to S3 bucket
2. **Configure CloudFront** distribution
3. **Set environment variables** in Lambda@Edge or use build-time configuration

## 🔧 Configuration Priority

The configuration system loads settings in this order:

1. **Environment Variables** (highest priority)
2. **config.local.js** (development only)
3. **Placeholder values** (fallback)

## 🛡️ Security Checklist

Before deploying to production:

- [ ] Environment variables are set (not hardcoded)
- [ ] HTTPS is enabled
- [ ] CORS policies are configured in Supabase
- [ ] Row Level Security (RLS) is enabled in Supabase
- [ ] API keys are rotated regularly
- [ ] Domain is properly configured
- [ ] Email templates are customized
- [ ] Error handling is tested

## 🧪 Testing Your Deployment

1. **Test authentication flows**:
   - User registration
   - Email confirmation
   - User login
   - Password reset

2. **Test mobile integration**:
   - Deep linking to mobile app
   - Device detection
   - Fallback to web version

3. **Test responsive design**:
   - Desktop, tablet, mobile
   - Different screen sizes

4. **Check console for errors**:
   - No configuration warnings
   - No API errors
   - Proper loading states

## 🆘 Troubleshooting

### "Configuration not found" error
- Check environment variables are set correctly
- Verify `config.local.js` exists for development
- Check browser console for specific errors

### Authentication not working
- Verify Supabase credentials
- Check CORS settings in Supabase
- Ensure email templates are configured

### Mobile app deep linking not working
- Verify URL scheme is registered
- Test deep links manually
- Check app store configuration

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review your hosting platform's documentation
3. Verify all configuration settings
4. Test in a private browser window 