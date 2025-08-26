import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Github, 
  PlayCircle, 
  Download, 
  Users, 
  GraduationCap,
  FileText,
  Code 
} from "lucide-react";
import { fadeIn, staggerContainer, cardHover } from "@/lib/animations";

export default function Resources() {
  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API documentation for all Power Platform components.",
      link: "#",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: Github,
      title: "GitHub Repositories",
      description: "Open-source templates, solutions, and code samples for rapid development.",
      link: "#",
      color: "bg-gray-900/10 text-gray-900",
    },
    {
      icon: PlayCircle,
      title: "Video Tutorials",
      description: "Step-by-step video guides covering basic to advanced Power Platform topics.",
      link: "#",
      color: "bg-red-500/10 text-red-500",
    },
    {
      icon: Download,
      title: "Templates",
      description: "Ready-to-use Power Apps templates and Power Automate flows for common scenarios.",
      link: "#",
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join our active community of Power Platform developers and enthusiasts.",
      link: "#",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: GraduationCap,
      title: "Learning Paths",
      description: "Structured learning paths from beginner to expert level Power Platform mastery.",
      link: "#",
      color: "bg-orange-500/10 text-orange-500",
    },
  ];

  const featuredDownloads = [
    {
      icon: FileText,
      title: "Power Platform Best Practices Guide",
      description: "A comprehensive 50-page guide covering architectural patterns, security, and governance.",
      type: "PDF",
      size: "2.4 MB",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Code,
      title: "Starter Template Pack",
      description: "Collection of Power Apps canvas app templates for common business scenarios.",
      type: "ZIP",
      size: "15.2 MB",
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <div>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to master Power Platform development
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {resources.map((resource, index) => (
              <motion.div key={resource.title} variants={fadeIn}>
                <motion.div {...cardHover}>
                  <Card className="shadow-sm border border-border">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center mb-4`}>
                        <resource.icon className="text-xl" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{resource.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {resource.description}
                      </p>
                      <a
                        href={resource.link}
                        className="text-primary hover:text-primary/80 font-medium text-sm"
                        data-testid={`link-resource-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {resource.title === "GitHub Repositories" ? "View on GitHub" :
                         resource.title === "Video Tutorials" ? "Watch Now" :
                         resource.title === "Templates" ? "Download" :
                         resource.title === "Community" ? "Join Community" :
                         resource.title === "Learning Paths" ? "Start Learning" :
                         "Browse Docs"} →
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Downloads */}
          <section className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-center mb-12">Featured Downloads</h2>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {featuredDownloads.map((download, index) => (
                <motion.div key={download.title} variants={fadeIn}>
                  <Card className="border border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 ${download.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <download.icon className="text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{download.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {download.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {download.type} • {download.size}
                            </span>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              data-testid={`button-download-${download.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </section>
    </div>
  );
}
