'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ReusableButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const ReusableButton: React.FC<ReusableButtonProps> = ({
  children,
  className,
  variant = 'default',
  disabled = false,
  onClick,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        // Base styles (padding 24px * 21px)
        'px-[24px] py-[12px] rounded-lg font-medium flex items-center justify-center transition-all cursor-pointer',
        'disabled:opacity-50 disabled:cursor-not-allowed',

        // Variants
        variant === 'default' && 'bg-primary text-white hover:bg-primary/90',

        variant === 'outline' &&
          'border border-gray-400 bg-white text-black hover:bg-gray-50',

        // Custom extra classes
        className
      )}
    >
      {children}
    </button>
  );
};

export default ReusableButton;
