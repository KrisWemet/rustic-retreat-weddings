import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FAQs = () => {
  const faqs = [
    {
      question: "When can we book our wedding at Rustic Retreat?",
      answer: "We don't let couples book until they visit the property. This isn't a sales tactic—it's our commitment to making sure you're certain, not just convinced. Schedule your property visit, walk the land, stand in the ceremony space, and feel if this is right for you. Only then can you reserve your dates."
    },
    {
      question: "What's the difference between the 3-day and 5-day packages?",
      answer: "The 3-day package (Friday-Sunday) gives you 60 hours together—perfect for couples with tighter schedules or budgets. The 5-day package (Thursday-Monday or Friday-Tuesday) provides 108 hours and is our most popular option. With 5 days, guests bond before your wedding, creating a community atmosphere that transforms your celebration. Couples consistently call the 5-day package 'the best decision we made.'"
    },
    {
      question: "How many guests can you accommodate?",
      answer: "Up to 80 guests for ceremony and reception, with overnight camping accommodation for 60 guests across 15 camper/tent sites plus the newlywed cabin. Half a dozen Airbnbs sit 5 minutes away around the lake, or RVezy.com can deliver trailers directly to your campsites for glamping comfort."
    },
    {
      question: "What if some of our guests don't want to camp?",
      answer: "Perfect! Half a dozen Airbnb properties sit within 5 minutes around the lake. For guests who want on-site comfort without tent camping, RVezy.com delivers trailers right to your campsite—all the coziness, none of the setup. Your non-camping guests can sleep however they prefer, then join everyone for breakfast, activities, and celebration."
    },
    {
      question: "What's included in the wedding package price?",
      answer: "Your package includes: exclusive use of 65 private acres, the cabin (newlywed suite), 15 camping sites, tables and benches for 80 guests, access to our Wedding Décor House collection (free!), groomed trails, outdoor games, campfire areas, clear-top gazebo, and all amenities. Day-of coordination and setup assistance are available as optional paid services. No hidden fees. No surprise rental charges."
    },
    {
      question: "Can we bring our own vendors or use yours?",
      answer: "Complete freedom. Use our preferred vendors (photographers, caterers, florists, officiants who know the property well) or bring your own team. We work seamlessly with any professional vendors you choose. This is your celebration, your vision, your rules."
    },
    {
      question: "What months are available for weddings?",
      answer: "June through September. Alberta weather is most reliable during these months, and the property is at its most beautiful with lush grass, full trees, and comfortable temperatures for outdoor celebration and camping."
    },
    {
      question: "What are the check-in and check-out times?",
      answer: "8am check-in on your first day, 8pm check-out on your last day. You get every hour you're paying for—not rushed 11am checkouts like hotels. Guests can arrive throughout the first day at their convenience."
    },
    {
      question: "Why do you wait 3 days between weddings?",
      answer: "Quality requires space. While other venues flip properties in 48 hours, we give ourselves minimum 3 days between bookings so your celebration gets fresh grass, renewed energy, and our complete attention. When you arrive at 8am on your check-in day, the property looks like it's been waiting specifically for you. Because it has been."
    },
    {
      question: "What happens if it rains?",
      answer: "Alberta summers are generally dry, but we plan for everything. The clear-top gazebo provides covered space for reception. We help couples create weather contingency plans during the planning process. Many of our most magical moments have happened in light rain—nature adds its own beauty to your celebration."
    },
    {
      question: "Is there electricity and running water?",
      answer: "The cabin has off-grid solar power and potable water. Our new shower facilities will be ready for the 2026 season, providing modern comfort for campers. We balance rustic charm with necessary modern amenities—you're not roughing it, you're experiencing intentional simplicity."
    },
    {
      question: "Can we have a rehearsal dinner?",
      answer: "Absolutely! With multi-day packages, you have the property for the entire period. Many couples host rehearsal dinners Friday evening (for 3-day packages) or Thursday/Friday evening (for 5-day packages). You can also plan welcome breakfasts, group yoga, bonfire gatherings—whatever serves your celebration."
    },
    {
      question: "What about decorations?",
      answer: "Our Wedding Décor House is stocked with treasures from past celebrations—vintage pieces, mason jars, fabric, signs, centerpiece elements, fairy lights, and more. All free to use. Many couples use 80% décor house items, supplement with 20% personal touches, and save thousands on rental fees. The collection grows with each wedding."
    },
    {
      question: "What are the celebration hours?",
      answer: "You have exclusive access to the 65-acre property for your booked timeframe. We'll discuss appropriate celebration hours during your property visit to ensure you and your guests can fully enjoy the experience while respecting the natural setting. This is your private venue for the weekend."
    },
    {
      question: "How far is Rustic Retreat from Edmonton?",
      answer: "99 kilometers (approximately 1-hour drive) northwest of Edmonton, near Lac La Nonne and the Pembina River. Easily accessible from St. Albert, Morinville, and surrounding areas. The drive itself is scenic—you feel like you're escaping to somewhere special."
    },
    {
      question: "Can we visit before booking?",
      answer: "You MUST visit before booking. We require it. This isn't about sales pressure—it's about ensuring you're genuinely excited about celebrating here. Tours are available weekdays and on weekends by appointment. Schedule your property visit, explore the land, ask questions, stand where you'll say your vows. Then make your decision from a place of certainty."
    },
    {
      question: "What's your cancellation policy?",
      answer: "We'll discuss all policies including cancellation, payment plans, and deposits during your property visit. We believe in transparency and want you to understand everything before committing. Our goal is peace of mind, not fine print anxiety."
    },
    {
      question: "Do you host multiple weddings per weekend?",
      answer: "Never. When you book Friday-Sunday or Thursday-Monday, the property is exclusively yours. No other couples. No overlapping events. Just your celebration, your guests, your moment. This is what 'intimate venue' actually means."
    },
    {
      question: "Can children attend?",
      answer: "Yes! Rustic Retreat is wonderfully family-friendly. We have a trampoline, treehouse, play set, and 65 acres for kids to safely explore. Many couples love that children can just be kids here—playing freely, catching frogs, making memories alongside the adults."
    },
    {
      question: "What makes Rustic Retreat different from other Alberta wedding venues?",
      answer: "Time. Space. Freedom. Most venues give you 6 hours and strict schedules. We give you 3-5 days and complete creative control. Most venues book back-to-back weekends. We rest the property minimum 3 days between celebrations. Most venues cost $10,000-25,000+ when you add everything up. We provide exponentially more for less, because we value authentic celebration over profit margins. Different philosophy. Different experience. Different results."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="section mt-20 pt-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about celebrating your wedding at Rustic Retreat Weddings
          </p>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border-2 rounded-lg px-6 hover:border-secondary transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card p-12 rounded-lg border-2 border-primary text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The best way to get your questions answered is during a property visit. Walk the land with us, see everything in person, and ask anything that's on your mind.
            </p>
            <p className="mb-8">
              We're not trying to sell you on Rustic Retreat—we're trying to help you determine if this is the right place for YOUR celebration. That requires conversation, not FAQs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                  Schedule Your Property Visit
                </Button>
              </Link>
              <Link to="/weddings">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Wedding Packages
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

export default FAQs;
