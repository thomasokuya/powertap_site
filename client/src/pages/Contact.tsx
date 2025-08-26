import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter, 
  Clock, 
  MapPin 
} from "lucide-react";
import { fadeIn, staggerContainer, cardHover } from "@/lib/animations";

const contactFormSchema = insertContactSchema.extend({
  name: insertContactSchema.shape.name.min(2, "Name must be at least 2 characters"),
  email: insertContactSchema.shape.email.email("Please enter a valid email address"),
  message: insertContactSchema.shape.message.min(10, "Message must be at least 10 characters"),
});

type ContactFormData = InsertContact;

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

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
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border border-border">
                  <CardContent className="p-8">
                    <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            {...register("name")}
                            data-testid="input-contact-name"
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive mt-1">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            data-testid="input-contact-email"
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Select
                          value={watch("subject")}
                          onValueChange={(value) => setValue("subject", value)}
                        >
                          <SelectTrigger data-testid="select-contact-subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                            <SelectItem value="Technical Support">Technical Support</SelectItem>
                            <SelectItem value="Partnership">Partnership</SelectItem>
                            <SelectItem value="Consulting Services">Consulting Services</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.subject && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.subject.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          rows={6}
                          {...register("message")}
                          data-testid="textarea-contact-message"
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.message.message}
                          </p>
                        )}
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting || contactMutation.isPending}
                        data-testid="button-contact-submit"
                      >
                        {isSubmitting || contactMutation.isPending
                          ? "Sending..."
                          : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      {contactInfo.map((contact) => (
                        <div key={contact.label} className="flex items-center space-x-3">
                          <div className={`w-10 h-10 ${contact.color} rounded-lg flex items-center justify-center`}>
                            <contact.icon className="h-5 w-5" />
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
                  </CardContent>
                </Card>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
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
                transition={{ duration: 0.6, delay: 0.4 }}
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
