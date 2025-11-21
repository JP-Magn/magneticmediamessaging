import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Rocket, ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const VisibilitySprint = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const features = [
    {
      title: "Multiple Story Angles Development",
      description: "We create diverse narrative approaches to maximize your appeal to different media outlets and audiences."
    },
    {
      title: "Custom Media Kit Creation",
      description: "Professional media kit with bio, high-res images, fact sheets, and compelling story angles."
    },
    {
      title: "Enhanced Media Outreach",
      description: "Aggressive, targeted outreach to tier-1, tier-2, and niche media outlets across multiple platforms."
    },
    {
      title: "Campaign Analytics & Reporting",
      description: "Comprehensive tracking and reporting on outreach efforts, media responses, and coverage secured."
    },
    {
      title: "Social Media Amplification Strategy",
      description: "Strategic social media content plan to amplify any earned media and extend your reach."
    }
  ];

  const idealFor = [
    "Product or service launches requiring maximum visibility",
    "Rebranding or repositioning campaigns",
    "Businesses ready to scale their visibility",
    "Time-sensitive campaigns with 30-day goals",
    "Companies seeking accelerated market presence"
  ];

  const bonus = [
    "Priority response time",
    "Weekly progress updates",
    "Media training tips document",
    "Post-campaign strategy session"
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
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="bg-gold text-accent-foreground px-4 py-1 text-sm font-semibold rounded-full">
                MOST POPULAR
              </div>
            </div>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background/10 mx-auto mb-6">
              <Rocket className="w-10 h-10" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Visibility Sprint
            </h1>
            <p className="text-2xl mb-4">$2,500 30-Day Campaign</p>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Accelerated visibility boost with multiple story angles and comprehensive media outreach.
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

            {/* Bonus Features */}
            <Card className="mt-8 shadow-lifted border-gold/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-gold" />
                  Bonus Features
                </CardTitle>
                <CardDescription>Extra value included at no additional cost</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3">
                  {bonus.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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
                      <Rocket className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
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
              Your 30-Day <span className="text-gold">Sprint</span>
            </h2>
            <div className="space-y-6">
              {[
                { week: "Week 1", title: "Strategy & Content", desc: "Deep-dive strategy session, story angle development, and media kit creation." },
                { week: "Week 2", title: "Outreach Launch", desc: "Aggressive media outreach begins across targeted outlets and journalists." },
                { week: "Week 3", title: "Follow-Up & Amplification", desc: "Strategic follow-ups, pitch refinements, and social media amplification." },
                { week: "Week 4", title: "Results & Next Steps", desc: "Final push, comprehensive reporting, and strategy session for sustained momentum." }
              ].map((item, index) => (
                <Card key={index} className="shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-hero text-primary-foreground font-bold text-lg flex items-center justify-center flex-shrink-0">
                        {item.week}
                      </div>
                      <div>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
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
              Ready to Sprint to Greater Visibility?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's accelerate your visibility in just 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={scrollToContact}>
                Start Your Sprint
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

export default VisibilitySprint;
