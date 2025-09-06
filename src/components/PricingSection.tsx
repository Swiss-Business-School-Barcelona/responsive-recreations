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
      answer: "You'll build a working digital product with real functionality, not just a prototype. What it does depends on your idea."
    },
    {
      question: "How much time should I put in each week?",
      answer: "Plan for around 8 to 10 hours per week. It's flexible, but the more you commit, the more you'll get out of it."
    },
    {
      question: "What happens after the program ends?",
      answer: "You'll leave with a working product, and a roadmap to grow it. We also help you plan your next steps if you want to keep building."
    },
    {
      question: "What if I don't have an idea?",
      answer: "That's fine. We'll work as a team to brainstorm and choose an idea together."
    },
    {
      question: "Which idea will we develop a product for?",
      answer: "In the first class, everyone will share their ideas. As a group, we'll review them and choose the most promising one to develop together. That idea will become our focus for the entire bootcamp."
    },
    {
      question: "How do these AI tools actually work?",
      answer: "We'll show you how to use no-code platforms powered by AI. They're beginner-friendly and designed to help you build fast."
    },
    {
      question: "I'm not a tech person. Is that okay?",
      answer: "Totally. This bootcamp is designed for creative thinkers, not just techies. If you can use a computer, you'll do just fine."
    },
    {
      question: "What if this just isn't right for me?",
      answer: "If after the first week you feel like it's not a fit, you can leave with no hard feelings. No pressure to continue."
    },
    {
      question: "How do I know if this is a good fit?",
      answer: "If you've got an idea and want to turn it into something real, without code, this is built exactly for you."
    },
    {
      question: "How do I apply, and is space limited?",
      answer: "Yes, space is limited. Just fill out the short application and we'll get back to you quickly."
    },
    {
      question: "Where do we meet?",
      answer: "It's an in-person program held in Barcelona, at a bright and inspiring co-working space in the city center."
    },
    {
      question: "Do I need to buy any AI tools myself?",
      answer: "Nope. We'll provide access to everything you need during the program."
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
            
            <Button 
              variant="brand" 
              size="lg" 
              className="w-full mb-6 text-lg"
              onClick={() => window.open('https://buildnocode.lovable.app/', '_blank')}
            >
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
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>In-person at a coworking hub</span>
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