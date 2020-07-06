import React, { createContext, ReactNode, useState, useImperativeHandle, useRef, FunctionComponent, RefForwardingComponent, forwardRef } from 'react';
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

const MyBackdropComponent = forwardRef(BackdropComponent);

export const SpinnerComponent: FunctionComponent<SpinnerProps> = (props: SpinnerProps) => {
    const { children } = props;
    const backdropRef = useRef<BackdropHandle>(null);
    const showSpinner = ()=>{console.log("showSpinner"); backdropRef.current?.changeState(true);};
    const hideSpinner = ()=>{console.log("hideSpinner"); backdropRef.current?.changeState(false);};

    return (
        <SpinnerContext.Provider value={{ showSpinner, hideSpinner }}>
            {children}
            <MyBackdropComponent ref={backdropRef} open={false}></MyBackdropComponent>
        </SpinnerContext.Provider>
    )
}