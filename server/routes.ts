import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Save to database
      const submission = await storage.createContactSubmission(validatedData);
      
      // For now, just log the submission (later we'll add email)
      console.log('\n=== NEW CONTACT FORM SUBMISSION ===');
      console.log(`Name: ${submission.name}`);
      console.log(`Email: ${submission.email}`);
      console.log(`Service: ${submission.service || 'Not specified'}`);
      console.log(`Budget: ${submission.budget || 'Not specified'}`);
      console.log(`Timeline: ${submission.timeline || 'Not specified'}`);
      console.log(`Message: ${submission.message}`);
      console.log(`Submitted: ${submission.createdAt}`);
      console.log('================================\n');
      
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
