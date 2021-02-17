import React from 'react'
import s from "./Paginator.module.css";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
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


    return (<div className={s.buttons}>
        {pages}
    </div>)
}

export default Paginator