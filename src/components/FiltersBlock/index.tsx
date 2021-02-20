import React from 'react';
import CustomSelect from '../CustomSelect';
import s from './FiltersBlock.module.scss';

interface IFiltersBlock {
  selectName: string;
  selectItems: Array<string>;
  setActiveType: any;
  activeType: string;
}

const FiltersBlock: React.FC<IFiltersBlock> = ({ selectName, selectItems, activeType, setActiveType }) => {
  return (
    <div className={s.root}>
      <CustomSelect name={selectName} items={selectItems} activeType={activeType} setActiveType={setActiveType} />
    </div>
  );
};

export default FiltersBlock;
