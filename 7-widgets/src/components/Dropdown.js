import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ label, options, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const [selected, setSelected] = useState({ value: '', label: '' });

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => {
                    setSelected(option)
                    onSelectedChange(option)
                }}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;

Dropdown.defaultProps = {
    options: [
        {
            label: 'The color red',
            value: 'red'
        },
        {
            label: 'The color green',
            value: 'green'
        },
        {
            label: 'A shade of blue',
            value: 'blue'
        }
    ],
    onSelectedChange: () => undefined
}
