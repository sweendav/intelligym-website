# IntelliGym Website

A modern, responsive website for IntelliGym - Your AI-Powered Workout Companion. Features complete user authentication, session management, and mobile app integration.

## 🚀 Features

### Authentication System
- **User Registration** - Email-based signup with verification
- **User Login** - Secure email/password authentication
- **Password Reset** - Email-based password recovery
- **Session Management** - Persistent login state
- **User Dashboard** - Protected area for logged-in users

### User Experience
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern UI** - Beautiful gradient design with smooth animations
- **Loading States** - Visual feedback during API calls
- **Error Handling** - User-friendly error messages
- **Success States** - Clear confirmation of successful actions

### Mobile Integration
- **Deep Linking** - Direct links to mobile app features
- **Device Detection** - Smart redirects based on device type
- **App Fallbacks** - Graceful fallback to web version

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Supabase (Authentication, Database)
- **Styling**: Custom CSS with modern design patterns
- **Deployment**: Static hosting (GitHub Pages, Netlify, etc.)

## 📁 File Structure

```
intelligym-website/
├── index.html              # Main landing page with auth forms
├── redirect.html           # Password reset redirect handler
├── reset-password.html     # Password reset form
├── config.js              # Configuration settings (safe for public repo)
├── config.template.js      # Template for local configuration
├── config.local.js         # Local config with real API keys (gitignored)
├── .gitignore             # Prevents sensitive files from being committed
├── CNAME                  # Custom domain configuration
└── README.md              # This file
```

## 🔧 Setup Instructions

### 1. Supabase Configuration

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from the API settings
3. **SECURITY**: Copy `config.template.js` to `config.local.js` and update with your real values:

```bash
cp config.template.js config.local.js
```

4. Edit `config.local.js` with your actual Supabase credentials:

```javascript
supabase: {
    url: 'https://your-project-id.supabase.co',
    anonKey: 'your-supabase-anon-key-here'
}
```

**⚠️ IMPORTANT**: Never commit real API keys to a public repository!

### 2. Email Configuration

Configure email settings in your Supabase dashboard:

1. Go to Authentication > Settings > Email Templates
2. Customize email templates for:
   - Email confirmation
   - Password reset
3. Set redirect URLs:
   - Email confirmation: `https://yourdomain.com`
   - Password reset: `https://yourdomain.com/redirect.html`

### 3. Domain Configuration

1. Update `CNAME` file with your domain
2. Update `config.js` with your domain settings
3. Configure your hosting provider to serve the files

### 4. Mobile App Integration

1. Ensure your mobile app handles the `intelligym://` URL scheme
2. Update deep link URLs in the dashboard to match your app's URL structure
3. Test deep linking on both iOS and Android

## 🔐 Authentication Flow

### User Registration
1. User fills out signup form
2. Supabase sends confirmation email
3. User clicks email link to confirm account
4. User can now sign in

### User Login
1. User enters email/password
2. Supabase validates credentials
3. User is redirected to dashboard
4. Session is maintained across page refreshes

### Password Reset
1. User requests password reset
2. Supabase sends reset email
3. User clicks email link → `redirect.html`
4. `redirect.html` detects device and redirects appropriately
5. User sets new password on `reset-password.html`

## 🎨 Customization

### Styling
- Main styles are in the `<style>` section of `index.html`
- Color scheme uses CSS custom properties
- Responsive breakpoints at 768px

### Content
- Update app name, tagline, and features in `index.html`
- Modify dashboard content in the `showUserDashboard()` function
- Update mobile app links throughout the site

### Configuration
- All settings are centralized in `config.js` (safe for public repo)
- Create `config.local.js` from `config.template.js` for your real API keys
- Update Supabase credentials, domain, and app scheme in your local config
- Modify email redirect URLs as needed

## 🚀 Deployment

### GitHub Pages (Recommended for this repository)

Since this is hosted from a GitHub repository, we've set up automatic deployment with GitHub Actions:

**Quick Setup:**
1. Follow the [GitHub Setup Guide](GITHUB_SETUP.md) for step-by-step instructions
2. Add your Supabase API keys as GitHub Secrets
3. Enable GitHub Pages in repository settings
4. Push any change to trigger automatic deployment

**What's Included:**
- ✅ Automatic deployment on every push
- ✅ Secure API key management with GitHub Secrets
- ✅ No manual configuration needed
- ✅ Works with custom domains

### Other Deployment Options

For other hosting platforms, see [DEPLOYMENT.md](DEPLOYMENT.md):

**Netlify:**
1. Connect repository to Netlify
2. Add environment variables in Site Settings
3. Deploy

**Vercel:**
1. Import repository to Vercel
2. Configure environment variables in Project Settings
3. Deploy

**Other Platforms:**
- Most modern hosting platforms support environment variables
- See DEPLOYMENT.md for platform-specific instructions

## 🔍 Testing

### Local Development
1. Open `index.html` in a web browser
2. Test authentication flows
3. Check responsive design on different screen sizes
4. Verify deep linking (requires mobile app)

### Production Testing
1. Test all authentication flows
2. Verify email delivery and confirmation
3. Test password reset functionality
4. Check mobile app deep linking
5. Validate responsive design

## 🐛 Troubleshooting

### Common Issues

**Authentication not working:**
- Check Supabase credentials in `config.local.js`
- Verify email templates are configured
- Check browser console for errors
- Ensure `config.local.js` exists and is properly configured

**Password reset not working:**
- Verify redirect URLs in Supabase settings
- Check `redirect.html` and `reset-password.html` exist
- Ensure API keys are correct in `config.local.js`

**Mobile app deep linking not working:**
- Verify URL scheme is registered in mobile app
- Test deep links manually
- Check app store listing for URL scheme

**Styling issues:**
- Clear browser cache
- Check CSS syntax
- Verify responsive breakpoints

## 🔒 Security Best Practices

### API Key Management
- **Never commit real API keys** to public repositories
- Use `config.template.js` as a template and create `config.local.js` for your real keys
- The `.gitignore` file prevents sensitive files from being committed
- Consider using environment variables in production deployments

### Supabase Security
- Use Row Level Security (RLS) policies in your Supabase database
- Regularly rotate your API keys
- Monitor your Supabase dashboard for unusual activity
- Use the anon key only for client-side operations

### Production Deployment
- Use environment variables for sensitive configuration
- Enable HTTPS on your domain
- Set up proper CORS policies in Supabase
- Regularly update dependencies

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Supabase documentation
3. Check browser console for JavaScript errors
4. Verify all configuration settings
5. Ensure `config.local.js` is properly configured

## 📄 License

This project is proprietary to IntelliGym. All rights reserved. 
# Trigger deployment with API keys
# Test workflow debugging
# Force new deployment to ensure config.local.js is served
# Force cache refresh - Sat Jul 26 22:17:51 PDT 2025
# Force new deployment - Sat Jul 26 22:42:37 PDT 2025
