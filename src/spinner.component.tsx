import React, { useState, useImperativeHandle } from 'react';
import { CircularProgress, makeStyles, Box, Paper, Typography } from '@material-ui/core';
import clsx from 'clsx';

export interface ISpinnerHandler {
    showSpinner(): void,
    hideSpinner(): void
};

const useStyles = makeStyles({
    hide: {
        display: "none",
    },
    loader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "0",
        left: "0",
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.288)",
        zIndex: 1000000
    }
})

const SpinnerFunc = (props: any, ref: any) => {
    const classes = useStyles();
    const [visible, setVisible] = useState(false);
    const showSpinner = (): void => { setVisible(true); };
    const hideSpinner = (): void => { setVisible(false); };
    useImperativeHandle(ref, () => { return { showSpinner, hideSpinner } });

    return (
        <Box className={clsx({ [classes.loader]: visible }, { [classes.hide]: !visible })}>
            <CircularProgress size={130} thickness={5} />
        </Box>
    )
};

export const Spinner = React.forwardRef(SpinnerFunc);
