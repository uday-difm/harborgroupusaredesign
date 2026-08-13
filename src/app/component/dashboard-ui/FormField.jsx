import React, { forwardRef } from 'react';

export const FormField = forwardRef(({ 
  label, 
  error, 
  type = 'text', 
  as = 'input',
  className = '',
  id,
  ...props 
}, ref) => {
  const Component = as;
  const inputId = id || props.name;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label 
          htmlFor={inputId} 
          className="text-sm font-medium text-navy-800"
        >
          {label}
        </label>
      )}
      
      <Component
        ref={ref}
        id={inputId}
        type={as === 'input' ? type : undefined}
        className={`
          w-full px-4 py-2.5 bg-white border rounded-lg text-navy-900 
          placeholder:text-navy-300 transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
          ${error ? 'border-error focus:ring-error/20 focus:border-error' : 'border-navy-200 hover:border-navy-300'}
        `}
        {...props}
      />
      
      {error && (
        <span className="text-xs font-medium text-error mt-0.5 animate-fadeIn">
          {error}
        </span>
      )}
    </div>
  );
});

FormField.displayName = 'FormField';
