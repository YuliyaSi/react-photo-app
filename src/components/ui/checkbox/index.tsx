import React from 'react';
import '../../../styles/checkbox/index.scss';

const Checkbox = ({name, value, onChange}: CheckBoxProps) => {
    return (
        <label className="checkbox__label">
            <input
                type="checkbox"
                name={name}
                checked={value}
                onChange={onChange}
                className="checkbox__input"
            />
            <span className="checkbox__checkmark"></span>
        </label>
    );
}

export default Checkbox;

interface CheckBoxProps {
    name?: string,
    value?: boolean,
    onChange?: (e?: any) => void;
}
