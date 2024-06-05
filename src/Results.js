import React from 'react';
import Meaning from './Meaning';
// import Phonetic from './Phonetic';

import './Results.css';

export default function Results(props) {
    function convertToUppercase() {
        let capitalized =
            props.results.word.charAt(0).toUpperCase() +
            props.results.word.slice(1);
        return ` ${capitalized}`;
    }
    if (props.results) {
        console.log(props.results.phonetics[0].text);
        return (
            <div className='Results'>
                <h2 className='Keyword'>{convertToUppercase()}</h2>

                <h3>{props.results.phonetics[0].text}</h3>
                <p>
                    <audio
                        controls
                        src={props.results.phonetics[0].audio}
                    ></audio>
                </p>
                <p>
                    {props.results.meanings.map(function (meaning, index) {
                        return (
                            <div key={index}>
                                <Meaning meaning={meaning} />
                            </div>
                        );
                    })}
                </p>
            </div>
        );
    } else {
        return null;
    }
}
