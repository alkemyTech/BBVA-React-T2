import { useState } from "react";
import './FormInput.css'

const FormInput = ({ errorMessage, onChange, ...inputProps }) => {

    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => setFocused(true);

    return (
        <div className="formInput">
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                required
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;