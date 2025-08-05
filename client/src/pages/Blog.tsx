import { Calendar, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Discord Bot Hosting",
      excerpt: "Learn how to deploy your first Discord bot with our easy-to-follow guide covering everything from setup to deployment.",
      author: "Portix Team",
      date: "January 15, 2025",
      category: "Tutorial"
    },
    {
      id: 2,
      title: "Best Practices for Bot Security",
      excerpt: "Discover essential security practices to keep your bots and data safe from threats and vulnerabilities.",
      author: "Portix Team", 
      date: "January 10, 2025",
      category: "Security"
    },
    {
      id: 3,
      title: "Scaling Your Bot Infrastructure",
      excerpt: "Tips and strategies for scaling your bot hosting infrastructure as your community grows and demands increase.",
      author: "Portix Team",
      date: "January 5, 2025", 
      category: "Performance"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" data-testid="blog-hero-section">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="blog-hero-title">
              Blog & Resources
            </h1>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto" data-testid="blog-hero-subtitle">
              Stay updated with the latest hosting tips, tutorials, and industry insights from the Portix Host team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 lg:py-24" data-testid="blog-posts-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-secondary rounded-xl p-8 border border-custom hover:border-accent transition-colors"
                  data-testid={`blog-post-${post.id}`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium" data-testid={`blog-category-${post.id}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center text-secondary text-sm space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span data-testid={`blog-author-${post.id}`}>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span data-testid={`blog-date-${post.id}`}>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 hover:text-accent transition-colors" data-testid={`blog-title-${post.id}`}>
                    <a href="#" className="block">
                      {post.title}
                    </a>
                  </h2>
                  
                  <p className="text-secondary mb-6 leading-relaxed" data-testid={`blog-excerpt-${post.id}`}>
                    {post.excerpt}
                  </p>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-accent hover:text-blue-300 transition-colors font-medium"
                    data-testid={`blog-read-more-${post.id}`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 lg:py-24 bg-secondary/30" data-testid="blog-coming-soon-section">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="blog-coming-soon-title">
              More Content Coming Soon
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto mb-8" data-testid="blog-coming-soon-subtitle">
              We're constantly working on new tutorials, guides, and insights to help you make the most of your hosting experience.
            </p>
            <button className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors" data-testid="button-subscribe">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
