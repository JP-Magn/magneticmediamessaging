import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const MediaBreakthrough = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const features = [
    {
      title: "Professional Press Release Writing",
      description: "Expertly crafted press releases that capture your story and grab media attention."
    },
    {
      title: "Targeted Media Outreach",
      description: "Strategic outreach to relevant journalists, bloggers, and media outlets in your industry."
    },
    {
      title: "Strategic Follow-Up",
      description: "Persistent, professional follow-up to maximize your chances of coverage."
    },
    {
      title: "Campaign Summary Report",
      description: "Detailed analytics showing outreach efforts, responses, and opportunities generated."
    }
  ];

  const idealFor = [
    "Launching a new product or service",
    "Announcing a significant company milestone",
    "Testing PR for the first time",
    "One-time visibility boost",
    "Building initial media relationships"
  ];

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
              <Zap className="w-10 h-10" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Media Breakthrough
            </h1>
            <p className="text-2xl mb-4">$1,500 One-Time Campaign</p>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Perfect for launching your first campaign and getting noticed by the right media outlets.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-center mb-12">
              What's <span className="text-gold">Included</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-24 bg-gradient-elegant">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-center mb-12">
              Ideal <span className="text-gold">For</span>
            </h2>
            <Card className="shadow-lifted">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {idealFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-center mb-12">
              How It <span className="text-gold">Works</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Kickoff Call", desc: "We discuss your goals, story angles, and target media." },
                { step: "2", title: "Content Creation", desc: "We craft a compelling press release that tells your story." },
                { step: "3", title: "Media Outreach", desc: "Strategic distribution to relevant journalists and outlets." },
                { step: "4", title: "Report & Results", desc: "Detailed summary of outreach efforts and opportunities." }
              ].map((item) => (
                <Card key={item.step} className="text-center shadow-elegant">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-hero text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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
              Ready to Make Your Media Breakthrough?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's get your story in front of the right people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={scrollToContact}>
                Get Started Today
              </Button>
              <Link to="/">
                <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/20 hover:bg-background/20">
                  View All Packages
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

export default MediaBreakthrough;
