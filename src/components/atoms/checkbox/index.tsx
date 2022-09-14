import React, {useState} from 'react';
import '../../../styles/atoms/checkbox/index.scss';

const Checkbox = ({ onChange }: CheckBoxProps) => {
    const [checked, setChecked] = useState(false);

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
    onChange: (e?: any) => void;
}
