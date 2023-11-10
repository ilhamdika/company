import { forwardRef, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';

// TextInput.propTypes = {
//     type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'url', 'file']),
//     name: PropTypes.string,
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     className: PropTypes.string,
//     autoComplete: PropTypes.string,
//     isFocused: PropTypes.bool,
//     required: PropTypes.bool,
//     handleChange: PropTypes.func,
//     placeholder: PropTypes.string,
//     isErrored: PropTypes.bool,
// }


export default function TextInput ({
    type = 'text', 
    name, 
    id, 
    value,
    defaultValue,
    className,
    variant = "primary",
    autoComplete, 
    required, 
    isFocused, 
    handleChange,
    placeholder,
    isError,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                defaultValue={defaultValue}
                className={
                    'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e)=>handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
};
