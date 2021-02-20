import React, { useEffect, useMemo, useState } from 'react';
import s from './SelectOption.module.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

interface ISelectOption {
  name: string;
  setActiveType: any;
  activeType: string;
}

const SelectOption: React.FC<ISelectOption> = ({ name, setActiveType, activeType }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleOptionClick = () => {
    if (isActive) dispatch(setActiveType(''));
    else dispatch(setActiveType(name.toLowerCase()));
  };

  useEffect(() => {
    if (name.toLowerCase() === activeType) setIsActive(true);
    else setIsActive(false);
  }, [activeType]);

  return (
    <div className={cn(s.selectOption, { [s.active]: isActive })} key={name} onClick={() => handleOptionClick()}>
      {name}
    </div>
  );
};

export default React.memo(SelectOption);
