import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Cog, BookOpen, Users, ArrowRight, GraduationCap, Target, Lightbulb, TrendingUp } from "lucide-react";
import { fadeIn, staggerContainer, cardHover, buttonHover } from "@/lib/animations";
import powerPlatformLogo from "@assets/Power Platform_1759543098152.png";
import copilotLogo from "@assets/Copilot_1759543098150.png";
import dynamics365Logo from "@assets/Dynamics 365_1759543098151.png";
import microsoft365Logo from "@assets/Microsoft 365_1759543098152.png";

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
      logo: powerPlatformLogo,
      name: "Power Platform",
    },
    {
      logo: copilotLogo,
      name: "Copilot",
    },
    {
      logo: dynamics365Logo,
      name: "Dynamics 365",
    },
    {
      logo: microsoft365Logo,
      name: "Microsoft 365",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gray-500">Supercharge</span> your
              productivity
              <br />
              with Power Platform
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Guides, playbooks, and integrations for Copilot, Dynamics 365, and
              Microsoft 365
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/solutions">
                <motion.div {...buttonHover}>
                  <Button
                    size="lg"
                    className="px-8 py-4 text-lg font-semibold shadow-lg bg-black text-white hover:bg-gray-800 rounded-none"
                    data-testid="button-explore-solutions"
                  >
                    Explore Solutions
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
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
                          className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6`}
                        >
                          <feature.icon className="text-2xl text-black" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {feature.description}
                        </p>
                        <span className="text-black hover:text-gray-700 font-medium inline-flex items-center">
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
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="w-16 h-16 mx-auto mb-3 object-contain"
                  />
                  <div className="text-sm font-medium">{integration.name}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Training & Events Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Training & Events</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Empower your workforce to become citizen developers while bridging the gap between 
              business objectives and technical excellence through goal-driven, transformative learning experiences.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: GraduationCap,
                title: "Citizen Developer Program",
                description: "Transform employees into solution builders with hands-on training in low-code development.",
              },
              {
                icon: Target,
                title: "Business-Tech Alignment",
                description: "Bridge the gap between business requirements and technical implementation for seamless delivery.",
              },
              {
                icon: Lightbulb,
                title: "Innovation Workshops",
                description: "Foster creativity and problem-solving skills to drive continuous process improvement.",
              },
              {
                icon: TrendingUp,
                title: "Productivity Acceleration",
                description: "Measure and maximize ROI through strategic implementation and change management.",
              },
            ].map((training, index) => (
              <motion.div key={training.title} variants={fadeIn}>
                <Card className="text-center shadow-sm border border-border h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <training.icon className="text-xl text-black" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">
                      {training.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {training.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <motion.div {...buttonHover}>
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold shadow-lg bg-black text-white hover:bg-gray-800 rounded-none"
                  data-testid="button-explore-training"
                >
                  Explore Training Options
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Started Today
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Transform your business with Power Platform
            </p>
            <Link href="/contact">
              <motion.div {...buttonHover}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold shadow-lg bg-white text-black hover:bg-gray-100 rounded-none"
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
