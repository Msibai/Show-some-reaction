import {useState, useRef} from 'react';
import Filter from "./Filter.jsx";


function DropDownSearch(props) {
    const [visibleSearchBox, searchBoxIsShown] = useState(false);

    const handleSearchClick = event => {
        searchBoxIsShown(current => !current);
    }

    return (

        <>
            <button onClick={handleSearchClick} className="drop-down-search">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-search">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                </div>
                <p>Search for a specific show</p> </button>
            {visibleSearchBox && (<Filter showData={props.showData} setShowData={props.showData} setFilteredData={props.setFilteredData}/>)}

        </>)
}

export default DropDownSearch
