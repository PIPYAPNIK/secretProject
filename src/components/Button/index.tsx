import React from 'react';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  background?: string;
  height?: string;
  fontSize?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  width = 'auto',
  background = '#73D677',
  height = '66px',
  fontSize = '23px',
}) => {
  const buttonStyle = {
    width,
    background,
    height,
    fontSize,
  };

  return (
    <button type="button" className={s.root} onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
