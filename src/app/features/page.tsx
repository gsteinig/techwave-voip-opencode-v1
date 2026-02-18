import Link from "next/link";

export const metadata = {
  title: "Features | TechWave VoIP",
  description: "All the VoIP features you need to run your business. Softphone, mobile app, call queues, and more—included.",
};

export default function Features() {
  const features = [
    {
      title: "Hosted Cloud Phones",
      description: "No hardware to maintain. Your phone system lives in the cloud, managed by us.",
      icon: "cloud",
      benefits: [
        "No on-premise equipment",
        "Scalable as you grow",
        "Managed updates and maintenance",
        "Access from anywhere",
      ],
    },
    {
      title: "Call Queues",
      description: "Professional call handling that keeps customers moving through the queue.",
      icon: "queue",
      benefits: [
        "Configurable queue positions",
        "Estimated wait time announcements",
        "Overflow routing",
        "Priority queue for VIP callers",
      ],
    },
    {
      title: "Mobile App",
      description: "Take your business number anywhere. Make and receive calls on your mobile device.",
      icon: "smartphone",
      benefits: [
        "Use your business number",
        "HD voice quality",
        "WiFi and cellular calling",
        "Works internationally",
      ],
    },
    {
      title: "Desktop Softphone",
      description: "Full-featured desktop application. No desk phone required.",
      icon: "computer",
      benefits: [
        "Click-to-call from browser",
        "Call recording",
        "Presence indicators",
        "Integrates with CRM",
      ],
    },
    {
      title: "Auto Attendant",
      description: "Professional greeting and routing. Direct calls to the right person every time.",
      icon: "ivr",
      benefits: [
        "Custom greetings",
        "Time-based routing",
        "Holiday schedules",
        "Multi-level menus",
      ],
    },
    {
      title: "Voicemail to Email",
      description: "Never miss a message. Voicemails delivered straight to your inbox.",
      icon: "voicemail",
      benefits: [
        "Audio file attachment",
        "Transcription optional",
        "Email and SMS notifications",
        "Multiple mailbox support",
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
              All the VoIP features you need.
            </h1>
            <p className="font-body mx-auto mt-6 max-w-2xl text-xl text-text-primary/60">
              Professional-grade phone features, included. No per-user add-ons. No surprises.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[5px] bg-accent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-accent/90 hover:shadow-xl active:scale-95"
              >
                Upload Your Bill
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-8 p-8 rounded-[5px] border border-black/5 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[5px] bg-primary/10 text-primary">
                      <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">{feature.title}</h3>
                    <p className="text-text-primary/60 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-text-primary/70">
                          <span className="material-symbols-outlined text-primary text-sm">check</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-16 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Ready to save on your business phone system?
            </h2>
            <p className="text-text-primary/60 mb-8">
              Send us your current bill and we'll show you what you could save with TechWave.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[5px] bg-accent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-accent/90 active:scale-95"
            >
              Send Your Bill Now
            </Link>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-[34px] font-bold tracking-tight text-text-primary">
                What's Included
              </h2>
              <p className="mt-4 text-lg text-text-primary/60">
                Everything you need to run your business phone system.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Unlimited Extensions",
                "Call Recording",
                "Call Forwarding",
                "Caller ID",
                "Call Transfer",
                "Hold Music",
                "Conference Calling",
                "SMS/MMS",
                "Fax to Email",
                "Directory Listing",
                "Emergency Calling",
                "24/7 Support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-[5px] bg-bg-light">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-sm font-medium text-text-primary">{item}</span>
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
                  Get a full feature list tailored to your business.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
                  Upload your current bill and we'll show you exactly what you're paying for—and what you could be getting.
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
