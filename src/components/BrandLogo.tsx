import React, { useState, useEffect, useRef } from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

const LOGO_CANDIDATE_PATHS = [
  '/Screenshot 2026-09-08 004629.jpg',
  '/Screenshot_2026-09-08_004629.jpg',
  '/assets/Screenshot 2026-09-08 004629.jpg',
  '/logo.jpg',
  '/logo.png',
];

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  className = '',
  showText = true,
}) => {
  const [candidateIdx, setCandidateIdx] = useState(0);
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [hasImageFailed, setHasImageFailed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sizeMap = {
    sm: { box: 'w-8 h-8', text: 'text-sm', sub: 'text-[9px]' },
    md: { box: 'w-10 h-10', text: 'text-base', sub: 'text-[10px]' },
    lg: { box: 'w-14 h-14', text: 'text-xl', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  useEffect(() => {
    try {
      const savedLogo = localStorage.getItem('mar_user_logo');
      if (savedLogo) {
        setLogoSrc(savedLogo);
        setHasImageFailed(false);
        return;
      }
    } catch {}

    setCandidateIdx(0);
    setLogoSrc(LOGO_CANDIDATE_PATHS[0]);
    setHasImageFailed(false);

    const handleLogoUpdate = (e: CustomEvent<string>) => {
      if (e.detail) {
        setLogoSrc(e.detail);
        setHasImageFailed(false);
      }
    };

    window.addEventListener('mar_logo_updated' as any, handleLogoUpdate);
    return () => {
      window.removeEventListener('mar_logo_updated' as any, handleLogoUpdate);
    };
  }, []);

  const handleImageError = () => {
    const nextIdx = candidateIdx + 1;
    if (nextIdx < LOGO_CANDIDATE_PATHS.length) {
      setCandidateIdx(nextIdx);
      setLogoSrc(LOGO_CANDIDATE_PATHS[nextIdx]);
    } else {
      setHasImageFailed(true);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const dataUrl = evt.target?.result as string;
        if (dataUrl) {
          try {
            localStorage.setItem('mar_user_logo', dataUrl);
          } catch {}
          setLogoSrc(dataUrl);
          setHasImageFailed(false);
          window.dispatchEvent(new CustomEvent('mar_logo_updated', { detail: dataUrl }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`flex items-center gap-2.5 group select-none ${className}`}>
      {/* Hidden file input for logo replacement */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        className="hidden"
      />

      {/* Brand Icon Container */}
      <div
        onClick={(e) => {
          // If shift key or double click, allow uploading custom logo
          if (e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            fileInputRef.current?.click();
          }
        }}
        title="Shift+Click to upload logo image (Screenshot 2026-09-08 004629.jpg)"
        className={`relative ${currentSize.box} rounded-xl bg-gradient-to-br from-[#1a1130] via-[#120e26] to-[#0c0919] border border-purple-500/40 p-[1px] shadow-[0_0_15px_rgba(168,85,247,0.25)] group-hover:border-purple-400 group-hover:shadow-[0_0_22px_rgba(168,85,247,0.45)] transition-all duration-300 flex items-center justify-center overflow-hidden cursor-pointer`}
      >
        {!hasImageFailed && logoSrc ? (
          <img
            src={logoSrc}
            alt="M.A.R Enterprise Logo"
            onError={handleImageError}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain p-1 rounded-lg filter drop-shadow-[0_0_6px_rgba(192,132,252,0.6)]"
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            className="w-[78%] h-[78%] drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Geometric background grid */}
            <rect x="4" y="4" width="92" height="92" rx="18" stroke="url(#logo-border-grad)" strokeWidth="3" strokeDasharray="6 4" opacity="0.4" />
            
            {/* Monogram MAR Paths */}
            <path
              d="M20 76V24L36 50L52 24V76"
              stroke="url(#logo-grad-primary)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M50 76L66 24L82 76"
              stroke="url(#logo-grad-secondary)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M57 56H75"
              stroke="#e9d5ff"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M66 40C73 40 78 44 78 50C78 56 72 59 66 59M72 59L82 76"
              stroke="#c084fc"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
            
            <circle cx="50" cy="18" r="3" fill="#e879f9" className="animate-pulse" />

            <defs>
              <linearGradient id="logo-grad-primary" x1="20" y1="24" x2="52" y2="76" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="0.6" stopColor="#c084fc" />
                <stop offset="1" stopColor="#9333ea" />
              </linearGradient>
              <linearGradient id="logo-grad-secondary" x1="50" y1="24" x2="82" y2="76" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e9d5ff" />
                <stop offset="0.5" stopColor="#a855f7" />
                <stop offset="1" stopColor="#6366f1" />
              </linearGradient>
              <linearGradient id="logo-border-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c084fc" />
                <stop offset="1" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {/* Inner Corner Accent */}
        <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-purple-400/60 blur-[0.5px]"></div>
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex flex-col tracking-wider">
          <div className="flex items-center gap-1">
            <span className={`font-bold font-display tracking-tight text-white ${currentSize.text} leading-none group-hover:text-purple-200 transition-colors`}>
              M.A.R
            </span>
            <span className={`font-semibold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent ${currentSize.text} leading-none`}>
              ENTERPRISE
            </span>
          </div>
          <span className={`text-slate-400 font-medium tracking-widest uppercase ${currentSize.sub} mt-0.5 leading-none`}>
            Digital Studio
          </span>
        </div>
      )}
    </div>
  );
};
