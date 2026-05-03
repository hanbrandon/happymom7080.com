'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface PremiumButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
  className?: string;
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function PremiumButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className,
  icon,
  type = 'button',
  disabled = false,
}: PremiumButtonProps) {
  
  const variantStyles = {
    primary: 'bg-black text-white border-none hover:bg-gray-900',
    secondary: 'border border-white text-white hover:bg-white/10',
    dark: 'bg-gray-900 text-white border-none hover:bg-black',
    outline: 'border border-gray-200 text-gray-900 hover:bg-gray-50',
    ghost: 'text-gray-600 hover:text-black bg-transparent',
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-3 group-hover:gap-5 transition-all duration-300 ease-out">
        {children}
        {icon && (
          <span className="flex-shrink-0">
            {icon}
          </span>
        )}
      </span>
      {/* Shimmer Flash Effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
    </>
  );

  const commonClasses = cn(
    "relative px-10 h-14 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer overflow-hidden group flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href as any} className={commonClasses} onClick={onClick}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={commonClasses}
    >
      {buttonContent}
    </button>
  );
}
