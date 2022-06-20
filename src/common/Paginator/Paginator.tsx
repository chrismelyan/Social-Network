import React, {useState} from 'react';
import s from "./Paginator.module.css";
import leftArrow from '../../assets/images/page-left.png';
import rightArrow from '../../assets/images/page-right.png';

type PaginatorType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    callbackOnPage: (pageNumber: number) => void
    portionSize: number

}

const Paginator = ({totalItemsCount, pageSize, currentPage, callbackOnPage, portionSize}: PaginatorType) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i < +pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize);

    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.pageNumbers}>
            {portionNumber > 1 &&
                <span onClick={() => setPortionNumber(portionNumber - 1)}>
                <img className={s.arrow} src={leftArrow} alt={'leftArrow'}/>
            </span>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((page, index) => {
                        return <span key={index + 1} className={currentPage === page ? s.selectedPage : ''}
                                     onClick={() => {
                                         callbackOnPage(page)
                                     }}> {page} </span>
                    })
            }
            {portionCount > portionNumber &&
                <span onClick={() => setPortionNumber(portionNumber + 1)}>
                <img className={s.arrow} src={rightArrow} alt={'rightArrow'}/>
            </span>
            }
        </div>
    );
};

export default Paginator;