import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBackward, faForward, faFastBackward, faFastForward } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types'; 


function Pager({page, pagesNumber, onPageChange }) {
     return (
        <div className='pager'>

            <div onClick={() => onPageChange(0)}         
                className={page === 0 ? "page-debut disable" : "page-debut"}>          
                <FontAwesomeIcon icon={faFastBackward}/>
            </div>

            <div onClick={() => onPageChange(page-1)}     
                className={page === 0 ? "page-precedente disable" : "page-precedente"}>  
                <FontAwesomeIcon icon={faBackward}/>
            </div>

            <div  className="page-courante"> {page+1}</div>

            <div onClick={() => onPageChange(page+1)}      
                className={page === pagesNumber -1 ? "page-suivante disable" : "page-suivante"}>
                <FontAwesomeIcon icon={faForward}/>
            </div>

            <div onClick={() => onPageChange(pagesNumber-1)}
                className={page === pagesNumber -1 ? "page-finale disable"   : "page-finale"}>  
                <FontAwesomeIcon icon={faFastForward}/>
            </div>

        </div>
     )
}


Pager.propTypes = {
    page: PropTypes.number,
    pagesNumber: PropTypes.number,
    onPageChange: PropTypes.func
};

export default Pager;