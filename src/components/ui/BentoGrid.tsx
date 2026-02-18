"use client";

import { ReactNode } from "react";
import { ArrowRight, Phone, PhoneOff, WifiOff, Settings, Receipt, Headset } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  solution,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon: React.ComponentType<{ className?: string }>;
  description: string;
  solution: string;
}) => (
  <div
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-white border border-black/5 shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "dark:bg-black dark:border-[1px_solid_rgba(255,255,255,.1)]",
      className,
    )}
  >
    <div className="absolute inset-0">{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300">
      <Icon className="h-12 w-12 origin-left transform-gpu text-primary transition-all duration-300" />
      <h3 className="text-xl font-bold text-text-primary">
        {name}
      </h3>
      <p className="text-text-primary/60">{description}</p>
    </div>

    <div className="pointer-events-none absolute bottom-0 flex w-full flex-row items-center gap-2 border-t border-black/5 bg-white/90 p-4 backdrop-blur-sm">
      <div className="flex-1">
        <p className="text-xs font-medium text-primary">→ Our solution</p>
        <p className="text-xs text-text-primary/60">{solution}</p>
      </div>
      <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
    </div>
    <div className="pointer-events-none absolute inset-0 bg-black/[.02] opacity-0 transition-all duration-300 group-hover:opacity-100" />
  </div>
);

export { BentoCard, BentoGrid };

const problems = [
  {
    Icon: PhoneOff,
    name: "Dropped Calls",
    description: "Calls cutting out during important conversations.",
    solution: "Network readiness check included. We measure jitter, delay, and packet loss.",
  },
  {
    Icon: Receipt,
    name: "Paying for Empty Seats",
    description: "Paying for extensions you don't use.",
    solution: "Pay for calls you make, not names on a list.",
  },
  {
    Icon: WifiOff,
    name: "Outages",
    description: "Phone system going down and missing calls.",
    solution: "99.99% uptime SLA with redundant data centers.",
  },
  {
    Icon: Settings,
    name: "Complex Setup",
    description: "Fear of disruption during migration.",
    solution: "Week-ish migration. We test everything first.",
  },
  {
    Icon: Phone,
    name: "Can't Work Remotely",
    description: "Team needs to work from anywhere.",
    solution: "Softphone and mobile app included.",
  },
  {
    Icon: Headset,
    name: "No Support",
    description: "Stuck on hold with overseas support.",
    solution: "US-based support. Real people who answer.",
  },
];

export function ProblemsGrid() {
  return (
    <BentoGrid>
      {problems.map((problem) => (
        <BentoCard
          key={problem.name}
          {...problem}
          background={
            <div
              className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
          }
        />
      ))}
    </BentoGrid>
  );
}
