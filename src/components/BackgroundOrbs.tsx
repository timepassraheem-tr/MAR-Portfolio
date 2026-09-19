import React from 'react';

export const BackgroundOrbs: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Deep Navy Base Background */}
      <div className="absolute inset-0 bg-[#06060e]" />

      {/* Radial soft ambient gradients - static and non-distracting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,50,220,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_60%,rgba(90,30,180,0.12),rgba(255,255,255,0))]" />

      {/* Static Ambient Atmospheric Fill Gradients (Zero animation/movement) */}
      <div
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-purple-700/15 via-violet-900/10 to-transparent blur-[130px] opacity-70"
      />

      <div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-fuchsia-700/12 via-purple-900/10 to-transparent blur-[140px] opacity-60"
      />

      <div
        className="absolute -bottom-40 left-1/4 w-[700px] h-[600px] rounded-full bg-gradient-to-t from-indigo-900/12 via-purple-950/10 to-transparent blur-[130px] opacity-50"
      />

      {/* Subtle Geometric Plus Signs and Star Accents - Static */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute top-24 left-[15%] text-purple-400 text-lg font-mono select-none">+</div>
        <div className="absolute top-48 right-[12%] text-fuchsia-400 text-sm font-mono select-none">+</div>
        <div className="absolute top-[60%] left-[8%] text-violet-400 text-xl font-mono select-none">+</div>
        <div className="absolute top-[75%] right-[22%] text-purple-300 text-xs font-mono select-none">+</div>
        <div className="absolute top-[35%] left-[45%] text-purple-400/80 text-sm font-mono select-none">+</div>
        <div className="absolute bottom-32 left-[30%] text-fuchsia-300 text-base font-mono select-none">+</div>
        <div className="absolute top-[85%] right-[8%] text-indigo-400 text-lg font-mono select-none">+</div>
      </div>

      {/* Micro-dot matrix pattern overlay for texture depth - Static */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d8b4fe_1px,transparent_1px)] [background-size:32px_32px]"
      />
    </div>
  );
};
