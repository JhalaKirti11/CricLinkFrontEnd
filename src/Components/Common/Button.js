import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const buttonClasses = `
    btn-custom 
    btn-${variant} 
    btn-${size}
    ${fullWidth ? 'btn-full-width' : ''}
    ${disabled ? 'btn-disabled' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
