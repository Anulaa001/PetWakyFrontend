import React from 'react';
import './Loading.css';
export default function Loading() {
    return (
        <div className="loading-box">
            <i class="fa fa-circle-o-notch fa-spin" ></i>
            <p>Loading...</p>
        </div>
    )
}