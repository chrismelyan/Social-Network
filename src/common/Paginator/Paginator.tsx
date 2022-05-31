import React from 'react';
import s from "./Paginator.module.css";

type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    callbackOnPage: (pageNumber: number) => void

}

const Paginator = ({totalUsersCount, pageSize, currentPage, callbackOnPage}: PaginatorType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pagesForPagination = [];
    if (currentPage > 10 && pagesCount - currentPage > 10) {
        for (let i = currentPage - 10; i<=currentPage + 10; i++)
            pagesForPagination.push(i)
    } else if (0 < currentPage && currentPage<=10) {
        for (let i = 1; i<=20; i++)
            pagesForPagination.push(i)
    } else if (pagesCount - currentPage <= 10 ) {
        for (let i = pagesCount - 20; i<=pagesCount; i++)
            pagesForPagination.push(i)
    }
    return (
        <div className={s.pageNumbers}>
            {
                pagesForPagination.map((page, index) => {
                    return <span key={index + 1} className={currentPage === page ? s.selectedPage : ''}
                                 onClick={() => {callbackOnPage(page)}}> {page} </span>
                })
            }
        </div>
    );
};

export default Paginator;