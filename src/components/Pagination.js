import React from 'react'


export const Pagination = (props) => {
    const npage = Math.ceil(props.data.length / props.recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    function prePage(){
        if(props.currentPage !== 1){
            props.setCurrentPage(props.currentPage - 1)
        }
    }
    function changeCPage(id){
        props.setCurrentPage(id)
    }
    function nextPage(){
        if(props.currentPage !== npage){
            props.setCurrentPage(props.currentPage + 1)
        }
    }

    return (
        <>
         <nav>
            <ul className="pagination">
                <li className='page-item'>
                    <a href="#" className="page-link" onClick={prePage}>Previous</a>
                </li>
                {
                    numbers.map((n, i) => (
                        <li className={`page-item ${props.currentPage === n ? 'active' : ''}`} key={i}>
                            <a href="#" className="page-link" onClick={() => changeCPage(n)}>{n}</a>
                        </li>
                    ))
                }
                <li className='page-item'>
                    <a href="#" className="page-link" onClick={nextPage}>Next</a>
                </li>

            </ul>
        </nav>
        </>
        
    )
}