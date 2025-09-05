import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricingSection = () => {
  const faqs = [
    {
      question: "I can't code. Can I still join?",
      answer: "You don't need any coding experience. This bootcamp is built for non-technical folks who want to launch real apps using AI tools."
    },
    {
      question: "What kind of app can I really build in 6 weeks?",
      answer: "You'll build a fully functional web or mobile app from scratch using modern no-code and AI-powered development tools."
    },
    {
      question: "How much time should I put in each week?",
      answer: "Plan for 4-6 hours per week of focused work, including live sessions, project work, and peer collaboration."
    },
    {
      question: "What happens after the program ends?",
      answer: "You'll have a launched app, ongoing community support, and the skills to continue building and iterating on your product."
    },
    {
      question: "What if I don't have an idea?",
      answer: "Perfect! The first part of the program focuses on ideation and problem discovery. We'll help you find and validate a great idea to build."
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="text-brand-orange text-sm font-bold tracking-wide uppercase">
              💰 PRICING & FAQ'S
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-4">
            Frequently Asked <span className="italic font-light">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find quick answers to the most common support questions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Pricing Card */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-muted-foreground mb-6">Price</h3>
            
            <div className="mb-6">
              <div className="text-sm text-muted-foreground mb-2">Total Value: <span className="line-through">€960</span></div>
              <div className="text-5xl font-bold text-muted-foreground mb-6">€420</div>
            </div>
            
            <Button variant="brand" size="lg" className="w-full mb-6 text-lg">
              <span className="mr-2">🎁</span>
              Claim Free Intro Class
            </Button>
            
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>First class is free to try</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>6 weeks, 24 hours of building</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Max 10 people per group</span>
              </div>
            </div>
          </div>
          
          {/* FAQ Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 py-2 hover:border-brand-orange/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-medium text-muted-foreground hover:text-brand-orange hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;