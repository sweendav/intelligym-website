// IntelliGym Configuration Template
// Copy this file to config.local.js and fill in your actual values
// This template file is safe to commit to public repositories

const config = {
    // Supabase Configuration
    // Get these values from your Supabase project dashboard
    // Project URL: https://supabase.com/dashboard/project/[YOUR_PROJECT_ID]/settings/api
    supabase: {
        url: 'https://your-project-id.supabase.co',
        anonKey: 'your-supabase-anon-key-here'
    },
    
    // App Configuration
    app: {
        name: 'IntelliGym',
        tagline: 'Your AI-Powered Workout Companion',
        domain: 'your-domain.com',
        mobileAppScheme: 'intelligym://'
    },
    
    // Email Configuration
    email: {
        redirectTo: 'https://your-domain.com',
        resetPasswordRedirect: 'https://your-domain.com/redirect.html'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else {
    window.IntelliGymLocalConfig = config;
} 