import React, { createContext, FunctionComponent, ReactNode, useRef } from "react";
import { ISpinnerHandler, Spinner } from "./spinner.component"

export const MyCommonContext = createContext<ISpinnerHandler>({ showSpinner: () => 0, hideSpinner: () => 0 });

export const WrapperComponent: FunctionComponent = (props) => {
    const {children} = props;
    const backdropRef = useRef<ISpinnerHandler>({ showSpinner: () => 0, hideSpinner: () => 0 });
    const showSpinner = () => { 
        backdropRef.current.showSpinner(); 
    };
    const hideSpinner = () => { 
        backdropRef.current.hideSpinner(); 
    };

    return (
        <MyCommonContext.Provider value={{showSpinner, hideSpinner}}>
            {children}
            <Spinner ref={backdropRef}></Spinner>
        </MyCommonContext.Provider>
    )
}