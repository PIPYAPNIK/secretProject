import React from 'react';
import cn from 'classnames';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cn(s.footer)}>
      <div className={cn(s.content)}>
        <p className={cn(s.footer__pharagraph)}>
          Make with <span role="img">❤</span>
        </p>
        <p className={cn(s.footer__pharagraph)}>Ours Team</p>
      </div>
    </footer>
  );
};

export default Footer;
