import React from 'react';
import Meaning from './Meaning';

import './Results.css';

export default function Results(props) {
    console.log(props.results);
    // let phonetic = props.results.phonetics[0];

    function convertToUppercase() {
        let capitalized =
            props.results.word.charAt(0).toUpperCase() +
            props.results.word.slice(1);
        return ` ${capitalized}`;
    }
    if (props.results) {
        return (
            <div className='Results'>
                <h2 className='Keyword'>{convertToUppercase()}</h2>
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
