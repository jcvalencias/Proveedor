import React from "react";


const Options = ({list}) => {
    return (
        <>
        {list.map(item => (<option value={item}>{item}</option>))}
        </>
    );
}

export default Options;