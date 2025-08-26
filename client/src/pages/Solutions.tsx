import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Box, TrendingUp, Users, Bot, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer, cardHover } from "@/lib/animations";

export default function Solutions() {
  const solutions = [
    {
      icon: Box,
      title: "Power Platform Standalone",
      description:
        "Pure Power Platform solutions including Power Apps, Power Automate, and Power BI for streamlined business processes.",
      color: "bg-blue-500/10 text-blue-500",
      link: "#",
    },
    {
      icon: TrendingUp,
      title: "Power Platform + Dynamics 365",
      description:
        "Integrate Power Platform with Dynamics 365 for comprehensive CRM and ERP automation workflows.",
      color: "bg-orange-500/10 text-orange-500",
      link: "#",
    },
    {
      icon: Users,
      title: "Power Platform + Microsoft 365",
      description:
        "Enhance productivity by connecting Power Platform with Teams, SharePoint, Outlook, and other Microsoft 365 services.",
      color: "bg-green-500/10 text-green-500",
      link: "#",
    },
    {
      icon: Bot,
      title: "Power Platform + Copilot",
      description:
        "Leverage AI-powered automation with Copilot integration for intelligent business process optimization.",
      color: "bg-purple-500/10 text-purple-500",
      link: "#",
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
            <h1 className="text-4xl font-bold mb-6">Solutions for Every Scenario</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover pre-built solutions tailored for your specific Power Platform needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {solutions.map((solution, index) => (
              <motion.div key={solution.title} variants={fadeIn}>
                <motion.div {...cardHover}>
                  <Card className="shadow-sm border border-border">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`w-12 h-12 ${solution.color} rounded-lg flex items-center justify-center mr-4`}>
                          <solution.icon className="text-xl" />
                        </div>
                        <h3 className="text-xl font-semibold">{solution.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {solution.description}
                      </p>
                      <a
                        href={solution.link}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                        data-testid={`link-solution-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
