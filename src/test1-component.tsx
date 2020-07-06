import React, { FunctionComponent, useContext } from 'react';
import { Button } from '@material-ui/core';
import {SpinnerContext } from './spinner-component';

const Test1Component: FunctionComponent = () => {
    const {showSpinner, hideSpinner} = useContext(SpinnerContext);

    const display = ()=>{
        showSpinner();
        console.log("Test1 window setTimeout")
        window.setTimeout(()=>{hideSpinner();}, 3000);
    }

    console.log("Test1 render;")
    return (
        <div>
            <h1>Test 1</h1>
            <Button onClick={display}>Show Spinner</Button>
        </div>
    )
}
export default Test1Component;