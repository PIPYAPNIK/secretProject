import React from 'react';

interface IHeading {
  headingSize?: number;
  className?: string;
}

const Heading: React.FC<IHeading> = ({ children, headingSize = 1, className }) => {
  const CustomtitleTag = `h${headingSize > 6 || headingSize < 1 ? 1 : headingSize}`;

  return React.createElement(CustomtitleTag, { className }, children);
};

export default Heading;
