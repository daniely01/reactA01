import React, { createContext, ReactNode, useState, useImperativeHandle, useRef, FunctionComponent, RefForwardingComponent, RefObject } from 'react';
import { Backdrop, CircularProgress, BackdropProps } from '@material-ui/core';

export interface ISpinnerContext {
    showSpinner(): void,
    hideSpinner(): void
}

export const SpinnerContext = createContext<ISpinnerContext>({ showSpinner: () => 0, hideSpinner: () => 0 });

type SpinnerProps = {
    children: ReactNode;
};

interface BackdropHandle {    
    changeState(state: boolean):void
};

const BackdropComponent: RefForwardingComponent<BackdropHandle, BackdropProps> = (props, ref) => {
    const [spinnerOpen, setSpinnerOpen] = useState(props.open);
    useImperativeHandle(ref, ()=>{return {changeState: setSpinnerOpen}});    
    return (
        <Backdrop open={spinnerOpen} >
            <CircularProgress color="inherit" />
        </Backdrop>    )
};

export const SpinnerComponent: FunctionComponent<SpinnerProps> = (props: SpinnerProps) => {
    const { children } = props;
    const backdropRef = useRef<BackdropHandle>(null);
    const showSpinner = ()=>{backdropRef.current?.changeState(true);};
    const hideSpinner = ()=>{backdropRef.current?.changeState(false);};


    return (
        <SpinnerContext.Provider value={{ showSpinner, hideSpinner }}>
            {children}
            <BackdropComponent ref={backdropRef} open={false}></BackdropComponent>
        </SpinnerContext.Provider>
    )
}