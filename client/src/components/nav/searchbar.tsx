import React from 'react';
import 'react-fa';
import './style.css'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * This component renders a search bar that has a text input field,
 * a select to choose how to seach and a search button
 */
const Searchbar: React.FC = () => {
    return (
        <div className="searchbar input-group mb-3 col-12"> 

            {/* text input field */}
            <input className="form-control col-8 m0" type="text" placeholder="Search"/>  

            {/* div contains the two buttons appended to the text input  */}
            <div className="input-group-append" id="button-addon4">
                <select className="custom-select br0" id="inputGroupSelect04">
                    <option selected>Select</option>
                    <option value="1">Title</option>
                    <option value="2">Genre</option>
                </select>
                <button className="btn" id="rb-btn"><FontAwesomeIcon icon={faSearch} /></button>
            </div>             
        </div>           
    );
}


export default Searchbar;