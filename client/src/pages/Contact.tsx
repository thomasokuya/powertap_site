import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter, 
  Clock, 
  MapPin,
  Info
} from "lucide-react";

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@powertap.co",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "@powertap-solutions",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@powertap",
      color: "bg-gray-900/10 text-gray-900",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@powertap_co",
      color: "bg-blue-400/10 text-blue-400",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Closed" },
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
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about Power Platform? We're here to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information Card */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border border-border">
                  <CardContent className="p-8">
                    <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
                    <Alert className="mb-6" data-testid="alert-contact-info">
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        This is a static website. Please reach out to us directly via email at{" "}
                        <a href="mailto:info@powertap.co" className="font-semibold text-primary hover:underline">
                          info@powertap.co
                        </a>{" "}
                        or connect with us on social media using the links below.
                      </AlertDescription>
                    </Alert>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Ways to Contact Us:</h3>
                      <div className="grid gap-4">
                        {contactInfo.map((contact) => (
                          <div key={contact.label} className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
                            <div className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center`}>
                              <contact.icon className="h-6 w-6" />
                            </div>
                            <div>
                              <div className="font-medium">{contact.label}</div>
                              <div className="text-sm text-muted-foreground">
                                {contact.value}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                    <div className="space-y-2 text-sm">
                      {officeHours.map((hours, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-muted-foreground">{hours.day}</span>
                          <span>{hours.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="border border-border bg-muted/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium">Quick Response</div>
                        <div className="text-sm text-muted-foreground">
                          We typically respond within 24 hours
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Map Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border border-border overflow-hidden">
              <div className="h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-muted-foreground mb-4 mx-auto" />
                  <p className="text-muted-foreground">Interactive Map Placeholder</p>
                  <p className="text-sm text-muted-foreground mt-2">New York, NY</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
