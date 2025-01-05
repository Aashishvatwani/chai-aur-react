
import React, { useId } from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(function Input(
    { label, type = "text", className = "", ...props },
    ref
) {
    const id = useId();

    return (
        <div className="w-full">
            {label && (
                <label className="block mb-1" htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                {...props}
            />
        </div>
    );
});

// Define PropTypes for better validation
Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    props: PropTypes.object,
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

// Set default props for better fallback behavior
Input.defaultProps = {
    label: "",
    type: "text",
    className: "",
};

export default Input;
