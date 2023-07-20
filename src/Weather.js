import React from "react";
import "./Weather.css";
import { WiHot } from 'react-icons/wi';

export default function Weather() {
    return (
        <div className="Weather">
            <h1>Portland</h1>
            <ul>
                <li>Thursday 10:00</li>
                <li>Sunny</li>
            </ul>
            <div className="row">
                <div className="col-6">
                <WiHot />
                </div>
            </div>
        </div>
    );
}