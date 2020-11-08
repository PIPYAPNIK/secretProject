import React from 'react';
import cn from 'classnames';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cn(s.root)}>
      <div className={cn(s.wrap)}>
        <p className={cn(s.pharagraph)}>
          Make with <span role="img">❤</span>
        </p>
        <p className={cn(s.pharagraph)}>Ours Team</p>
      </div>
    </footer>
  );
};

export default Footer;
