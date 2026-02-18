import Link from "next/link";

export const metadata = {
  title: "How It Works | TechWave VoIP",
  description: "Switching your phone system is simpler than you think. Here's our 4-step process.",
};

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Send Us Your Current Phone Bill",
      description: "PDF or screenshot. That's it. We review your monthly spend, line count, hidden charges, and contract terms.",
    },
    {
      number: 2,
      title: "We Break It Down",
      description: "We evaluate your cost structure and system performance. Are you paying for idle extensions? Experiencing dropped calls? We'll tell you exactly what we find.",
    },
    {
      number: 3,
      title: "We Design the Right-Sized System",
      description: "We design around your real call demand, proper capacity, call routing, mobile access, and failover logic. You see a clear before-and-after comparison.",
    },
    {
      number: 4,
      title: "Controlled Migration",
      description: "We schedule number porting, configure routing in advance, test internally, and define fallback routing. Most migrations complete in under 30 days.",
    },
  ];

  return (
    <div className="font-body bg-background text-text-primary">
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1 className="font-heading text-[34px] font-bold tracking-tight text-text-primary sm:text-5xl">
              Switching Your Phone System Is Simpler Than You Think.
            </h1>
            <p className="font-body mx-auto mt-6 max-w-2xl text-xl text-text-primary/60">
              We review your bill, design a system around your real usage, and migrate you with a controlled cutover plan. No chaos. No guesswork.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[5px] bg-accent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-accent/90 hover:shadow-xl active:scale-95"
              >
                Send Your Bill
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[5px] bg-white px-8 py-4 text-lg font-bold text-text-primary border border-black/5 transition-all hover:bg-gray-50 active:scale-95"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">{step.title}</h3>
                      <p className="text-text-primary/60">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-16 w-0.5 h-12 bg-primary/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What happens during migration */}
        <section className="py-24 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-[34px] font-bold tracking-tight text-text-primary">
                What Happens During Migration
              </h2>
              <p className="mt-4 text-lg text-text-primary/60">
                Switching systems sounds risky. It doesn't have to be.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "We schedule number porting",
                "We configure call routing in advance",
                "We test internally before go-live",
                "We define fallback routing",
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-[5px] border border-black/5">
                  <span className="material-symbols-outlined text-primary text-2xl mb-4 block">check_circle</span>
                  <p className="font-medium text-text-primary">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-text-primary/60">
              Most migrations complete in under 30 days, depending on number porting.
            </p>
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
                  Ready to get started?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
                  Upload your current bill and we'll show you exactly what you could save.
                </p>
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-[5px] bg-accent px-10 py-5 text-lg font-bold text-white transition-all hover:bg-accent/90 hover:shadow-xl active:scale-95"
                  >
                    Send Your Bill
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
