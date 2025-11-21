import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, TrendingUp, ArrowLeft, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const StoryStrategyRetainer = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const features = [
    {
      title: "Strategic Positioning & Messaging",
      description: "Comprehensive brand positioning work to establish your unique voice and narrative in the marketplace."
    },
    {
      title: "Ongoing Media Outreach",
      description: "Continuous, strategic media outreach throughout the 90-day engagement with multiple touchpoints."
    },
    {
      title: "Quarterly Content Strategy",
      description: "Comprehensive content strategy including thought leadership, bylines, and expert commentary opportunities."
    },
    {
      title: "Monthly Analytics & Insights",
      description: "Detailed monthly reports tracking media coverage, brand mentions, and visibility metrics."
    },
    {
      title: "Priority Support & Consulting",
      description: "Direct access to Jennifer for strategic counsel, media prep, and crisis communications support."
    },
    {
      title: "Media Training Session",
      description: "One-on-one media training to help you confidently handle interviews and speaking opportunities."
    }
  ];

  const idealFor = [
    "Businesses committed to long-term visibility strategy",
    "Executives building personal brands alongside company brands",
    "Companies launching multiple initiatives over 90 days",
    "Organizations requiring ongoing thought leadership",
    "Brands seeking sustained market presence and credibility"
  ];

  const premium = [
    "Unlimited email support",
    "Quarterly strategy refinement sessions",
    "Crisis communication support",
    "Media opportunity alerts",
    "Speaking engagement support",
    "Partnership PR opportunities"
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
              <div className="bg-secondary text-secondary-foreground px-4 py-1 text-sm font-semibold rounded-full flex items-center gap-2">
                <Crown className="w-4 h-4" />
                PREMIUM PARTNERSHIP
              </div>
            </div>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background/10 mx-auto mb-6">
              <TrendingUp className="w-10 h-10" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Story Strategy Retainer
            </h1>
            <p className="text-2xl mb-4">$3,500 90-Day Partnership</p>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Comprehensive quarterly engagement for sustained visibility, thought leadership, and strategic media presence.
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

            {/* Premium Benefits */}
            <Card className="mt-8 shadow-lifted border-secondary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-6 h-6 text-secondary" />
                  Premium Partnership Benefits
                </CardTitle>
                <CardDescription>VIP access and comprehensive support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3">
                  {premium.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
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
                      <TrendingUp className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
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
              Your 90-Day <span className="text-gold">Partnership</span>
            </h2>
            <div className="space-y-6">
              {[
                { 
                  month: "Month 1", 
                  title: "Foundation & Launch", 
                  desc: "Deep-dive strategy, positioning work, media kit creation, initial outreach, and media training session." 
                },
                { 
                  month: "Month 2", 
                  title: "Momentum Building", 
                  desc: "Ongoing media outreach, thought leadership content development, speaking opportunities, and monthly reporting." 
                },
                { 
                  month: "Month 3", 
                  title: "Amplification & Strategy", 
                  desc: "Campaign intensification, partnership opportunities, comprehensive analytics, and quarterly strategy session." 
                }
              ].map((item, index) => (
                <Card key={index} className="shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-hero text-primary-foreground font-bold text-lg flex items-center justify-center flex-shrink-0">
                        {item.month}
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

      {/* Value Comparison */}
      <section className="py-24 bg-gradient-elegant">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-center mb-12">
              Exceptional <span className="text-gold">Value</span>
            </h2>
            <Card className="shadow-lifted">
              <CardContent className="pt-6">
                <p className="text-center text-lg mb-6">
                  If purchased separately, these services would cost over <span className="font-bold text-gold">$5,000+</span>
                </p>
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary mb-2">Save $1,500+</p>
                  <p className="text-muted-foreground">Plus get VIP access and priority support</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Sustained Visibility?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a comprehensive strategy for long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={scrollToContact}>
                Start Your Partnership
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

export default StoryStrategyRetainer;
