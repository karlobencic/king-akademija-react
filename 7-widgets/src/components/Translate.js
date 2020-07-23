import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react'
import Convert from './Convert';

const options = [
    { key: 'ru', value: 'ru', flag: 'ru', text: 'Russian' },
    { key: 'in', value: 'in', flag: 'in', text: 'Indian' },
    { key: 'hr', value: 'hr', flag: 'hr', text: 'Croatian' },
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                placeholder='Select a language'
                fluid
                search
                selection
                options={options}
                onChange={(e, result) => setLanguage(result)}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;
