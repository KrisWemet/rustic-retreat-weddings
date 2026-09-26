import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { CTAButton } from "@/components/ui/cta-button";
import { Heart, Users, Clock3, Trees, ArrowRight, Quote } from "lucide-react";
import hero from "@/assets/gallery/wedding-party-woods-hero.webp";
import couple from "@/assets/gallery/meadow-sunset-kiss.webp";
import party from "@/assets/gallery/wedding-party-cheer.webp";
import reception from "@/assets/gallery/pavilion-reception.webp";
import dance from "@/assets/gallery/Images/first-dance-string-lights.webp";
import together from "@/assets/gallery/Images/sweetheart-table-laughing.webp";

const TOUR = "/contact";

const VersionB = () => (
  <div className="min-h-screen bg-[#fbf8f2] text-[#243127]">
    <SEO title="Rustic Retreat Alberta | Your Wedding Weekend" description="A private multi-day outdoor wedding venue near Edmonton, Alberta. Make the land yours, gather your people, and create a wedding weekend that feels like you." />
    <Navigation />

    <main>
      <section className="relative min-h-[88vh] overflow-hidden flex items-end">
        <img src={hero} alt="Wedding party together in the woods at Rustic Retreat Alberta" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.05)_100%),linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.2)_60%,transparent_100%)]" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-36 text-white md:pb-24">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em]">A private wedding weekend on 65 acres</p>
          <h1 className="max-w-2xl font-serif text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.08]">Your wedding. Your people.<br />Your place for the weekend.</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white md:text-xl">Settle in. Make it yours. And spend more than just a few hours with the people who matter most.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <CTAButton asChild size="lg"><Link to={TOUR}>Come See It for Yourself <ArrowRight className="ml-2 h-4 w-4" /></Link></CTAButton>
            <Link to="/gallery" className="inline-flex items-center px-5 py-3 text-sm font-semibold text-white underline underline-offset-4">See real weddings</Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b674c]">Before you choose a venue</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">What do you want your people to remember?</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[#4c574e]">The ceremony matters. So do the hours nobody schedules: coffee in the morning, decorating together, a long dinner, one more story around the fire, and waking up knowing nobody has to rush home.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-3 px-4 pb-20 md:grid-cols-3 md:px-6 md:pb-28">
        {[{img:couple,label:"Make it unmistakably yours"},{img:party,label:"Have your people close"},{img:reception,label:"Give the moments room to happen"}].map(({img,label}) => (
          <figure key={label} className="group relative min-h-[420px] overflow-hidden rounded-2xl">
            <img src={img} alt={label} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
            <figcaption className="absolute bottom-0 p-7 font-serif text-2xl text-white">{label}</figcaption>
          </figure>
        ))}
      </section>

      <section className="bg-[#25372b] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">More than a wedding day</p>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl">For a few days, this becomes your place.</h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">Bring the traditions you love. Skip the ones you don't. Set up without racing a clock. Camp with your friends. Let the kids play. Stay up talking. Build a weekend that feels like the two of you, not a package somebody designed for everyone.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{Icon:Clock3,t:"3 or 5 days",s:"Time to settle in"},{Icon:Trees,t:"65 private acres",s:"Space to breathe"},{Icon:Users,t:"Your people",s:"Together for more than dinner"},{Icon:Heart,t:"One wedding",s:"The land is yours to enjoy"}].map(({Icon,t,s}) => <div key={t} className="rounded-2xl border border-white/15 bg-white/5 p-6"><Icon className="mb-5 h-6 w-6"/><div className="font-serif text-xl">{t}</div><div className="mt-1 text-sm text-white/65">{s}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <img src={together} alt="A couple laughing together during their wedding reception" className="h-[520px] w-full rounded-3xl object-cover" />
            <div className="md:p-10">
              <Quote className="h-9 w-9 text-[#927b58]" />
              <blockquote className="mt-5 font-serif text-3xl leading-snug md:text-4xl">“Pictures don't do it justice.”</blockquote>
              <p className="mt-5 text-lg leading-relaxed text-[#4c574e]">That's something we hear from couples when they visit. A photograph can show the trees and the spaces. It can't really show you the quiet, the seclusion, or what it feels like to picture everyone you love here with you.</p>
              <p className="mt-5 font-semibold">That's why we'd rather show you.</p>
              <CTAButton asChild size="lg" className="mt-7"><Link to={TOUR}>Schedule a Tour <ArrowRight className="ml-2 h-4 w-4" /></Link></CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[620px] overflow-hidden flex items-center justify-center px-6 text-center text-white">
        <img src={dance} alt="First dance under string lights at Rustic Retreat Alberta" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">The next step is simple</p>
          <h2 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">Come imagine your weekend here.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">Walk the land. See the ceremony spaces. Stand where your people could gather. You'll know a lot more in one visit than we could ever show you on a screen.</p>
          <CTAButton asChild size="lg" className="mt-8"><Link to={TOUR}>Come See It for Yourself <ArrowRight className="ml-2 h-4 w-4" /></Link></CTAButton>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default VersionB;
