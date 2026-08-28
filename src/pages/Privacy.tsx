import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import heroImage from "@/assets/gallery/couple-walking-trail.webp";
import content from "@/data/site-content.json";

const LAST_UPDATED = "August 2026";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const Privacy = () => {
  const { phone, email } = content.sitewide;

  return (
    <PageTransition>
      <SEO
        title="Privacy Policy"
        description="How Rustic Retreat Weddings collects, uses and protects the personal information you share with us through our forms."
        path="/privacy"
        image={heroImage}
      />
      <BreadcrumbSchema />
      <div className="min-h-screen">
        <Navigation />

        <PageHero
          backgroundImage={heroImage}
          backgroundImageAlt="A couple walking a forest trail at Rustic Retreat"
          title="Privacy Policy"
          subtitle="What we collect, why we collect it, and what you can ask us to do with it."
          fireflies={false}
        />

        <div className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <p className="text-sm text-muted-foreground mb-10">
                  Last updated: {LAST_UPDATED}
                </p>

                <Section title="Who we are">
                  <p>
                    Rustic Retreat Weddings &amp; Events Ltd. operates the wedding venue near Lac La Nonne, Alberta,
                    and this website at www.rusticretreatalberta.ca. This policy covers information collected through
                    this website. It does not cover information you give us in person, by phone, or by text, though we
                    treat that with the same care.
                  </p>
                  <p>
                    We are a small family business. Your information is handled by the family who runs the venue, not
                    by a marketing department, and we do not sell it to anyone.
                  </p>
                </Section>

                <Section title="What we collect">
                  <p className="font-semibold text-foreground">When you send an enquiry</p>
                  <p>
                    Our enquiry form asks for both partners' names, your email address, a phone number, your preferred
                    way to be contacted, your wedding date or possible tour dates, an estimated guest count, and
                    whatever you write in the message box.
                  </p>

                  <p className="font-semibold text-foreground">When you complete a booking form</p>
                  <p>
                    Our booking forms collect considerably more, because we need it to host your event and to keep
                    everyone safe: full names and phone numbers for both of you, your mailing address, your event and
                    backup dates, guest and overnight camping numbers, the names and phone numbers of your on-site
                    emergency contacts, details about vendors, pets, structures, power needs, and any activities you
                    are planning, plus your answer about whether we may use photographs of your event.
                  </p>

                  <p className="font-semibold text-foreground">When you use the chat assistant</p>
                  <p>
                    Messages you type into the chat widget are sent to our AI provider to generate a reply, and they
                    are logged so we can see what couples commonly ask and improve our answers. Please do not type
                    anything sensitive into the chat — use the enquiry form, email, or a phone call for that.
                  </p>

                  <p className="font-semibold text-foreground">Automatically, as you browse</p>
                  <p>
                    Like most websites, ours records general usage information: pages visited, approximate location
                    based on IP address, referring site, and browser and device type. This is aggregate traffic data,
                    not a file with your name on it.
                  </p>
                </Section>

                <Section title="Why we use it">
                  <p>
                    To answer your enquiry and arrange a property visit; to plan, host, and safely run your event; to
                    meet our obligations under your booking contract; to understand which parts of the site people
                    find useful; and, where advertising tools are switched on, to show our ads to people who have
                    already shown interest in the venue.
                  </p>
                  <p>
                    We do not sell your personal information, and we do not share it with other couples, vendors, or
                    third parties for their own marketing.
                  </p>
                </Section>

                <Section title="Who else handles your information">
                  <p>
                    Running a website means relying on a few outside services. Each one only receives what it needs:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="text-foreground font-medium">Formspree</span> — delivers our enquiry and booking
                      form submissions to our inbox.
                    </li>
                    <li>
                      <span className="text-foreground font-medium">Vercel</span> — hosts the website and records basic
                      traffic measurements.
                    </li>
                    <li>
                      <span className="text-foreground font-medium">Google Analytics</span> — tells us how the site is
                      being used, in aggregate.
                    </li>
                    <li>
                      <span className="text-foreground font-medium">OpenRouter</span> — processes chat assistant
                      messages to generate replies.
                    </li>
                    <li>
                      <span className="text-foreground font-medium">Meta (Facebook) and Google Ads</span> — when our
                      advertising tools are active, these measure ad performance and let us show ads to people who
                      have visited the site.
                    </li>
                  </ul>
                  <p>
                    Some of these providers store and process information outside Canada, including in the United
                    States, where it may be accessible to courts and authorities under the laws of that country.
                  </p>
                  <p>
                    We may also disclose information where the law requires it, or where it is needed to protect
                    someone's safety.
                  </p>
                </Section>

                <Section title="Cookies and advertising">
                  <p>
                    Analytics and advertising tools set cookies and similar identifiers in your browser so that
                    repeat visits can be recognised. You can block or delete these in your browser settings, and
                    doing so will not stop you from using any part of this site — every page, form, and the chat
                    assistant work the same either way.
                  </p>
                  <p>
                    You can also opt out at the source: Meta's ad preferences let you limit how your activity is used
                    for advertising, Google offers its own ads settings and a browser add-on that switches Google
                    Analytics off, and most browsers offer a "Do Not Track" or tracking-prevention setting.
                  </p>
                </Section>

                <Section title="How long we keep it">
                  <p>
                    Enquiries are kept while we are in conversation with you and for a reasonable period afterwards,
                    in case you come back to us. Booking and contract information is kept for as long as we need it
                    for our business and tax records. Chat logs and analytics are kept in a form used for spotting
                    patterns and improving the site.
                  </p>
                  <p>
                    If you would like your information removed sooner, just ask — see below.
                  </p>
                </Section>

                <Section title="Your choices and your rights">
                  <p>
                    Under Alberta's Personal Information Protection Act and Canada's federal privacy legislation, you
                    can ask us what personal information we hold about you, ask us to correct anything that is wrong,
                    ask us to delete it where we are not required to keep it, and withdraw your consent to marketing
                    at any time.
                  </p>
                  <p>
                    Write to us and we will respond. We will not make you jump through hoops, and asking will never
                    affect how we treat you as a couple.
                  </p>
                </Section>

                <Section title="Security">
                  <p>
                    This site is served over an encrypted connection, and form submissions travel encrypted to our
                    providers. No system is perfectly secure, so please avoid sending anything highly sensitive —
                    such as financial details — through the website. We will never ask for payment card numbers by
                    email or through a web form.
                  </p>
                </Section>

                <Section title="Children">
                  <p>
                    This website is meant for adults planning a wedding, and we do not knowingly collect personal
                    information from children. Guest counts and camping numbers that happen to include children are
                    just numbers to us, not personal records.
                  </p>
                </Section>

                <Section title="Changes to this policy">
                  <p>
                    If we change how we handle information, we will update this page and the date at the top. Material
                    changes will be reflected here before they take effect.
                  </p>
                </Section>

                <Section title="Contact us">
                  <p>
                    Questions about this policy, or a request about your information, can go to whichever suits you:
                  </p>
                  <ul className="list-none space-y-2">
                    <li>
                      Email:{" "}
                      <a href={`mailto:${email}`} className="text-secondary hover:underline">
                        {email}
                      </a>
                    </li>
                    <li>
                      Phone or text:{" "}
                      <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="text-secondary hover:underline">
                        {phone}
                      </a>
                    </li>
                  </ul>
                  <p className="pt-4">
                    Rustic Retreat Weddings &amp; Events Ltd., near Lac La Nonne, Alberta, Canada.
                  </p>
                  <p>
                    You may also want to read our{" "}
                    <a href="/rustic-retreat-site-rules.html" className="text-secondary hover:underline">
                      Site Rules &amp; Guidelines
                    </a>{" "}
                    or{" "}
                    <Link to="/contact" className="text-secondary hover:underline">
                      get in touch about a property tour
                    </Link>
                    .
                  </p>
                </Section>
              </ScrollReveal>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Privacy;
