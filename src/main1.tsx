import React, { FunctionComponent, useContext } from 'react';
import { Button } from '@material-ui/core';
import {MyCommonContext } from './common-container-component';

const Main1Component: FunctionComponent = () => {
    const {showSpinner, hideSpinner} = useContext(MyCommonContext);

    const display = ()=>{
        showSpinner();
        console.log("Test1 window setTimeout")
        window.setTimeout(()=>{hideSpinner();}, 1000);
    }

    console.log("Test1 render;")
    return (
        <div>
            <h1>Test 1</h1>
            <Button onClick={display}>Show Spinner</Button>
        </div>
    )
}
export default Main1Component;