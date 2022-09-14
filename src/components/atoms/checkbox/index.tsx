import React, {useState} from 'react';
import '../../../styles/atoms/checkbox/index.scss';

const Checkbox = ({ onChange, value, id }: CheckBoxProps) => {
    const [checked, setChecked] = useState(value);

    const toggleChecking = () => {
        setChecked(!checked);
        onChange(id, !checked);
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
    id: number,
    value: boolean,
    onChange: (id: number, v: boolean) => void;
}
