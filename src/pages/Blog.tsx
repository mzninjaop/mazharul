import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calendar, Clock, Eye, Heart, Share2, Search, 
  Filter, TrendingUp, Zap, Shield, Brain, Code 
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'ALL POSTS', count: 24 },
    { id: 'crypto', name: 'CRYPTO WARFARE', count: 8 },
    { id: 'development', name: 'CODE MASTERY', count: 12 },
    { id: 'ai', name: 'AI NECROMANCY', count: 6 },
    { id: 'tutorials', name: 'TUTORIALS', count: 10 },
    { id: 'industry', name: 'TECH INSIGHTS', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building the Ultimate Crypto Trading Bot: A Reaper's Guide",
      excerpt: "Learn how I built an AI-powered trading bot that generated $50K+ in profits using Python, machine learning, and advanced market analysis techniques.",
      content: "Full tutorial on creating profitable trading algorithms...",
      category: 'crypto',
      author: 'DEATH',
      date: '2024-01-15',
      readTime: '12 min',
      views: 15420,
      likes: 892,
      image: '/placeholder.svg',
      featured: true,
      tags: ['Python', 'AI', 'Trading', 'Cryptocurrency', 'Machine Learning']
    },
    {
      id: 2,
      title: "Discord Bot Empire: From Zero to 10,000 Servers",
      excerpt: "The complete journey of building and scaling Discord bots that serve millions of users. Architecture, optimization, and monetization strategies revealed.",
      content: "Step-by-step guide to Discord bot development...",
      category: 'development',
      author: 'DEATH',
      date: '2024-01-10',
      readTime: '18 min',
      views: 23150,
      likes: 1247,
      image: '/placeholder.svg',
      featured: true,
      tags: ['Discord.py', 'Python', 'Scaling', 'Architecture', 'Monetization']
    },
    {
      id: 3,
      title: "AI Code Generation: Teaching Machines to Write Perfect Code",
      excerpt: "Exploring the latest advances in AI-powered code generation. How I built a system that writes production-ready code from natural language descriptions.",
      content: "Deep dive into AI code generation techniques...",
      category: 'ai',
      author: 'DEATH', 
      date: '2024-01-08',
      readTime: '15 min',
      views: 18730,
      likes: 956,
      image: '/placeholder.svg',
      featured: false,
      tags: ['AI', 'OpenAI', 'Code Generation', 'Natural Language Processing']
    },
    {
      id: 4,
      title: "Cybersecurity in Web3: Protecting Your Digital Assets",
      excerpt: "Essential security practices for blockchain applications. Smart contract auditing, wallet security, and protecting against common attack vectors.",
      content: "Comprehensive security guide for Web3 developers...",
      category: 'tutorials',
      author: 'DEATH',
      date: '2024-01-05',
      readTime: '20 min',
      views: 12450,
      likes: 743,
      image: '/placeholder.svg',
      featured: false,
      tags: ['Security', 'Blockchain', 'Smart Contracts', 'Web3', 'Auditing']
    },
    {
      id: 5,
      title: "The Future of Full-Stack Development: My Tech Stack for 2024",
      excerpt: "Breaking down my current technology stack and why these tools dominate the development landscape. From React to Python, databases to deployment.",
      content: "Detailed analysis of modern development tools...",
      category: 'development',
      author: 'DEATH',
      date: '2024-01-03',
      readTime: '10 min',
      views: 9876,
      likes: 567,
      image: '/placeholder.svg',
      featured: false,
      tags: ['Full-Stack', 'React', 'Python', 'Tech Stack', 'Development']
    },
    {
      id: 6,
      title: "DeFi Revolution: Building the Next Generation of Finance",
      excerpt: "How decentralized finance is reshaping the financial world. Case studies from my latest DeFi projects and what's coming next in the space.",
      content: "Analysis of DeFi trends and future predictions...",
      category: 'industry',
      author: 'DEATH',
      date: '2024-01-01',
      readTime: '14 min',
      views: 14320,
      likes: 821,
      image: '/placeholder.svg',
      featured: false,
      tags: ['DeFi', 'Blockchain', 'Finance', 'Cryptocurrency', 'Innovation']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'crypto': return 'text-primary border-primary';
      case 'development': return 'text-secondary border-secondary';
      case 'ai': return 'text-accent border-accent';
      case 'tutorials': return 'text-neon-pink border-neon-pink';
      case 'industry': return 'text-neon-gold border-neon-gold';
      default: return 'text-foreground border-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation config={{ navigation: { items: [] } }} />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(128,0,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(128,0,128,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-glow" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-cyber-glow">
            <span className="text-primary">REAPER'S</span> CODEX
          </h1>
          <p className="text-2xl text-muted-foreground mb-12">
            Chronicles from the Digital Underworld - Insights, Tutorials & Tech Mastery
          </p>
          
          {/* Search & Filter */}
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search the archives..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg bg-background/50 border-primary/30 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`${
                  selectedCategory === category.id 
                    ? 'btn-cyber-glow' 
                    : 'btn-cyber'
                }`}
              >
                {category.name}
                <Badge className="ml-2" variant="secondary">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-cyber-glow">
              <span className="text-primary">FEATURED</span> CHRONICLES
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card 
                  key={post.id}
                  className="group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 glow-primary"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-gradient-cyber text-background">
                      FEATURED
                    </Badge>
                    <Badge className={`absolute top-4 right-4 ${getCategoryColor(post.category)}`} variant="outline">
                      {post.category.toUpperCase()}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-cyber-glow group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge 
                          key={index}
                          variant="outline"
                          className="text-xs border-muted text-muted-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full btn-cyber-glow">
                      READ FULL POST
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyber-glow">
            {selectedCategory === 'all' ? 'ALL' : selectedCategory.toUpperCase()} CHRONICLES
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card 
                key={post.id}
                className="group overflow-hidden bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <Badge className={`absolute top-3 right-3 ${getCategoryColor(post.category)}`} variant="outline">
                    {post.category.toUpperCase()}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {(post.views / 1000).toFixed(1)}K
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {post.likes}
                      </span>
                    </div>
                  </div>

                  <Button size="sm" className="w-full btn-cyber">
                    READ MORE
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-muted-foreground mb-4">
                No Chronicles Found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-cyber-glow">
            JOIN THE <span className="text-primary">CODEX</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get exclusive insights, tutorials, and updates delivered directly to your digital fortress.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email..."
              className="flex-1 bg-background/50 border-primary/30 focus:border-primary"
            />
            <Button className="btn-cyber-glow">
              SUBSCRIBE
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam, only legendary content. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;