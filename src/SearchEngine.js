import React, { useState } from 'react';
import './SearchEngine.css';
import axios from 'axios';
import Results from './Results';

export default function SearchEngine() {
    let [keyword, setKeyword] = useState('');
    const [results, setResults] = useState(null);

    function displayDictionary(response) {
        setResults(response.data[0]);
        console.log(response.data[0].phonetics);
        // console.log(results.phonetics);
    }

    function searchKeyword(event) {
        event.preventDefault();

        // let apiKey = 'fa90t5bf5523344e459f280fabbb9o83';
        let word = keyword;
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
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
            {/* <h2 className='Keyword'>{convertToUppercase()}</h2> */}
            <Results results={results} />
        </div>
    );
}
