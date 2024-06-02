import React, { useState } from 'react';
import './SearchEngine.css';

export default function SearchEngine() {
    const [keyword, setKeyword] = useState('');

    function searchKeyword(event) {
        event.preventDefault();
        alert(`searching for ${keyword}.`);
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className='SearchEngine open-sans-searchEngine'>
            <p className='SearchBarTag'>Type your Word</p>
            <form className='Form' onSubmit={searchKeyword}>
                <input
                    type='searchBar'
                    placeholder='For Example: Phlegmatic '
                    className='SearchBar'
                    onChange={handleKeyword}
                />
                <br />
                <button className='SearchButton btn '>Search</button>
            </form>
        </div>
    );
}
