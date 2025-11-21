import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Newspaper, Mail, Share2, FolderOpen, Edit, ArrowLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const services = [
  {
    icon: FileText,
    name: "Press Release",
    standalone: "$500",
    withPackage: "$400",
    description: "Professional press release writing and distribution to announce news, milestones, or launches."
  },
  {
    icon: Newspaper,
    name: "Feature Article",
    standalone: "$600",
    withPackage: "$500",
    description: "In-depth article or byline that positions you as a thought leader in your industry."
  },
  {
    icon: Edit,
    name: "Blog Post",
    standalone: "$250",
    withPackage: "$200",
    description: "SEO-optimized blog content that drives traffic and establishes expertise."
  },
  {
    icon: Mail,
    name: "Email Copy",
    standalone: "$150",
    withPackage: "$125",
    description: "Compelling email campaigns that convert subscribers into customers."
  },
  {
    icon: Share2,
    name: "Social Media Content (30 posts)",
    standalone: "$400",
    withPackage: "$350",
    description: "One month of engaging, brand-aligned social media content across platforms."
  },
  {
    icon: FolderOpen,
    name: "Media Kit Creation",
    standalone: "$350",
    withPackage: "$300",
    description: "Professional media kit with bio, images, fact sheets, and key messaging."
  },
];

const Addons = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-sm mb-6 hover:text-gold transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background/10 mx-auto mb-6">
              <Plus className="w-10 h-10" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              À La Carte Services
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Build your own visibility strategy with our flexible professional content and strategy services. Purchase standalone or add to any package at a discounted rate.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="shadow-elegant hover:shadow-lifted transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <CardTitle>{service.name}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-border">
                          <span className="text-sm text-muted-foreground">Standalone</span>
                          <span className="font-bold text-foreground">{service.standalone}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-sm text-muted-foreground">With Package</span>
                          <span className="font-bold text-gold">{service.withPackage}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-elegant">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-center mb-12">
              How <span className="text-gold">Addons</span> Work
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Standalone Purchase</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Purchase any service individually at the standalone price. Perfect for one-off needs or testing our services before committing to a package.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Plus className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>No long-term commitment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Plus className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Quick turnaround</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Plus className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Same quality as package clients</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-elegant border-gold/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>Package Add-On</span>
                    <span className="text-sm font-normal text-gold">(Save up to 20%)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Add services to any PR package at a discounted rate. Ideal for expanding the scope of your campaign without breaking the budget.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Plus className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <span>Up to 20% savings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Plus className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <span>Seamless integration with your campaign</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Plus className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <span>Maximum visibility impact</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Combinations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-center mb-12">
              Popular <span className="text-gold">Combinations</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Content Marketing Bundle",
                  services: "Blog Post + Social Media Content + Email Copy",
                  savings: "$125",
                  ideal: "Building ongoing content for SEO and engagement"
                },
                {
                  title: "Launch Package Boost",
                  services: "Press Release + Media Kit + Feature Article",
                  savings: "$250",
                  ideal: "Maximizing impact of a product or service launch"
                },
                {
                  title: "Thought Leadership Suite",
                  services: "Feature Article + Press Release + Social Media Content",
                  savings: "$200",
                  ideal: "Establishing authority and industry expertise"
                }
              ].map((combo, index) => (
                <Card key={index} className="shadow-elegant">
                  <CardHeader>
                    <CardTitle>{combo.title}</CardTitle>
                    <CardDescription className="text-base">
                      <span className="font-semibold text-foreground">{combo.services}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Ideal for:</p>
                        <p className="text-sm">{combo.ideal}</p>
                      </div>
                      <div className="text-center sm:text-right">
                        <p className="text-sm text-muted-foreground">Save</p>
                        <p className="text-2xl font-bold text-gold">{combo.savings}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss which services will give you the biggest impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={scrollToContact}>
                Get Started
              </Button>
              <Link to="/">
                <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/20 hover:bg-background/20">
                  View PR Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Addons;
