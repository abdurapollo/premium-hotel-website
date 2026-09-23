import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  containerClassName = '',
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#071A36]/10 ${containerClassName}`}>
      {!error ? (
        <>
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            className={`transition-all duration-700 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } ${className}`}
          />
          {!loaded && (
            <div className="absolute inset-0 bg-[#071A36]/10 animate-pulse flex items-center justify-center">
              <Building2 className="w-8 h-8 text-[#C9A24D]/40" />
            </div>
          )}
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#071A36] to-[#102747] flex flex-col items-center justify-center p-6 text-center text-white">
          <Building2 className="w-10 h-10 text-[#C9A24D] mb-2 opacity-80" />
          <span className="font-serif text-sm tracking-wide text-[#F8F7F3] line-clamp-2">{alt}</span>
          <span className="text-[11px] text-[#C9A24D] uppercase tracking-widest mt-1">The Oakridge Luxury</span>
        </div>
      )}
    </div>
  );
}
