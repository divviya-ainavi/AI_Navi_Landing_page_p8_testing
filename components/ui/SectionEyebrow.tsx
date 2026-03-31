import React from 'react';

interface SectionEyebrowProps {
  children: React.ReactNode;
  withLine?: boolean;
}

export function SectionEyebrow({ children, withLine = true }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-3 mb-3">
      {withLine && <div className="w-4 h-[2px] bg-orange rounded-full" />}
      <p className="text-[11px] font-bold uppercase tracking-eyebrow text-orange">
        {children}
      </p>
    </div>
  );
}
