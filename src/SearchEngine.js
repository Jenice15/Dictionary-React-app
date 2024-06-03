import React, { useState } from 'react';
import './SearchEngine.css';
import axios from 'axios';

export default function SearchEngine() {
    const [keyword, setKeyword] = useState('');
    // const [wordMeaning, setWordMeaning] = useState('');

    function displayDictionary(response) {
        // setWordMeaning(response.data);
        console.log(response);
    }

    function searchKeyword(event) {
        event.preventDefault();
        alert(`searching for ${keyword}.`);

        let apiKey = 'fa90t5bf5523344e459f280fabbb9o83';
        let word = keyword;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
        axios.get(apiUrl).then(displayDictionary);
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
