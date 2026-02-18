"use client";

import { useState, useMemo } from "react";

const LICENSE_SIZES = [8, 16, 32, 48, 64, 96, 128, 192, 256, 512, 1024];

export default function PricingCalculator() {
  const [users, setUsers] = useState(20);
  const [extensions, setExtensions] = useState(20);
  const [costPerExtension, setCostPerExtension] = useState(35);

  const calculation = useMemo(() => {
    const concurrentCalls = Math.ceil(users / 3);
    
    let licenseSize = LICENSE_SIZES[0];
    for (const size of LICENSE_SIZES) {
      if (size >= concurrentCalls) {
        licenseSize = size;
        break;
      }
    }
    
    const ourPrice = licenseSize * 30;
    const currentPrice = extensions * costPerExtension;
    const monthlySavings = currentPrice - ourPrice;
    const yearlySavings = monthlySavings * 12;
    const savingsPercent = currentPrice > 0 ? Math.round((monthlySavings / currentPrice) * 100) : 0;

    return {
      concurrentCalls,
      licenseSize,
      ourPrice,
      currentPrice,
      monthlySavings,
      yearlySavings,
      savingsPercent,
    };
  }, [users, extensions, costPerExtension]);

  return (
    <div className="bg-white rounded-[5px] border border-black/5 p-8">
      <h3 className="font-heading text-2xl font-bold text-text-primary mb-6 text-center">
        Calculate Your Savings
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Number of Users
          </label>
          <input
            type="range"
            min="1"
            max="200"
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="mt-2 text-2xl font-bold text-primary">{users}</div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Number of Extensions
          </label>
          <input
            type="range"
            min="1"
            max="200"
            value={extensions}
            onChange={(e) => setExtensions(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="mt-2 text-2xl font-bold text-primary">{extensions}</div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Current Cost per Extension ($)
          </label>
          <input
            type="range"
            min="10"
            max="100"
            value={costPerExtension}
            onChange={(e) => setCostPerExtension(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="mt-2 text-2xl font-bold text-primary">${costPerExtension}</div>
        </div>
      </div>

      <div className="bg-bg-light rounded-[5px] p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div className="text-center">
            <p className="text-sm text-text-primary/60 mb-1">Your Current Bill</p>
            <p className="text-2xl font-bold text-text-primary">${calculation.currentPrice}/mo</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-text-primary/60 mb-1">Our Price</p>
            <p className="text-2xl font-bold text-primary">${calculation.ourPrice}/mo</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-text-primary/60 mb-1">Monthly Savings</p>
            <p className="text-2xl font-bold text-accent">${calculation.monthlySavings}/mo</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-text-primary/60 mb-1">Yearly Savings</p>
            <p className="text-2xl font-bold text-accent">${calculation.yearlySavings.toLocaleString()}/yr</p>
          </div>
        </div>

        {calculation.savingsPercent > 0 && (
          <div className="text-center pt-6 border-t border-black/5">
            <p className="text-lg text-text-primary/60">
              You could save <span className="font-bold text-accent">{calculation.savingsPercent}%</span> on your monthly phone bill
            </p>
          </div>
        )}
      </div>

      <p className="text-xs text-text-primary/40 mt-4 text-center">
        *Based on {users} users. Your system sized for {calculation.concurrentCalls} simultaneous calls ({calculation.licenseSize} channel license at $30/channel).
      </p>
    </div>
  );
}
