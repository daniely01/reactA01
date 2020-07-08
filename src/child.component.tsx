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
        if(!!showSpinner) showSpinner(`From ${name}`);
        console.log( `${name} show spinner`)
        window.setTimeout(()=>{if(!!hideSpinner) hideSpinner();}, 1000);
    }

    console.log(`${name} render`)
    return (
        <div>
            <h1>{name}</h1>
            <Button onClick={display}>Show Spinner</Button>
        </div>
    )
}
export default ChildComponent;