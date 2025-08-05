export default function Blog() {
  const featuredPost = {
    title: "Discord Bot Hosting: Complete Guide for 2024",
    excerpt: "Learn how to deploy, scale, and maintain Discord bots with our comprehensive hosting guide. From basic setup to advanced optimization techniques.",
    image: "/api/placeholder/600/300",
    author: "Alex Chen",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    category: "Bot Hosting",
    slug: "discord-bot-hosting-guide-2024"
  };

  const blogPosts = [
    {
      title: "10 Best Practices for Telegram Bot Development",
      excerpt: "Essential tips and tricks for building scalable, secure, and user-friendly Telegram bots that handle millions of messages.",
      image: "/api/placeholder/400/250",
      author: "Sarah Martinez",
      date: "Jan 12, 2024",
      readTime: "6 min read",
      category: "Development",
      slug: "telegram-bot-best-practices"
    },
    {
      title: "Comparing Cloud Hosting Providers: AWS vs DigitalOcean vs Portix",
      excerpt: "In-depth comparison of popular hosting solutions for developers, including pricing, performance, and developer experience.",
      image: "/api/placeholder/400/250",
      author: "Mike Johnson",
      date: "Jan 10, 2024",
      readTime: "12 min read",
      category: "Cloud Hosting",
      slug: "cloud-hosting-comparison-2024"
    },
    {
      title: "Setting Up Auto-Scaling for High-Traffic Applications",
      excerpt: "Learn how to configure automatic scaling for your web applications to handle traffic spikes without downtime.",
      image: "/api/placeholder/400/250",
      author: "Emma Wilson",
      date: "Jan 8, 2024",
      readTime: "10 min read",
      category: "Performance",
      slug: "auto-scaling-guide"
    },
    {
      title: "Minecraft Server Hosting: Performance Optimization Tips",
      excerpt: "Maximize your Minecraft server performance with these proven optimization techniques and hosting configurations.",
      image: "/api/placeholder/400/250",
      author: "David Kim",
      date: "Jan 5, 2024",
      readTime: "7 min read",
      category: "Game Hosting",
      slug: "minecraft-server-optimization"
    },
    {
      title: "Database Security Best Practices for Web Applications",
      excerpt: "Protect your application data with these essential database security measures and hosting considerations.",
      image: "/api/placeholder/400/250",
      author: "Lisa Chen",
      date: "Jan 3, 2024",
      readTime: "9 min read",
      category: "Security",
      slug: "database-security-practices"
    },
    {
      title: "Node.js Performance Tuning for Production Hosting",
      excerpt: "Optimize your Node.js applications for production environments with these performance tuning strategies.",
      image: "/api/placeholder/400/250",
      author: "Alex Chen",
      date: "Dec 30, 2023",
      readTime: "11 min read",
      category: "Development",
      slug: "nodejs-performance-tuning"
    }
  ];

  const categories = [
    { name: "All Posts", count: 25, active: true },
    { name: "Bot Hosting", count: 8 },
    { name: "Web Hosting", count: 6 },
    { name: "Game Hosting", count: 4 },
    { name: "Development", count: 5 },
    { name: "Security", count: 2 }
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="py-24 lg:py-32" data-testid="blog-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 mb-6 bg-accent px-4 py-2 rounded-xl">
              <i className="fas fa-blog text-white"></i>
              <span className="text-white font-tech-mono font-medium uppercase tracking-wider">
                Developer Blog
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight font-orbitron" data-testid="blog-title">
              Hosting <span className="text-accent">Insights</span> & Tutorials
            </h1>
            <p className="text-secondary text-xl leading-relaxed font-tech-mono max-w-3xl mx-auto" data-testid="blog-subtitle">
              Learn from our hosting experts with in-depth guides, tutorials, and best practices for bot hosting, web hosting, and application deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-secondary" data-testid="featured-post">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white font-orbitron mb-2">Featured Article</h2>
              <p className="text-secondary font-tech-mono">Our latest and most comprehensive guide</p>
            </div>
            
            <div className="bg-primary/50 rounded-3xl border border-custom overflow-hidden hover:border-accent/50 transition-colors group" data-testid="featured-article">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center space-x-2 mb-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-tech-mono font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-secondary font-tech-mono text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white font-orbitron mb-4 group-hover:text-accent transition-colors" data-testid="featured-title">
                    {featuredPost.title}
                  </h3>
                  <p className="text-secondary font-tech-mono leading-relaxed mb-6" data-testid="featured-excerpt">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                        <i className="fas fa-user text-accent"></i>
                      </div>
                      <div>
                        <div className="text-white font-tech-mono font-medium">{featuredPost.author}</div>
                        <div className="text-secondary font-tech-mono text-sm">{featuredPost.date}</div>
                      </div>
                    </div>
                    <button className="bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-tech-mono font-medium transition-colors" data-testid="button-read-featured">
                      Read Article
                    </button>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                    data-testid="featured-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16" data-testid="blog-categories">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-xl font-tech-mono font-medium transition-colors ${
                    category.active
                      ? 'bg-accent text-white'
                      : 'bg-secondary border border-custom text-secondary hover:text-accent hover:border-accent/50'
                  }`}
                  data-testid={`category-${index}`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-secondary" data-testid="blog-posts">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-primary/50 rounded-2xl border border-custom overflow-hidden hover:border-accent/50 transition-all duration-300 group hover:transform hover:scale-105"
                  data-testid={`blog-post-${index}`}
                >
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      data-testid={`post-image-${index}`}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-tech-mono font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white font-orbitron mb-3 group-hover:text-accent transition-colors line-clamp-2" data-testid={`post-title-${index}`}>
                      {post.title}
                    </h3>
                    <p className="text-secondary font-tech-mono leading-relaxed mb-4 line-clamp-3" data-testid={`post-excerpt-${index}`}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-custom">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                          <i className="fas fa-user text-accent text-sm"></i>
                        </div>
                        <div>
                          <div className="text-white font-tech-mono text-sm">{post.author}</div>
                          <div className="text-secondary font-tech-mono text-xs">{post.date}</div>
                        </div>
                      </div>
                      <div className="text-secondary font-tech-mono text-sm">{post.readTime}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 lg:py-32" data-testid="newsletter">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-accent/5 rounded-3xl p-12 border border-accent/20">
              <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <i className="fas fa-envelope text-accent text-3xl"></i>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-orbitron" data-testid="newsletter-title">
                Stay Updated with <span className="text-accent">Hosting Tips</span>
              </h2>
              <p className="text-secondary text-xl leading-relaxed font-tech-mono mb-8" data-testid="newsletter-subtitle">
                Get the latest hosting insights, tutorials, and industry news delivered to your inbox every week.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-primary border border-custom rounded-xl text-white placeholder-secondary font-tech-mono focus:border-accent focus:outline-none"
                    data-testid="newsletter-email"
                  />
                  <button className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-tech-mono font-medium transition-colors whitespace-nowrap" data-testid="button-subscribe">
                    Subscribe
                  </button>
                </div>
                <p className="text-secondary font-tech-mono text-sm mt-4">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-24 lg:py-32 bg-secondary" data-testid="popular-topics">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-orbitron" data-testid="topics-title">
                Popular <span className="text-accent">Topics</span>
              </h2>
              <p className="text-secondary text-xl leading-relaxed font-tech-mono" data-testid="topics-subtitle">
                Explore our most read articles and tutorials
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "fab fa-discord", title: "Discord Bots", count: "12 articles" },
                { icon: "fab fa-telegram", title: "Telegram Bots", count: "8 articles" },
                { icon: "fas fa-gamepad", title: "Game Servers", count: "6 articles" },
                { icon: "fas fa-shield-alt", title: "Security", count: "5 articles" },
                { icon: "fas fa-database", title: "Databases", count: "7 articles" },
                { icon: "fas fa-rocket", title: "Deployment", count: "9 articles" },
                { icon: "fas fa-chart-line", title: "Performance", count: "4 articles" },
                { icon: "fas fa-code", title: "Development", count: "11 articles" }
              ].map((topic, index) => (
                <div key={index} className="bg-primary/50 rounded-2xl p-6 border border-custom text-center hover:border-accent/50 transition-colors group" data-testid={`topic-${index}`}>
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <i className={`${topic.icon} text-accent text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-white font-orbitron mb-2" data-testid={`topic-title-${index}`}>
                    {topic.title}
                  </h3>
                  <p className="text-secondary font-tech-mono text-sm" data-testid={`topic-count-${index}`}>
                    {topic.count}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}