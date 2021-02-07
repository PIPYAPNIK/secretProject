import React from 'react';
import cl from 'classnames';
import s from './Loader.module.scss';

const Loader = () => {
  const circleCount = 12;
  const skChilds = Array.from({ length: circleCount }, (v, i) => i + 1);

  return (
    <div className={s.root}>
      <div className={s['sk-circle-bounce']}>
        {skChilds.map((item) => {
          if (item === 1) {
            return <div className={cl(s['sk-child'])} key={item} />;
          } else {
            return (
              // @ts-ignore
              <div className={cl(s['sk-child'], s[`sk-circle-${item - 1}`])} key={item} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Loader;
