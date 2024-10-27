import React, { useState } from 'react';
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from '../../context/mealContext';
import { useNavigate } from 'react-router-dom';
import { startFetchMealsBySearch } from '../../actions/mealsActions';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch } = useMealContext(); // Removed meals as it was unused

  const handleSearchTerm = (e) => {
    e.preventDefault();
    const value = e.target.value.replace(/[^\w\s]/gi, "");
    if (value.length !== 0) {
      setSearchTerm(value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") { // Check if searchTerm is not just whitespace
      startFetchMealsBySearch(dispatch, searchTerm);
      navigate("/"); // Navigate after fetching meals
    } else {
      setErrorMsg("Please enter a valid search term.");
    }
  }

  return (
    <form className='search-form flex align-center' onSubmit={handleSearchResult}>
      <input 
        type="text" 
        className='form-control-input text-dark-gray fs-15' 
        placeholder='Search recipes here ...' 
        onChange={handleSearchTerm} 
      />
      <button type="submit" className='form-submit-btn text-white text-uppercase fs-14'>
        <BsSearch className='btn-icon' size={20} />
      </button>
      {errorMsg && <div className="error-msg">{errorMsg}</div>} {/* Display error message if exists */}
    </form>
  );
}

export default SearchForm;
