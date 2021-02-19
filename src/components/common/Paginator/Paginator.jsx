import React, {useState} from 'react'
import s from "./Paginator.module.css";
import cn from 'classnames'

const Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortion = (portionNumber - 1) * portionSize + 1
    const rightPortion = portionNumber * portionSize
    const lastPortion = Math.ceil(pagesCount / portionSize)


    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    /*for (let i = 1; i <= pagesCount; i++) {
        let classShow = i === 1 || i === pagesCount
        || i === props.currentPage
        || i === props.currentPage + 1
        || i === props.currentPage + 2
        || i === props.currentPage - 1
        || i === props.currentPage - 2
            ? s.show
            : ''

        let classActive = i === props.currentPage ? s.active : ''
        let classFirstBtn = i === 1 ? s.firstBtn : ''
        let classLastBtn = i === 1 ? s.lastBtn : ''

        pages.push(<button onClick={() => props.onPageChanged(i)}
                           key={i}
                           className={`${s.buttonPage}
                           ${classShow}
                           ${classActive}
                           ${classFirstBtn}
                           ${classLastBtn}`}>{i}</button>)
    }
*/

    return (<div className={s.buttons}>
        {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>назвад</button>}
        {pages.filter(p => p >= leftPortion && p <= rightPortion && totalItemsCount > pageSize)
            .map(item => <button className={cn({[s.active]: currentPage === item}, s.buttonPage)}
                                 onClick={() => {
                                     onPageChanged(item)
                                 }}>{item}</button>)
        }
        {portionNumber !== lastPortion && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>вперед</button>}
        {portionNumber !== lastPortion && <button onClick={() => {setPortionNumber(lastPortion)}}>в конец</button>}
    </div>)
}

export default Paginator