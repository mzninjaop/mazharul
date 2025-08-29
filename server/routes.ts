import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { sendEmailNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // AI Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history = [] } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: "Message is required" });
      }

      // Create context about DEATH's services and expertise
      const systemPrompt = `You are an AI assistant for DEATH, a highly skilled cybersecurity expert and full-stack developer. Here's what you should know about DEATH:

EXPERTISE:
- 8+ years of Python development (AI, automation, Discord bots, web scrapers, ML models)
- Cybersecurity specialist: penetration testing, ethical hacking, vulnerability assessments
- Full-stack web development (React, Node.js, TypeScript, databases)
- Discord bot developer with 50+ bots created
- Blockchain/crypto development and trading bot creation
- VPS hosting and server management
- Enterprise security solutions

SERVICES OFFERED:
- Security audits and penetration testing
- Custom Discord bot development
- Python automation and AI solutions
- Web application development
- Crypto trading bot development
- VPS hosting and server management
- Cybersecurity consulting and training

PERSONALITY:
- Professional but approachable
- Expert knowledge but explains things clearly
- Cyberpunk/hacker aesthetic (mentions like "digital empire", "reaper", etc.)
- Confident in technical abilities
- Focuses on practical solutions

Always respond as DEATH's AI assistant, helping potential clients understand his services and expertise. If asked about pricing, suggest they contact DEATH directly for a custom quote. Keep responses informative but concise.`;

      const conversation = history.join('\n') + `\nUser: ${message}`;

      // Make request to OpenAI
      const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: conversation }
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!openaiResponse.ok) {
        throw new Error(`OpenAI API error: ${openaiResponse.status}`);
      }

      const openaiData = await openaiResponse.json();
      const aiResponse = openaiData.choices[0]?.message?.content || "I'm having trouble processing that right now. Could you try rephrasing your question?";

      res.json({ response: aiResponse });
    } catch (error) {
      console.error("Chat API error:", error);
      
      // Fallback responses for different error types
      const fallbackResponses = [
        "Thanks for your question! I'm DEATH's AI assistant. While I'm temporarily having technical difficulties, I can tell you that DEATH specializes in cybersecurity, Python development, Discord bots, and full-stack solutions. What specific service interests you?",
        "I'm experiencing some technical issues right now, but I'd love to help! DEATH offers security audits, custom development, and automation solutions. Would you like to know more about any particular service?",
        "My AI capabilities are temporarily limited, but I can still help! DEATH has 8+ years of experience in cybersecurity and development. What type of project are you considering?"
      ];
      
      const fallbackResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      res.json({ response: fallbackResponse });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Save to database
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification (formatted for manual forwarding)
      await sendEmailNotification({
        name: submission.name,
        email: submission.email,
        service: submission.service || undefined,
        budget: submission.budget || undefined,
        timeline: submission.timeline || undefined,
        message: submission.message,
        createdAt: submission.createdAt
      });
      
      res.json({ 
        success: true, 
        id: submission.id, 
        message: "Your message has been received! I'll get back to you within 24 hours." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Get contact submissions (admin endpoint)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Get submissions error:", error);
      res.status(500).json({ error: "Failed to get submissions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
