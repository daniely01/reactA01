import React, { useState, useImperativeHandle } from 'react';
import { Backdrop, CircularProgress, BackdropProps } from '@material-ui/core';

export interface MyBackdropHandle {
    changeState(state: boolean): void
};


export const MyBackdrop = React.forwardRef( 
    (props: BackdropProps, ref) => {
        const [spinnerOpen, setSpinnerOpen] = useState(props.open);
        useImperativeHandle(ref, () => { return { changeState: setSpinnerOpen } });
        return (
            <Backdrop open={spinnerOpen} >
                <CircularProgress color="inherit" />
            </Backdrop>
            )
        }
 );
    

