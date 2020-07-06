import React, { useState, useImperativeHandle } from 'react';
import { Backdrop, CircularProgress, BackdropProps } from '@material-ui/core';

export interface MyBackdropHandle {
    changeState(state: boolean): void
};


export const MyBackdrop = React.forwardRef( 
    (props: any, ref: any) => {
        const [spinnerOpen, setSpinnerOpen] = useState(false);
        useImperativeHandle(ref, () => { return { changeState: setSpinnerOpen } });
        return (
            <Backdrop open={spinnerOpen} >
                <CircularProgress color="inherit" />
            </Backdrop>
            )
        }
 );
    

