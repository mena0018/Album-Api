import React from 'react';
import PropTypes from 'prop-types';
import SortButton from './SortButton'

function Sorting({ sorts, onChange, disabled, selected })  {
    let listSort = Object.entries(sorts).map( (sortName) => 

        <SortButton active={selected === sortName[0] ? selected : ""} isAscending={sortName[1]} key={sortName[0]}
        disabled={disabled} onClick={(isAsc) => onChange(sortName[0], isAsc)}>
            {sortName[0]} </SortButton>
    )
    
        return (
            <div className="sorting">
               {listSort}
            </div>
        )

}

Sorting.propTypes = {
    sorts: PropTypes.shape({
        nom: PropTypes.bool.isRequired,
        année: PropTypes.bool.isRequired,
        genre: PropTypes.bool.isRequired,
        artiste: PropTypes.bool.isRequired
    }),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    selected: PropTypes.string,
};

export default Sorting;
