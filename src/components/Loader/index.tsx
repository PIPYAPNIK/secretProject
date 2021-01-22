import React from 'react';
import cl from 'classnames';
import s from './Loader.module.scss';

const Loader = () => {
  const circleCount = 12;
  const skChilds = Array.from(new Array(circleCount), (x, i) => {
    if (i === 0) <div className={cl(s['sk-child'])} key={i} />;
    else {
      // @ts-ignore
      <div className={cl(s['sk-child'], s[`sk-circle-${i}`])} key={i} />;
    }
  });

  return (
    <div className={s.root}>
      <div className={s['sk-circle-bounce']}>{...skChilds}</div>
    </div>
  );
};

export default Loader;
