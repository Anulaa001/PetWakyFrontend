import React from 'react';
import './Error.css';
export default function Error(props) {
    return (
        <div className="error-box">
        <i class="fa fa-warning"></i>
        <div className={`alert alert-${props.variant || 'Błąd'} `}>
            {props.children}
        </div></div>
    )
}