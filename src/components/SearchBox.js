import React from 'react';

const SearchBox = (props) => {
    const {searchChange} = props;
    return(
        <div className = 'pa2'>
            <input
                className = 'pa3 ba b--green bg-light-blue'
                type= "search"
                placeholder = "Search Robots"
                onChange= {searchChange}
            />
        </div>
    );
}

export default SearchBox;