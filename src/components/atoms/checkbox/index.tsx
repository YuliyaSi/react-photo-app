import React, {useState} from 'react';
import '../../../styles/atoms/checkbox/index.scss';

const Checkbox = ({ onChange, value }: CheckBoxProps) => {
    const [checked, setChecked] = useState(value);

    const toggleChecking = () => {
        setChecked(!checked);
        onChange(!checked);
    }

    return (
        <label className="checkbox__label">
            <input
                type="checkbox"
                checked={checked}
                onChange={toggleChecking}
                className="checkbox__input"
            />
            <span className="checkbox__checkmark"></span>
        </label>
    );
}

export default Checkbox;

interface CheckBoxProps {
    value: boolean,
    onChange: (e?: any) => void;
}
