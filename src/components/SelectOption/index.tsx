import React, { useEffect, useMemo, useState } from 'react';
import s from './SelectOption.module.scss';
import cn from 'classnames';

interface ISelectOption {
  name: string;
  setActiveTypes: any;
  activeTypes: Array<string>;
}

const SelectOption: React.FC<ISelectOption> = ({ name, setActiveTypes, activeTypes }) => {
  const initialActiveStatus = activeTypes.includes(name.toLowerCase());
  const [isActive, setIsActive] = useState<boolean>(initialActiveStatus);

  const handleOptionClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const elem = name.toLowerCase();

    if (isActive) {
      setActiveTypes([...activeTypes, elem]);
    } else {
      if (activeTypes.length >= 1) {
        const elIndex = activeTypes.indexOf(elem);
        activeTypes.splice(elIndex, 1);
        setActiveTypes([...activeTypes]);
      }
    }
  }, [isActive]);

  return (
    <div className={cn(s.selectOption, { [s.active]: isActive })} key={name} onClick={() => handleOptionClick()}>
      {name}
    </div>
  );
};

export default React.memo(SelectOption);
