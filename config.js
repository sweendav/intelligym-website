// IntelliGym Configuration
// This file is safe to commit to public repositories
// For production, use environment variables or a separate config file

// Try to load configuration from multiple sources
let config = null;

// Check if config is already defined (from config.local.js)
if (typeof window !== 'undefined' && window.GymIntelLocalConfig) {
    config = window.GymIntelLocalConfig;

}

// 1. Try to load from environment variables (for production deployments)
if (!config && typeof process !== 'undefined' && process.env && process.env.SUPABASE_URL) {
    config = {
        supabase: {
            url: process.env.SUPABASE_URL,
            anonKey: process.env.SUPABASE_ANON_KEY
        },
        app: {
            name: 'GymIntel',
            tagline: 'Your AI-Powered Workout Companion',
            domain: process.env.APP_DOMAIN || 'www.gymintel.app',
            mobileAppScheme: 'gymintel://'
        },
        email: {
            redirectTo: process.env.EMAIL_REDIRECT_URL || 'https://www.gymintel.app',
            resetPasswordRedirect: process.env.RESET_PASSWORD_REDIRECT_URL || 'https://www.gymintel.app/redirect.html'
        }
    };
}

// 2. If no environment variables and no local config, try to load from config.local.js (for development)
if (!config && typeof window !== 'undefined') {
    try {
        // This will be loaded by a separate script tag in the HTML
        if (window.GymIntelLocalConfig) {
            config = window.GymIntelLocalConfig;

        }
    } catch (e) {
        console.warn('Could not load local config:', e);
    }
}

// 3. Fallback to placeholder values (for template/demo purposes)
if (!config) {
    config = {
        supabase: {
            url: 'YOUR_SUPABASE_URL_HERE',
            anonKey: 'YOUR_SUPABASE_ANON_KEY_HERE'
        },
        app: {
            name: 'GymIntel',
            tagline: 'Your AI-Powered Workout Companion',
            domain: 'www.gymintel.app',
            mobileAppScheme: 'gymintel://'
        },
        email: {
            redirectTo: 'https://www.gymintel.app',
            resetPasswordRedirect: 'https://www.gymintel.app/redirect.html'
        }
    };
    

}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else {
    window.IntelliGymConfig = config;
    
    // Check for local config after a short delay (in case config.local.js loads after this)
    if (typeof window !== 'undefined') {
        setTimeout(() => {
            if (window.GymIntelLocalConfig) {
                window.IntelliGymConfig = window.GymIntelLocalConfig;

                
                // If initializeSupabase function exists, call it to reinitialize with new config
                if (typeof window.initializeSupabase === 'function') {
                    window.initializeSupabase();
                }
            }
        }, 100);
    }
} 