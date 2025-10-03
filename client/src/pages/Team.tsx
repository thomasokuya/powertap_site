import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      bio: "Leading our technical vision with 15+ years of experience in enterprise solutions and Power Platform architecture.",
      expertise: ["Power Platform", "Solution Architecture", "Digital Transformation"],
    },
    {
      name: "Michael Chen",
      role: "Senior Power Platform Developer",
      bio: "Specializing in custom Power Apps and automation workflows that drive business efficiency and innovation.",
      expertise: ["Power Apps", "Power Automate", "Dataverse"],
    },
    {
      name: "Emily Rodriguez",
      role: "Training & Enablement Lead",
      bio: "Passionate about empowering teams to become citizen developers through hands-on training and mentorship.",
      expertise: ["Training", "Change Management", "Citizen Development"],
    },
    {
      name: "David Park",
      role: "Dynamics 365 Consultant",
      bio: "Expert in integrating Dynamics 365 with Power Platform to create seamless business solutions.",
      expertise: ["Dynamics 365", "CRM", "Business Intelligence"],
    },
    {
      name: "Jennifer Williams",
      role: "Copilot Integration Specialist",
      bio: "Pioneering AI-powered productivity solutions using Microsoft Copilot and intelligent automation.",
      expertise: ["AI", "Copilot", "Microsoft 365"],
    },
    {
      name: "Alex Kumar",
      role: "Solutions Architect",
      bio: "Bridging business requirements with technical implementations through strategic solution design.",
      expertise: ["Enterprise Architecture", "Integration", "Governance"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet The Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of certified professionals brings decades of combined experience
              in Power Platform, Dynamics 365, and Microsoft 365 solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeIn}
                data-testid={`card-team-member-${index}`}
              >
                <Card className="h-full shadow-sm border border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    {/* Avatar Placeholder */}
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-gray-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    {/* Member Info */}
                    <h3 className="text-xl font-semibold text-center mb-2" data-testid={`text-name-${index}`}>
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 text-center mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm mb-6 text-center">
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      <a
                        href="#"
                        className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                        data-testid={`link-linkedin-${index}`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                        data-testid={`link-email-${index}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to excellence, innovation, and empowering our clients
              to achieve their business goals through technology.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Excellence",
                description: "Delivering exceptional quality in every solution we build and every training we provide.",
              },
              {
                title: "Innovation",
                description: "Staying ahead of technology trends to bring cutting-edge solutions to our clients.",
              },
              {
                title: "Empowerment",
                description: "Enabling teams to become self-sufficient through knowledge sharing and mentorship.",
              },
            ].map((value) => (
              <motion.div key={value.title} variants={fadeIn}>
                <Card className="text-center shadow-sm border border-border">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
