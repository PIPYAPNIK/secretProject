import React from 'react';
import CustomSelect from '../CustomSelect';
import s from './FiltersBlock.module.scss';

interface IFiltersBlock {
  selectName: string;
  selectItems: Array<string>;
  setActiveTypes: any;
  activeTypes: Array<string>;
}

const FiltersBlock: React.FC<IFiltersBlock> = ({ selectName, selectItems, activeTypes, setActiveTypes }) => {
  return (
    <div className={s.root}>
      <CustomSelect name={selectName} items={selectItems} activeTypes={activeTypes} setActiveTypes={setActiveTypes} />
    </div>
  );
};

export default FiltersBlock;
