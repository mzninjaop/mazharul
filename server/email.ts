// Simple email forwarding utility
// For now, this just formats the email content
// Later, you can integrate with SendGrid or another email service

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
New Contact Form Submission from D E A T H Portfolio

From: ${submission.name}
Email: ${submission.email}
Service Requested: ${submission.service || 'General Inquiry'}
Budget: ${submission.budget || 'Not specified'}
Timeline: ${submission.timeline || 'Flexible'}

Message:
${submission.message}

Submitted: ${submission.createdAt}

---
Reply directly to ${submission.email} to respond to this inquiry.
`;
}

// Function to handle email notifications
export async function sendEmailNotification(submission: ContactSubmission): Promise<void> {
  // For now, just log the formatted email
  // This is where you would integrate with SendGrid or another email service
  const emailContent = formatEmailContent(submission);
  
  console.log('\n📨 EMAIL CONTENT TO FORWARD:');
  console.log('To: deathop.og@gmail.com');
  console.log(`Subject: Portfolio Contact: ${submission.name}`);
  console.log('\n' + emailContent);
  console.log('📧 Copy the above content and email it to yourself manually,');
  console.log('   or set up SendGrid integration for automatic delivery.');
}