import React from 'react';
import './SearchEngine.css';

export default function SearchEngine() {
    return (
        <div className='SearchEngine open-sans-searchEngine'>
            <p className='SearchBarTag'>Type your Word</p>
            <form className='Form'>
                <input
                    type='searchBar'
                    placeholder='For Example: Phlegmatic '
                    className='SearchBar'
                />
                <br />
                <button className='SearchButton btn '>Search</button>
            </form>
        </div>
    );
}
