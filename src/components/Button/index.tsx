import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button type="button" className={cn(s.root, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
