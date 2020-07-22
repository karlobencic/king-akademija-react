import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import TabEnum from './TabEnum';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework',
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers',
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components',
    },
];

const showAccordion = (tab) => {
    if (tab === TabEnum.ACCORDION) {
        return <Accordion items={items} />;
    }
};

const showDropdown = (tab) => {
    if (tab === TabEnum.DROPDOWN) {
        return <Dropdown label={"Dropdown"} />;
    }
};

const showWiki = (tab) => {
    if (tab === TabEnum.WIKI) {
        return <Search />;
    }
};

const showTranslate = (tab) => {
    if (tab === TabEnum.TRANSLATE) {
        return <Translate />;
    }
};

export default () => {
    const [tab, setTab] = useState(TabEnum.ACCORDION)

    return (
        <div className="ui container">
            <div className="ui buttons">
                <button className="ui button large" onClick={() => setTab(TabEnum.ACCORDION)}>ACCORDION</button>
                <button className="ui button large" onClick={() => setTab(TabEnum.DROPDOWN)}>DROPDOWN</button>
                <button className="ui button large" onClick={() => setTab(TabEnum.TRANSLATE)}>TRANSLATE</button>
                <button className="ui button large" onClick={() => setTab(TabEnum.WIKI)}>WIKI</button>
            </div>
            {showAccordion(tab)}
            {showWiki(tab)}
            {showDropdown(tab)}
            {showTranslate(tab)}
        </div>
    );
};
