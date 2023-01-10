import React from 'react';
import {Nest} from "../Nest.js"

const NestContainer = (props) => {
    return (
        <div className="nestContainer">
            <Nest Type={props.Type}/>
        </div>
    );
};

export default NestContainer;