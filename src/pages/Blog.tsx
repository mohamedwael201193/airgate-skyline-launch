import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Introducing AirGate OS: Privacy-First Credential Verification",
      excerpt: "We're excited to announce AirGate OS, a new platform for building Web3 apps with zero-knowledge credential verification.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "Announcement",
    },
    {
      title: "How Rate Limiting Nullifiers Work",
      excerpt: "Deep dive into RLN technology and how it enables privacy-preserving rate limiting for Web3 applications.",
      date: "Jan 10, 2025",
      readTime: "8 min read",
      category: "Technical",
    },
    {
      title: "Building DeFi Compliance Without Sacrificing Privacy",
      excerpt: "Learn how leading DeFi protocols are using AirGate OS to meet regulatory requirements while protecting user data.",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      category: "Use Cases",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Latest updates, guides, and insights from the AirGate team
          </p>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
