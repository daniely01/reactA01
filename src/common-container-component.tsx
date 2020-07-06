import React, { createContext, FunctionComponent, ReactNode, useRef } from "react";
import {MyBackdropHandle, MyBackdrop} from "./backdrop-component"

export interface IMyCommonContext {
    showSpinner(): void,
    hideSpinner(): void
}

export const MyCommonContext = createContext<IMyCommonContext>({ showSpinner: () => 0, hideSpinner: () => 0 });

type SpinnerProps = {
    children: ReactNode;
};


export const MyCommonContainer: FunctionComponent<SpinnerProps> = (props: SpinnerProps) => {
    const initBackdropHandle: MyBackdropHandle  = {
        changeState: (state: boolean)=>0
    }

    const backdropRef = useRef<MyBackdropHandle>(initBackdropHandle);
    const showSpinner = ()=>{console.log("showSpinner"); backdropRef.current?.changeState(true);};
    const hideSpinner = ()=>{console.log("hideSpinner"); backdropRef.current?.changeState(false);};
    return (
        <MyCommonContext.Provider value={{ showSpinner, hideSpinner }}>
            {props.children}
            <MyBackdrop ref={backdropRef}></MyBackdrop>
        </MyCommonContext.Provider>
    )
}