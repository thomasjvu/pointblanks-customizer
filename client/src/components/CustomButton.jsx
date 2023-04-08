import React from "react";

const CustomButton = ({ type, title, customStyles, handleClick }) => {

    const generateStyle = (type) => {
        if (type === "filled") {
            return {
                backgroundColor: "#f8f8ff",
                color: "#000",
            };
        } else if (type === 'outlined') {
            return {
                borderWidth: '1px',
                borderColor: '#fff',
                color: "#fff"
            }
        }
    };
    return (
        <button
            className={`px-2 py-1.5 flex-1 rounded-md ${customStyles} uppercase`}
            style={generateStyle(type)}
            onClick={handleClick}
        >
            {title}
        </button>
    );
};

export default CustomButton;
