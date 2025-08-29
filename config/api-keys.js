// API Keys Configuration File
// Copy this file when moving to a new hosting platform

/**
 * REQUIRED API KEYS AND ENVIRONMENT VARIABLES
 * 
 * Set these in your hosting platform's environment variables/secrets section:
 */

const API_KEYS = {
  // DATABASE (REQUIRED)
  DATABASE_URL: process.env.DATABASE_URL || "postgresql://username:password@host:port/database",
  
  // AI CHAT (REQUIRED for chat functionality)
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-your-openai-api-key-here",
  
  // EMAIL NOTIFICATIONS (OPTIONAL - for automatic email forwarding)
  GMAIL_USER: process.env.GMAIL_USER || "your-gmail@gmail.com",
  GMAIL_PASS: process.env.GMAIL_PASS || "your-gmail-app-password",
  
  // ALTERNATIVE EMAIL SERVICE (if you prefer)
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || "SG.your-sendgrid-api-key",
  
  // NODE ENVIRONMENT
  NODE_ENV: process.env.NODE_ENV || "production"
};

/**
 * HOW TO GET THESE API KEYS:
 * 
 * 1. DATABASE_URL:
 *    - Most hosting platforms provide this automatically
 *    - For external: Use Railway, Supabase, or PlanetScale
 * 
 * 2. OPENAI_API_KEY:
 *    - Go to platform.openai.com
 *    - Sign up/login → API Keys → Create new key
 *    - Starts with "sk-"
 * 
 * 3. GMAIL_USER & GMAIL_PASS:
 *    - GMAIL_USER: Your Gmail address
 *    - GMAIL_PASS: Gmail App Password (NOT regular password)
 *    - Enable 2FA → Google Account → App Passwords → Generate
 * 
 * 4. SENDGRID_API_KEY (Alternative):
 *    - Go to sendgrid.com → Sign up → API Keys
 *    - Starts with "SG."
 */

/**
 * WHERE TO SET THESE ON DIFFERENT HOSTING PLATFORMS:
 * 
 * VERCEL:
 * - Project Settings → Environment Variables
 * 
 * RAILWAY:
 * - Project → Variables tab
 * 
 * HEROKU:
 * - App Settings → Config Vars
 * 
 * NETLIFY:
 * - Site Settings → Environment Variables
 * 
 * DIGITALOCEAN:
 * - App Settings → Environment
 * 
 * REPLIT:
 * - Secrets tab (lock icon) in sidebar
 */

// Export configuration
module.exports = API_KEYS;

// For ES modules
export default API_KEYS;