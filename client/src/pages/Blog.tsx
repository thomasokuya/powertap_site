import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeIn, staggerContainer, cardHover } from "@/lib/animations";

export default function Blog() {
  const blogPosts = [
    {
      title: "Power Platform 2024 Year in Review",
      category: "Power Platform",
      date: "December 15, 2024",
      excerpt: "Explore the major updates, new features, and community highlights that shaped Power Platform in 2024. From AI integrations to enhanced security features...",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      featured: true,
    },
    {
      title: "Integrating Dynamics 365 with Power Apps",
      category: "Dynamics 365",
      date: "December 12, 2024",
      excerpt: "Learn how to create seamless connections between your Dynamics 365 environment and custom Power Apps...",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    },
    {
      title: "AI-Powered Automation with Copilot",
      category: "Copilot",
      date: "December 10, 2024",
      excerpt: "Discover how Microsoft Copilot is revolutionizing business process automation and productivity...",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    },
  ];

  const categories = [
    { name: "Power Platform", count: 24 },
    { name: "Dynamics 365", count: 18 },
    { name: "Copilot", count: 12 },
    { name: "Microsoft 365", count: 15 },
    { name: "Best Practices", count: 9 },
  ];

  return (
    <div>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">Insights & Updates</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest Power Platform trends and best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <motion.div
                className="space-y-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {blogPosts.map((post, index) => (
                  <motion.div key={post.title} variants={fadeIn}>
                    <motion.div {...cardHover}>
                      <Card 
                        className={`shadow-sm border border-border overflow-hidden ${
                          post.featured ? 'border-primary/20' : ''
                        }`}
                      >
                        <div className="relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className={`w-full object-cover ${
                              post.featured ? 'h-48' : 'h-40'
                            }`}
                          />
                          {post.featured && (
                            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                            <Badge variant="secondary">{post.category}</Badge>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                          <h2 className={`font-semibold mb-3 ${
                            post.featured ? 'text-xl' : 'text-lg'
                          }`}>
                            {post.title}
                          </h2>
                          <p className="text-muted-foreground mb-4">
                            {post.excerpt}
                          </p>
                          <a
                            href="#"
                            className="text-primary hover:text-primary/80 font-medium"
                            data-testid={`link-blog-${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            Read Full Article →
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled data-testid="button-pagination-previous">
                    Previous
                  </Button>
                  <Button size="sm" className="bg-primary" data-testid="button-pagination-1">
                    1
                  </Button>
                  <Button variant="outline" size="sm" data-testid="button-pagination-2">
                    2
                  </Button>
                  <Button variant="outline" size="sm" data-testid="button-pagination-3">
                    3
                  </Button>
                  <Button variant="outline" size="sm" data-testid="button-pagination-next">
                    Next
                  </Button>
                </nav>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="border border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <a
                          key={category.name}
                          href="#"
                          className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                          data-testid={`link-category-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <span>{category.name}</span>
                          <span className="text-muted-foreground">{category.count}</span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="border border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest insights delivered to your inbox
                    </p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        className="text-sm"
                        data-testid="input-sidebar-newsletter-email"
                      />
                      <Button className="w-full" size="sm" data-testid="button-sidebar-newsletter-subscribe">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
