import Link from "next/link";

export const metadata = {
  title: "Pricing | TechWave VoIP",
  description: "Simple, fair pricing based on your actual call usage. No per-user add-ons. No hidden fees.",
};

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "For small teams with light calling needs",
      price: "From $99",
      period: "/month",
      features: [
        "Up to 5 concurrent calls",
        "Unlimited extensions",
        "Mobile app included",
        "Desktop softphone included",
        "Basic call routing",
        "Voicemail to email",
        "Email support",
      ],
    },
    {
      name: "Business",
      description: "For growing teams with moderate call volume",
      price: "From $199",
      period: "/month",
      popular: true,
      features: [
        "Up to 10 concurrent calls",
        "Unlimited extensions",
        "Mobile app included",
        "Desktop softphone included",
        "Advanced call routing",
        "Call queues",
        "Auto attendant",
        "Call recording",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      description: "For larger organizations with high call demand",
      price: "From $399",
      period: "/month",
      features: [
        "Up to 25 concurrent calls",
        "Unlimited extensions",
        "Mobile app included",
        "Desktop softphone included",
        "Advanced call routing",
        "Call queues with analytics",
        "Multi-level auto attendant",
        "Unlimited call recording",
        "Dedicated account manager",
        "24/7 phone support",
      ],
    },
  ];

  return (
    <div className="font-body bg-background text-text-primary">
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1 className="font-heading text-[34px] font-bold tracking-tight text-text-primary sm:text-5xl">
              Simple pricing. Fair pricing.
            </h1>
            <p className="font-body mx-auto mt-6 max-w-2xl text-xl text-text-primary/60">
              We price based on concurrent calls, not per-user seats. Pay for what you actually use.
            </p>
          </div>
        </section>

        {/* Pricing Model Explanation */}
        <section className="py-16 border-b border-black/5">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="bg-bg-light rounded-[5px] p-8">
              <h2 className="font-heading text-xl font-bold text-text-primary mb-4">
                How our pricing works
              </h2>
              <p className="text-text-primary/60 mb-6">
                Most VoIP providers charge per user—whether they're on a call or not. 
                We charge by simultaneous (concurrent) calls. If you have 20 employees but only 5 
                ever call at once, you pay for 5, not 20.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">20</p>
                  <p className="text-sm text-text-primary/60">Employees</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">5</p>
                  <p className="text-sm text-text-primary/60">Making calls at once</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">75%</p>
                  <p className="text-sm text-text-primary/60">Potential savings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-[5px] border p-8 ${
                    plan.popular
                      ? "border-primary shadow-lg"
                      : "border-black/5"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className="font-heading text-2xl font-bold text-text-primary">
                    {plan.name}
                  </h3>
                  <p className="text-text-primary/60 mt-2 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-text-primary">
                      {plan.price}
                    </span>
                    <span className="text-text-primary/60">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="material-symbols-outlined text-primary text-sm">
                          check
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center rounded-[5px] py-3 font-semibold transition-all ${
                      plan.popular
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "bg-bg-light text-text-primary hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Per-User Comparison */}
        <section className="py-16 bg-bg-light">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="bg-white rounded-[5px] p-8 border border-black/5">
              <h3 className="font-heading text-xl font-bold text-text-primary mb-4">
                Not sure how many concurrent calls you need?
              </h3>
              <p className="text-text-primary/60 mb-6">
                We'll help you right-size your system based on your actual calling patterns. 
                Upload your current bill and we'll analyze your usage to recommend the right plan.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[5px] bg-accent px-6 py-3 font-semibold text-white hover:bg-accent/90 transition-all"
              >
                Upload Your Bill for a Free Analysis
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-heading text-[34px] font-bold text-center text-text-primary mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "What's a concurrent call?",
                  a: "A concurrent call is a call that happens at the same time as other calls. If you have 10 employees but only 3 are ever on the phone simultaneously, you need a plan that supports 3 concurrent calls—not 10.",
                },
                {
                  q: "Are phones and features included?",
                  a: "Yes. Desktop phones, mobile apps, softphones, call routing, queues, and auto attendants are all included in your plan.",
                },
                {
                  q: "What about long distance?",
                  a: "All plans include unlimited domestic calling. International rates are competitive and billed based on actual usage.",
                },
                {
                  q: "Is there a contract?",
                  a: "We offer both month-to-month and annual plans. Annual plans come with a discount.",
                },
                {
                  q: "What happens if I need more capacity?",
                  a: "You can upgrade your plan at any time. We'll help you right-size as your business grows.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-b border-black/5 pb-8">
                  <h4 className="font-heading text-lg font-bold text-text-primary mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-text-primary/60">{faq.a}</p>
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
                  Not sure which plan is right for you?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
                  Send us your current bill and we'll recommend the right-sized plan for your business.
                </p>
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-[5px] bg-accent px-10 py-5 text-lg font-bold text-white transition-all hover:bg-accent/90 hover:shadow-xl active:scale-95"
                  >
                    Upload Your Bill
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
