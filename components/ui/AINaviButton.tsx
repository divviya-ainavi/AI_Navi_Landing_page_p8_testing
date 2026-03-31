import React from 'react';
import Link from 'next/link';

interface AINaviButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost' | 'grey' | 'text';
  onClick?: () => void;
  className?: string;
}

export function Button({ children, href, variant = 'primary', onClick, className = '' }: AINaviButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200';

  const variants = {
    primary: 'btn-glow btn-press bg-orange text-white px-6 py-3 rounded-[7px] hover:bg-orange/90 text-[14px]',
    ghost: 'btn-press border-[1.5px] border-orange text-orange bg-transparent px-6 py-3 rounded-[7px] hover:bg-orange/5 text-[14px]',
    grey: 'btn-press border border-border text-navy bg-white px-6 py-3 rounded-[7px] hover:bg-ice text-[14px]',
    text: 'text-purple underline underline-offset-[3px] hover:text-purple/80 text-[14px] font-semibold',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
