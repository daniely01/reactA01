import React, { FunctionComponent, useContext } from 'react';
import { Button } from '@material-ui/core';
import {MyCommonContext } from './wrapper.component';

const ChildComponent: FunctionComponent = () => {
    const {showSpinner, hideSpinner} = useContext(MyCommonContext);

    const display = ()=>{
        if(!!showSpinner) showSpinner("test test");
        console.log("Test1 window setTimeout")
        window.setTimeout(()=>{if(!!hideSpinner) hideSpinner();}, 1000);
    }

    console.log("Test1 render;")
    return (
        <div>
            <h1>Test 1</h1>
            <Button onClick={display}>Show Spinner</Button>
        </div>
    )
}
export default ChildComponent;