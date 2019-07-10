import React from 'react';

// import { Container } from './styles';

function Button({ disabled, children, onClick, type }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
}

export default Button