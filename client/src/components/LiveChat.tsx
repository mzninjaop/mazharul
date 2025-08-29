import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Minimize2, Bot, User } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

// Fallback responses in case AI fails
const fallbackResponses = [
  "Thanks for reaching out! I'm DEATH's AI assistant. How can I help you today?",
  "I specialize in cybersecurity, Python development, Discord bots, and full-stack solutions. What project are you interested in?",
  "That's a great question! Let me connect you with DEATH for a detailed discussion. Please share your contact info.",
  "I'd be happy to help with that! DEATH has extensive experience in that area. Would you like to schedule a consultation?"
];

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hello! I'm DEATH's AI assistant powered by advanced AI. I can help answer questions about cybersecurity services, Python development, Discord bots, web development, and much more. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI Chat mutation
  const chatMutation = useMutation({
    mutationFn: async (userMessage: string) => {
      const response = await apiRequest('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ 
          message: userMessage,
          history: conversationHistory.slice(-10) // Keep last 10 messages for context
        })
      });
      return response;
    },
    onSuccess: (data, userMessage) => {
      // Update conversation history
      setConversationHistory(prev => [...prev, `User: ${userMessage}`, `Assistant: ${data.response}`]);
      
      // Add AI response to messages
      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.response,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    },
    onError: (error) => {
      console.error('Chat error:', error);
      // Fallback to random response
      const botMessage: Message = {
        id: Date.now() + 1,
        text: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)] + " (AI temporarily unavailable)",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }
  });

  const sendMessage = () => {
    if (!inputValue.trim() || chatMutation.isPending) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    const messageText = inputValue;
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Send to AI
    chatMutation.mutate(messageText);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-all duration-300"
        data-testid="chat-open-button"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-50 w-80 bg-background border-primary/20 shadow-2xl transition-all duration-300 ${
      isMinimized ? 'h-14' : 'h-96'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-primary/20 bg-primary/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <Bot className="w-4 h-4 text-primary" />
          <span className="font-semibold">DEATH's AI Assistant</span>
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-8 w-8"
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8"
            data-testid="chat-close-button"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-64">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!message.isUser && <Bot className="w-6 h-6 text-primary mb-1" />}
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm whitespace-pre-wrap ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-muted text-foreground rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
                {message.isUser && <User className="w-6 h-6 text-muted-foreground mb-1" />}
              </div>
            ))}
            
            {chatMutation.isPending && (
              <div className="flex justify-start items-end gap-2">
                <Bot className="w-6 h-6 text-primary" />
                <div className="bg-muted text-foreground p-3 rounded-lg text-sm">
                  <div className="flex gap-1 items-center">
                    <span className="text-xs text-muted-foreground mr-2">AI is thinking...</span>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-primary/20">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
                data-testid="chat-input"
              />
              <Button
                onClick={sendMessage}
                disabled={!inputValue.trim() || chatMutation.isPending}
                size="icon"
                data-testid="chat-send-button"
                className={chatMutation.isPending ? 'opacity-50 cursor-not-allowed' : ''}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};