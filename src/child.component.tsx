import React, { FunctionComponent, useContext } from 'react';
import { Button } from '@material-ui/core';
import {MyCommonContext } from './wrapper.component';

interface IChildProp {
    name: string
};

const ChildComponent: FunctionComponent<IChildProp> = (props: IChildProp) => {
    const {name} = props;
    const {showSpinner, hideSpinner} = useContext(MyCommonContext);

    const display = ()=>{
        if(!!showSpinner) showSpinner();
        console.log( `${name} show spinner`)
        window.setTimeout(()=>{if(!!hideSpinner) hideSpinner();}, 1000);
    }

    console.log(`dye -- Child Component ${name} render`)
    return (
        <div>
            <h2>{name}</h2>
            <Button variant="contained" onClick={display}>Show Spinner</Button>
        </div>
    )
}
export default ChildComponent;