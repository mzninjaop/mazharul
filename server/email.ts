// Email notification system using nodemailer with Gmail SMTP
// This works with any Gmail account without needing external services

export interface ContactSubmission {
  name: string;
  email: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
  createdAt: Date;
}

export function formatEmailContent(submission: ContactSubmission): string {
  return `
🔥 NEW CONTACT FROM DEATH'S PORTFOLIO 🔥

👤 FROM: ${submission.name}
📧 EMAIL: ${submission.email}
💼 SERVICE: ${submission.service || 'General Inquiry'}
💰 BUDGET: ${submission.budget || 'Not specified'}
⏰ TIMELINE: ${submission.timeline || 'Flexible'}

📝 MESSAGE:
${submission.message}

⏰ SUBMITTED: ${submission.createdAt.toLocaleString()}

---
💀 DEATH'S PORTFOLIO CONTACT SYSTEM 💀
Reply directly to ${submission.email}
`;
}

// Enhanced email notification with multiple delivery methods
export async function sendEmailNotification(submission: ContactSubmission): Promise<void> {
  const emailContent = formatEmailContent(submission);
  
  // Method 1: Try Nodemailer with Gmail (if credentials available)
  const emailSent = await tryNodemailerEmail(submission, emailContent);
  
  if (emailSent) {
    console.log('✅ Email successfully sent to deathop.og@gmail.com');
    return;
  }
  
  // Method 2: Fallback - Log detailed content for manual forwarding
  console.log('\n' + '='.repeat(60));
  console.log('📨 EMAIL NOTIFICATION FOR MANUAL FORWARDING');
  console.log('='.repeat(60));
  console.log('📍 TO: deathop.og@gmail.com');
  console.log(`📌 SUBJECT: 🔥 Portfolio Contact from ${submission.name}`);
  console.log('='.repeat(60));
  console.log(emailContent);
  console.log('='.repeat(60));
  console.log('⚡ COPY THE ABOVE AND EMAIL TO YOURSELF MANUALLY');
  console.log('💡 Or set up GMAIL_USER and GMAIL_PASS environment variables');
  console.log('='.repeat(60));
}

// Try to send email using nodemailer with Gmail
async function tryNodemailerEmail(submission: ContactSubmission, content: string): Promise<boolean> {
  try {
    // Check if we have Gmail credentials
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      return false;
    }

    // Dynamic import of nodemailer (since it might not be installed)
    const nodemailer = await import('nodemailer').catch(() => null);
    if (!nodemailer) {
      return false;
    }

    // Create transporter with Gmail
    const transporter = nodemailer.default.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS // Use App Password, not regular password
      }
    });

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'deathop.og@gmail.com',
      subject: `🔥 Portfolio Contact from ${submission.name}`,
      text: content,
      html: content.replace(/\n/g, '<br>')
    });

    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}