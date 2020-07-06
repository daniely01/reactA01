import React, { useState, useImperativeHandle, RefForwardingComponent, forwardRef } from 'react';
import { Backdrop, CircularProgress, BackdropProps } from '@material-ui/core';

export interface MyBackdropHandle {
    changeState(state: boolean): void
};

const MyBackdropComponent: RefForwardingComponent<MyBackdropHandle, BackdropProps> = (props, ref) => {
    const [spinnerOpen, setSpinnerOpen] = useState(props.open);
    useImperativeHandle(ref, () => { return { changeState: setSpinnerOpen } });
    return (
        <Backdrop open={spinnerOpen} >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
};

export const MyBackdrop = forwardRef(MyBackdropComponent);

