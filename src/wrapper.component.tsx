import React, { createContext, FunctionComponent, ReactNode, useRef } from "react";
import { ISpinnerHandler, Spinner } from "./spinner.component"

export interface IMyCommonContext {
    showSpinner?: { (msg: string): void },
    hideSpinner?: { (): void }
}

export const MyCommonContext = createContext<IMyCommonContext>({ showSpinner: (msg: string) => 0, hideSpinner: () => 0 });

type WrapperProps = {
    children: ReactNode;
};


export const WrapperComponent: FunctionComponent<WrapperProps> = (props: WrapperProps) => {
    const backdropRef = useRef<ISpinnerHandler>({ showSpinner: (msg: string) => 0, hideSpinner: () => 0 });
    const showSpinner = (msg:string) => { 
        backdropRef.current?.showSpinner(msg); 
    };
    const hideSpinner = () => { 
        backdropRef.current?.hideSpinner(); 
    };

    return (
        <MyCommonContext.Provider value={{showSpinner, hideSpinner}}>
            {props.children}
            <Spinner ref={backdropRef}></Spinner>
        </MyCommonContext.Provider>
    )
}