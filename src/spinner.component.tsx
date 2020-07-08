import React, { useState, useImperativeHandle } from 'react';
import { CircularProgress, makeStyles, Box, Paper, Typography } from '@material-ui/core';
import clsx from 'clsx';

export interface ISpinnerHandler {
    showSpinner(message: string): void,
    hideSpinner(): void
};

const useStyles = makeStyles({
    hide: {
        display: "none",
    },
    loader: {
        display: "flex",
        flexDirection: "column",
        flex: "1 0 auto"
    },
    loaderIndicator: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.288)",
        zIndex: 15000
    },
    loaderFullscreen: {
        width: "100%",
        height: "100%",
        right: 0,
        bottom: 0,
        zIndex: 1000000
    },
    loaderImage: {
        width: "120px",
        height: "150px",
        alignSelf: "center",
        position: "relative",
        margin: "0 auto"
    },
    paper: {
        padding: "10px",
        minWidth: 200,
    },
    message: {
        textAlign: "center"
    }
})

const SpinnerFunc = (props: any, ref: any) => {
    const classes = useStyles();
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");
    const showSpinner = (msg: string): void => {
        setMessage(msg);
        setVisible(true);
    };
    const hideSpinner = (): void => { setVisible(false); };
    useImperativeHandle(ref, () => { return { showSpinner, hideSpinner } });
    
    return (
        <Box className={clsx( { [classes.loader]: visible }, { [classes.hide] : !visible} ) }>
            <Box className={clsx(classes.loaderIndicator, classes.loaderFullscreen)}>
                <Paper className={classes.paper} >
                    <Box className={classes.loaderImage}>
                        <CircularProgress size={130} thickness={5} />
                    </Box>
                    <Box className={classes.message}>
                        <Typography>{(message ? message : 'Loading') + '...'}</Typography>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
};


export const Spinner = React.forwardRef(SpinnerFunc);
