import React, { useState } from 'react';
import './SearchEngine.css';
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';

export default function SearchEngine(props) {
    let [keyword, setKeyword] = useState('');
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function displayDictionary(response) {
        setResults(response.data[0]);
        // console.log(response.data[0].phonetics);
        // console.log(results.phonetics);
    }

    function displayPexelPhotos(response) {
        setPhotos(response.data.photos);
        console.log(response.data);
    }

    function searchKeyword(event) {
        event.preventDefault();

        // let apiKey = 'fa90t5bf5523344e459f280fabbb9o83';
        let word = keyword;
        let dIctionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(dIctionaryApiUrl).then(displayDictionary);

        let pexelsApiKey =
            'Dh6PJi78R90zewJ5xFGLVj2K75v0QoPLj26WlMhKHltOFGDB8HDc8aIY';
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
        console.log(pexelsApiUrl);
        let headers = { Authorization: `${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(displayPexelPhotos);
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
            <Photos photos={photos} />
        </div>
    );
}
