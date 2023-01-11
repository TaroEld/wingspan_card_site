import React from 'react';
import {Nest} from "../Nest.js"
import "./NestContainer.css"

const NestContainer = (props) => {
    return (
        <div className="nestContainer">
            <Nest Type={props.Type}/>
        </div>
    );
};

export default NestContainer;