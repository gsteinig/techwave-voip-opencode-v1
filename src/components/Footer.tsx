import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-[5px]">
              <span className="material-symbols-outlined text-white text-[16px]">waves</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-text-primary">TechWave VoIP</span>
          </Link>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link className="text-sm text-text-primary/60 hover:text-primary transition-colors" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="text-sm text-text-primary/60 hover:text-primary transition-colors" href="/terms">
              Terms of Service
            </Link>
            <Link className="text-sm text-text-primary/60 hover:text-primary transition-colors" href="/sitemap">
              Sitemap
            </Link>
          </div>
          <div className="text-sm text-text-primary/60">
            &copy; {new Date().getFullYear()} TechWave VoIP. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
