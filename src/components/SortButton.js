import React from "react";
import PropTypes from 'prop-types'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";



function SortButton({ children, active, isAscending, disabled, onClick }) {

    return (
        <>
            <button className={active ? "sort-button active" : "sort-button"} 
            disabled={disabled} onClick={() => onClick(!isAscending)} >
            
            <div className="name-tri">
                {children}
            </div>

                {isAscending ?
                <FontAwesomeIcon icon={ faArrowUp }/> :
                <FontAwesomeIcon icon={ faArrowDown } />}
            </button>
        </>
    )
}

SortButton.propTypes = {
    name: PropTypes.string,
    active: PropTypes.string,
    isAscending: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default SortButton;