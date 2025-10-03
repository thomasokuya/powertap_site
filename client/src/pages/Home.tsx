import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Cog, BookOpen, Users, ArrowRight, Zap, Bot, Building, Layers } from "lucide-react";
import { fadeIn, staggerContainer, cardHover, buttonHover } from "@/lib/animations";
import techPro1 from "@assets/stock_images/professional_black_m_df9c0993.jpg";
import techPro2 from "@assets/stock_images/professional_black_f_2ba1d530.jpg";
import techPro3 from "@assets/stock_images/professional_black_m_f721139d.jpg";

export default function Home() {
  const features = [
    {
      icon: Cog,
      title: "Solutions",
      description: "Pre-built solutions for every Power Platform scenario",
      link: "/solutions",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: BookOpen,
      title: "Playbooks",
      description: "Step-by-step automation guides and best practices",
      link: "/playbooks",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join thousands of Power Platform professionals",
      link: "/contact",
      color: "bg-green-500/10 text-green-500",
    },
  ];

  const integrations = [
    {
      icon: Zap,
      name: "Power Platform",
      color: "text-blue-600",
    },
    {
      icon: Bot,
      name: "Copilot",
      color: "text-purple-600",
    },
    {
      icon: Building,
      name: "Dynamics 365",
      color: "text-orange-600",
    },
    {
      icon: Layers,
      name: "Microsoft 365",
      color: "text-green-600",
    },
  ];

  return (
    <div>
      {/* Hero Section with Team Images */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Team Images */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img
                    src={techPro1}
                    alt="Professional developer"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-lg mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <img
                    src={techPro2}
                    alt="Professional engineer"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <img
                    src={techPro3}
                    alt="Professional tech consultant"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Hero Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Professional Design,
                <br />
                Development &
                <br />
                <span className="gradient-text">Training Services</span>
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground mb-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Expert Power Platform solutions delivered by our team of certified
                professionals. Transform your business with cutting-edge technology
                and personalized training.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link href="/solutions">
                  <motion.div {...buttonHover}>
                    <Button
                      size="lg"
                      className="px-8 py-4 text-lg font-semibold shadow-lg"
                      data-testid="button-explore-solutions"
                    >
                      Explore Solutions
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/contact">
                  <motion.div {...buttonHover}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-4 text-lg font-semibold"
                      data-testid="button-get-started"
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner Section - PowerTap Message */}
      <section className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              <span className="text-white">Supercharge</span> your productivity with Power Platform
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              Guides, playbooks, and integrations for Copilot, Dynamics 365, and Microsoft 365
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={fadeIn}>
                <Link href={feature.link}>
                  <motion.div {...cardHover}>
                    <Card className="text-center shadow-sm border border-border">
                      <CardContent className="p-8">
                        <div
                          className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                        >
                          <feature.icon className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {feature.description}
                        </p>
                        <span className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Integrations Made Simple</h2>
            <p className="text-muted-foreground mb-12">
              Seamlessly connect with Microsoft's ecosystem
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                className="integration-logo flex items-center justify-center p-6 bg-card rounded-lg border border-border"
                variants={fadeIn}
                whileHover={{
                  scale: 1.05,
                  filter: "grayscale(0%) opacity(1)",
                }}
              >
                <div className="text-center">
                  <integration.icon
                    className={`text-4xl ${integration.color} mb-2`}
                  />
                  <div className="text-sm font-medium">{integration.name}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Get Started Today
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Transform your business with Power Platform
            </p>
            <Link href="/contact">
              <motion.div {...buttonHover}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold shadow-lg"
                  data-testid="button-start-journey"
                >
                  Start Your Journey
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
