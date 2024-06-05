import React from 'react';
import Synonyms from './Synonyms';

import './Meaning.css';
export default function Meaning(props) {
    console.log(props.meaning.definitions);
    return (
        <div className=' Meaning'>
            <span>
                <h3>
                    ({props.meaning.partOfSpeech}) {''}
                </h3>
                {props.meaning.definitions.map(function (definition, index) {
                    return (
                        <div key={index}>
                            <p>
                                <strong>Definition:</strong>
                                {definition.definition}
                                <br />
                                <em>Example:{definition.example}</em>
                                <Synonyms synonyms={definition.synonyms} />
                            </p>
                        </div>
                    );
                })}
            </span>
        </div>
    );
}
