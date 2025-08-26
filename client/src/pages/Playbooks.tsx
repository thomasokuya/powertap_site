import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { fadeIn, staggerContainer, cardHover } from "@/lib/animations";

export default function Playbooks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");

  const playbooks = [
    {
      title: "Automate Payroll Processing",
      category: "Power Automate",
      level: "Intermediate",
      description: "Streamline your payroll workflow with automated calculations, approvals, and employee notifications.",
      readTime: "15 min read",
      categoryColor: "bg-blue-100 text-blue-800",
      levelColor: "bg-green-100 text-green-800",
    },
    {
      title: "Build a Library Management System",
      category: "Power Apps",
      level: "Beginner",
      description: "Create a complete library system with book tracking, member management, and automated notifications.",
      readTime: "25 min read",
      categoryColor: "bg-purple-100 text-purple-800",
      levelColor: "bg-yellow-100 text-yellow-800",
    },
    {
      title: "ERP System Integrations",
      category: "Integration",
      level: "Advanced",
      description: "Connect your existing ERP systems with Power Platform for seamless data flow and process automation.",
      readTime: "35 min read",
      categoryColor: "bg-orange-100 text-orange-800",
      levelColor: "bg-red-100 text-red-800",
    },
    {
      title: "Sales Dashboard Automation",
      category: "Power BI",
      level: "Beginner",
      description: "Build dynamic sales dashboards with real-time data visualization and automated reporting.",
      readTime: "20 min read",
      categoryColor: "bg-green-100 text-green-800",
      levelColor: "bg-yellow-100 text-yellow-800",
    },
    {
      title: "Customer Onboarding Flow",
      category: "Power Automate",
      level: "Intermediate",
      description: "Automate customer onboarding with document collection, approval workflows, and welcome sequences.",
      readTime: "18 min read",
      categoryColor: "bg-blue-100 text-blue-800",
      levelColor: "bg-green-100 text-green-800",
    },
    {
      title: "Field Service Management",
      category: "Power Apps",
      level: "Advanced",
      description: "Create mobile-first field service applications with scheduling, tracking, and reporting capabilities.",
      readTime: "40 min read",
      categoryColor: "bg-purple-100 text-purple-800",
      levelColor: "bg-red-100 text-red-800",
    },
  ];

  const filteredPlaybooks = playbooks.filter((playbook) => {
    const matchesSearch = playbook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         playbook.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || playbook.category === categoryFilter;
    const matchesLevel = levelFilter === "all" || playbook.level === levelFilter;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

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
            <h1 className="text-4xl font-bold mb-6">Automation Playbooks</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Step-by-step guides to automate your business processes
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search playbooks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search-playbooks"
              />
            </div>
            <div className="flex gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40" data-testid="select-category-filter">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Power Apps">Power Apps</SelectItem>
                  <SelectItem value="Power Automate">Power Automate</SelectItem>
                  <SelectItem value="Power BI">Power BI</SelectItem>
                  <SelectItem value="Integration">Integration</SelectItem>
                </SelectContent>
              </Select>
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-32" data-testid="select-level-filter">
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Playbook Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {filteredPlaybooks.map((playbook, index) => (
              <motion.div key={playbook.title} variants={fadeIn}>
                <motion.div {...cardHover}>
                  <Card className="shadow-sm border border-border overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={playbook.categoryColor}>
                          {playbook.category}
                        </Badge>
                        <Badge className={playbook.levelColor}>
                          {playbook.level}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{playbook.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {playbook.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {playbook.readTime}
                        </span>
                        <a
                          href="#"
                          className="text-primary hover:text-primary/80 font-medium text-sm"
                          data-testid={`link-playbook-${playbook.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          Read More →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {filteredPlaybooks.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground text-lg">
                No playbooks found matching your criteria. Try adjusting your search or filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
