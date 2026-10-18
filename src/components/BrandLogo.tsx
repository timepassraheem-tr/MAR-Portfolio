import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  className = '',
  showText = true,
}) => {
  // Size classes for pure vector rendering without any container background or border
  const sizeMap = {
    sm: { width: 110, height: 42, className: 'h-8 sm:h-9 w-auto' },
    md: { width: 140, height: 53, className: 'h-10 sm:h-12 w-auto' },
    lg: { width: 180, height: 68, className: 'h-14 sm:h-16 w-auto' },
  };

  const current = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* 
        EXACT LOGO from user's graphic - 100% transparent, NO background, NO box, NO borders
      */}
      <img
        src="/mar-logo.svg"
        alt="M.A.R ENTERPRISE"
        className={`${current.className} object-contain drop-shadow-[0_0_14px_rgba(168,85,247,0.45)] group-hover:drop-shadow-[0_0_22px_rgba(192,132,252,0.75)] transition-all duration-300 pointer-events-none`}
      />

      {/* Optional Tagline on Desktop */}
      {showText && (
        <div className="hidden lg:flex flex-col text-left pl-2 border-l border-purple-500/30 leading-tight">
          <span className="text-[10px] font-bold text-white tracking-widest uppercase font-display group-hover:text-purple-200 transition-colors">
            YOUR DIGITAL GROWTH PARTNER
          </span>
          <span className="text-[9px] text-purple-300/80 font-medium tracking-wider uppercase mt-0.5">
            Websites • Branding • Automation
          </span>
        </div>
      )}
    </div>
  );
};
