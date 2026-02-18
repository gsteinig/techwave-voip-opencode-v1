import Link from "next/link";

export const metadata = {
  title: "About | TechWave VoIP",
  description: "Learn about TechWave VoIP and our mission to provide reliable, fair-priced business phone systems for SMBs.",
};

export default function About() {
  return (
    <div className="font-body bg-background text-text-primary">
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1 className="font-heading text-[34px] font-bold tracking-tight text-text-primary sm:text-5xl">
              We started TechWave because phones should just work.
            </h1>
            <p className="font-body mx-auto mt-6 max-w-2xl text-xl text-text-primary/60">
              SMBs deserve reliable phones at a fair price. No bloated pricing. No jargon. Just working phone systems.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-heading text-[34px] font-bold text-text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-text-primary/60 mb-8">
              Most business phone systems are overpriced, overcomplicated, and unreliable. 
              We built TechWave to change that.
            </p>
            <p className="text-lg text-text-primary/60 mb-8">
              We believe small and medium businesses deserve the same level of phone service 
              that enterprises get—but at a price that makes sense. No per-user pricing that 
              penalizes hiring. No feature add-ons that should be included. No overseas support 
              that doesn't understand your business.
            </p>
            <p className="text-lg text-text-primary/60">
              We price based on actual usage. We design for reliability. We answer the phone 
              when you call. That's the vision.
            </p>
          </div>
        </section>

        {/* Why TechWave */}
        <section className="py-24 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-heading text-[34px] font-bold text-center text-text-primary mb-16">
              Why TechWave?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "verified",
                  title: "Reliability First",
                  description: "We engineer for uptime and call quality. Network readiness checks included.",
                },
                {
                  icon: "payments",
                  title: "Fair Pricing",
                  description: "You pay for concurrent calls, not per-user seats. Right-sized from day one.",
                },
                {
                  icon: "local_shipping",
                  title: "Fast Migration",
                  description: "Most transitions complete in under 30 days. Number porting handled.",
                },
                {
                  icon: "support_agent",
                  title: "US-Based Support",
                  description: "Real people answer the phone. We know your system.",
                },
              ].map((item, i) => (
                <div key={i} className="text-center p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-[5px] bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-primary/60 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner */}
        <section className="py-24">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-heading text-[34px] font-bold text-text-primary mb-6">
              Powered by Yeastar
            </h2>
            <p className="text-lg text-text-primary/60 mb-8">
              TechWave is built on Yeastar's enterprise-grade platform—the same platform trusted 
              by over 10,000 businesses worldwide. We combine their robust infrastructure with our 
              local support and fair pricing model.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "ISO 27001 Certified",
                "99.99% Uptime",
                "Global Infrastructure",
                "24/7 Monitoring",
              ].map((item, i) => (
                <div key={i} className="bg-bg-light p-4 rounded-[5px] text-center">
                  <span className="material-symbols-outlined text-primary mb-2 block">verified</span>
                  <p className="text-sm font-medium text-text-primary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="relative overflow-hidden rounded-[5px] bg-text-primary px-8 py-16 text-center text-white">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="font-heading mx-auto max-w-2xl text-[34px] font-bold tracking-tight">
                  Let's talk savings
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
                  Ready to see what you could save? Upload your current bill and we'll provide a same-day savings estimate.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-[5px] bg-accent px-10 py-5 text-lg font-bold text-white transition-all hover:bg-accent/90 hover:shadow-xl active:scale-95"
                  >
                    Send Your Bill
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-[5px] bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
