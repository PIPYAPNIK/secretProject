import React, { useState } from 'react';
import s from './CustomSelect.module.scss';
import cn from 'classnames';
import { toCapitalizeWord } from '../../utils/toCapitalizeWord';
import SelectOption from '../SelectOption';

interface ICustomSelect {
  name: string;
  items: Array<string>;
  setActiveTypes: any;
  activeTypes: Array<string>;
}

const CustomSelect: React.FC<ICustomSelect> = ({ name, items, setActiveTypes, activeTypes }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={cn(s.root, {
        [s.active]: isOpen,
      })}>
      <div className={s.selectPanel} onClick={() => setIsOpen(!isOpen)}>
        {name}
      </div>
      <div className={s.selectBody}>
        {items.map((el, i) => {
          return (
            <SelectOption
              key={name + i}
              name={toCapitalizeWord(el)}
              activeTypes={activeTypes}
              setActiveTypes={setActiveTypes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CustomSelect;
