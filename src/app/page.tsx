import Link from "next/link";

export default function Home() {
  return (
    <div className="font-body bg-background text-text-primary">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-[5px] bg-primary/10 px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Phones That Just Work</span>
            </div>
            <h1 className="font-heading mx-auto max-w-4xl text-[34px] font-bold tracking-tight text-text-primary sm:text-5xl leading-[1.1]">
              Cut your phone costs. <span className="text-primary">Fix reliability.</span>
              <br className="hidden sm:block" />
              <span className="text-primary">Proven by your bill.</span>
            </h1>
            <p className="font-body mx-auto mt-8 max-w-2xl text-[28px] leading-relaxed text-text-primary/60">
              Stop losing customers to dropped calls. Stop overpaying for extensions you don't use. 
              Send us your bill and we'll show you exactly what you could save.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-[5px] bg-accent px-8 py-4 text-lg font-bold text-white transition-all hover:shadow-xl hover:shadow-accent/30 active:scale-95"
              >
                Send Your Bill
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
              <Link
                href="/about"
                className="flex w-full sm:w-auto items-center justify-center rounded-[5px] bg-white px-8 py-4 text-lg font-bold text-text-primary border border-black/5 transition-all hover:bg-gray-50 active:scale-95"
              >
                Learn How
              </Link>
            </div>
            <p className="mt-6 text-sm text-text-primary/50">
              Join 100+ SMBs who saved 30–50% on their phone bills
            </p>
          </div>
        </section>

        {/* Social Proof - Logos */}
        <section className="py-16 border-b border-black/5">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-center text-sm font-medium text-text-primary/40 mb-8">TRUSTED BY BUSINESSES LIKE YOURS</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
              <div className="flex items-center gap-2 text-text-primary/60">
                <span className="material-symbols-outlined text-3xl">business</span>
                <span className="font-medium">Acme Corp</span>
              </div>
              <div className="flex items-center gap-2 text-text-primary/60">
                <span className="material-symbols-outlined text-3xl">factory</span>
                <span className="font-medium">TechFlow</span>
              </div>
              <div className="flex items-center gap-2 text-text-primary/60">
                <span className="material-symbols-outlined text-3xl">storefront</span>
                <span className="font-medium">RetailPro</span>
              </div>
              <div className="flex items-center gap-2 text-text-primary/60">
                <span className="material-symbols-outlined text-3xl">medical_services</span>
                <span className="font-medium">MedFirst</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem → Solution Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-[34px] font-bold tracking-tight text-text-primary">
                We fix what others ignore
              </h2>
              <p className="mt-4 text-lg text-text-primary/60 max-w-2xl mx-auto">
                Common pain points that cost your business money every month—and how we solve them.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Problem 1 */}
              <div className="group relative overflow-hidden rounded-[5px] border border-black/5 bg-bg-light p-8 transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[5px] bg-red-100 text-red-600">
                  <span className="material-symbols-outlined text-3xl">phone_disabled</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Dropped Calls</h3>
                <p className="text-text-primary/60 mb-4">
                  Calls cutting out during important conversations with customers and prospects.
                </p>
                <div className="border-t border-black/5 pt-4">
                  <p className="text-sm font-medium text-primary">→ Our solution</p>
                  <p className="text-sm text-text-primary/60">
                    Network readiness check included. We measure jitter, delay, and packet loss before we deploy anything.
                  </p>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="group relative overflow-hidden rounded-[5px] border border-black/5 bg-bg-light p-8 transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[5px] bg-amber-100 text-amber-600">
                  <span className="material-symbols-outlined text-3xl">receipt_long</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Paying for Empty Seats</h3>
                <p className="text-text-primary/60 mb-4">
                  Paying for extensions for departed employees, vacationing staff, or part-timers.
                </p>
                <div className="border-t border-black/5 pt-4">
                  <p className="text-sm font-medium text-primary">→ Our solution</p>
                  <p className="text-sm text-text-primary/60">
                    Concurrent-call pricing. Pay for the calls you make, not the names on a list.
                  </p>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="group relative overflow-hidden rounded-[5px] border border-black/5 bg-bg-light p-8 transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[5px] bg-blue-100 text-blue-600">
                  <span className="material-symbols-outlined text-3xl">wifi_off</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Outages</h3>
                <p className="text-text-primary/60 mb-4">
                  Phone system going down and missing customer calls.
                </p>
                <div className="border-t border-black/5 pt-4">
                  <p className="text-sm font-medium text-primary">→ Our solution</p>
                  <p className="text-sm text-text-primary/60">
                    99.99% uptime SLA. Redundant data centers. We monitor your call quality 24/7.
                  </p>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="group relative overflow-hidden rounded-[5px] border border-black/5 bg-bg-light p-8 transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[5px] bg-purple-100 text-purple-600">
                  <span className="material-symbols-outlined text-3xl">settings_suggest</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Complex Setup</h3>
                <p className="text-text-primary/60 mb-4">
                  Fear of disruption during migration from legacy phone systems.
                </p>
                <div className="border-t border-black/5 pt-4">
                  <p className="text-sm font-medium text-primary">→ Our solution</p>
                  <p className="text-sm text-text-primary/60">
                    Week-ish migration. Number porting handled. We test everything before you switch.
                  </p>
                </div>
              </div>

              {/* Problem 5 */}
              <div className="group relative overflow-hidden rounded-[5px] border border-black/5 bg-bg-light p-8 transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[5px] bg-green-100 text-green-600">
                  <span className="material-symbols-outlined text-3xl">phonelink_ring</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Can't Work Remotely</h3>
                <p className="text-text-primary/60 mb-4">
                  Team needs to work from anywhere but phone stays at the office.
                </p>
                <div className="border-t border-black/5 pt-4">
                  <p className="text-sm font-medium text-primary">→ Our solution</p>
                  <p className="text-sm text-text-primary/60">
                    Softphone and mobile app included. Take your business number on any device.
                  </p>
                </div>
              </div>

              {/* Problem 6 */}
              <div className="group relative overflow-hidden rounded-[5px] border border-black/5 bg-bg-light p-8 transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[5px] bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">support_agent</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">No Support</h3>
                <p className="text-text-primary/60 mb-4">
                  Stuck on hold with overseas support when something breaks.
                </p>
                <div className="border-t border-black/5 pt-4">
                  <p className="text-sm font-medium text-primary">→ Our solution</p>
                  <p className="text-sm text-text-primary/60">
                    US-based support. Real people who answer the phone. We know your system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-[34px] font-bold tracking-tight text-text-primary">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-text-primary/60">
                From your current bill to better service in weeks—not months.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Submit Your Bill</h3>
                <p className="text-text-primary/60">
                  Upload your current telecom bill. We'll analyze it for waste, idle lines, and overruns.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">We Analyze Costs</h3>
                <p className="text-text-primary/60">
                  Get a before/after comparison showing exactly what you'll save and what you're paying for.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Approve Migration</h3>
                <p className="text-text-primary/60">
                  Review the plan. We'll handle number porting and set up your concurrent-call sizing.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Go Live</h3>
                <p className="text-text-primary/60">
                  Switch over. We test everything. Your team gets softphone apps. Phones just work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Benefits */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-[34px] font-bold tracking-tight text-text-primary">
                Why TechWave VoIP?
              </h2>
              <p className="mt-4 text-lg text-text-primary/60">
                The features you need, priced the way that makes sense.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-6 p-8 rounded-[5px] border border-black/5 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-2xl">groups</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-2">Concurrent Call Pricing</h3>
                  <p className="text-text-primary/60">
                    Most VoIP charges per user—whether they're on a call or not. We charge by simultaneous calls. 
                    If you have 20 employees but only 5 ever call at once, you pay for 5, not 20.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-8 rounded-[5px] border border-black/5 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-2xl">cloud_sync</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-2">Fast Cloud Migration</h3>
                  <p className="text-text-primary/60">
                    No onsite hardware. No lengthy installs. Your system lives in the cloud. 
                    Most migrations complete in under 2 weeks.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-8 rounded-[5px] border border-black/5 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-2xl">phonelink</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-2">Included Softphone & Mobile App</h3>
                  <p className="text-text-primary/60">
                    Desktop and mobile apps included at no extra cost. 
                    Your business number works on any device, anywhere.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-8 rounded-[5px] border border-black/5 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-2xl">wifi_find</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-2">Network Readiness Check</h3>
                  <p className="text-text-primary/60">
                    Before we deploy, we test your network for jitter, delay, and packet loss. 
                    We'll tell you what needs fixing—and help you fix it.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/features" className="inline-flex items-center gap-2 font-bold text-link hover:underline">
                See all features
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Enterprise Infrastructure */}
        <section className="py-24 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2">
                <div className="inline-block rounded-[5px] bg-white px-4 py-1 text-xs font-bold uppercase tracking-widest text-text-primary/60 shadow-sm mb-6">
                  Enterprise Grade Infrastructure
                </div>
                <h2 className="font-heading text-[34px] font-bold tracking-tight text-text-primary mb-6">
                  Built for Business Reliability
                </h2>
                <p className="text-lg leading-relaxed text-text-primary/60 mb-8">
                  TechWave VoIP is built on enterprise-grade infrastructure with the security and 
                  reliability your business needs. We combine robust technology with local support and fair pricing.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-text-primary font-medium">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    ISO 27001 Certified
                  </li>
                  <li className="flex items-center gap-3 text-text-primary font-medium">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    SOC 2 Type II Compliant
                  </li>
                  <li className="flex items-center gap-3 text-text-primary font-medium">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    99.99% Uptime Guarantee
                  </li>
                  <li className="flex items-center gap-3 text-text-primary font-medium">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    US-Based Support Team
                  </li>
                </ul>
                <Link href="/about" className="inline-flex items-center gap-2 font-bold text-link hover:underline">
                  Learn more about us
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </Link>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="relative bg-white rounded-[5px] p-8 shadow-xl border border-black/5">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="h-16 bg-bg-light rounded-[5px] flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl text-text-primary/40">cloud</span>
                    </div>
                    <div className="h-16 bg-bg-light rounded-[5px] flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl text-text-primary/40">dns</span>
                    </div>
                    <div className="h-16 bg-bg-light rounded-[5px] flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl text-text-primary/40">security</span>
                    </div>
                    <div className="h-16 bg-bg-light rounded-[5px] flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl text-text-primary/40">storage</span>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-black/5 text-center">
                    <p className="text-sm font-semibold text-text-primary/60">TRUSTED BY 10,000+ COMPANIES</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="relative overflow-hidden rounded-[5px] bg-text-primary px-8 py-16 text-center text-white">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="font-heading mx-auto max-w-2xl text-[34px] font-bold tracking-tight">
                  Ready to see your savings?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
                  Send us your current phone bill and we'll provide a Same-Day Savings Estimate. 
                  No pressure, no commitment—just data.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="flex w-full sm:w-auto items-center justify-center rounded-[5px] bg-accent px-10 py-5 text-lg font-bold text-white transition-all hover:bg-accent/90 hover:shadow-xl active:scale-95"
                  >
                    Send Your Bill Now
                  </Link>
                  <Link
                    href="/pricing"
                    className="flex w-full sm:w-auto items-center justify-center rounded-[5px] bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
                  >
                    View Pricing
                  </Link>
                </div>
                <p className="mt-8 text-sm text-gray-500">
                  Average customer saves 42% in their first year.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
