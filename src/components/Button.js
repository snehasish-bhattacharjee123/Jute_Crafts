import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 font-body font-medium text-base uppercase transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-primary text-textLight hover:bg-secondary hover:scale-105 hover:shadow-lg focus:ring-primary',
    secondary: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-textLight hover:scale-105 hover:shadow-lg focus:ring-primary',
    gold: 'bg-gold text-secondary hover:bg-gold/90 hover:scale-105 hover:shadow-lg focus:ring-gold',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;