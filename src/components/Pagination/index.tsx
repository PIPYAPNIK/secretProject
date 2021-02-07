import React from 'react';
import { createPages } from '../../utils/pagesCreator';
import cn from 'classnames';
import s from './Pagination.module.scss';

interface IPagination {
  offset: number;
  setOffset: any;
  totalPages: number;
  setCurrentPage: any;
  currentPage: number;
  limit: number;
}
const Pagination: React.FC<IPagination> = (props) => {
  const { offset = 0, setOffset, totalPages, setCurrentPage, currentPage, limit } = props;
  const pages: Array<number> = [];
  createPages(pages, totalPages, currentPage);

  const handlePageClick = (page: number) => {
    if (page === 1) setOffset(0);
    else setOffset(offset + limit);

    setCurrentPage(page);
  };

  return (
    <div className={s.root}>
      {pages.map((item) => {
        return (
          <button
            key={item}
            className={cn(s['page-button'], item === currentPage ? s.active : '')}
            onClick={() => handlePageClick(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
