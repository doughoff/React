import React, { Component, useState } from "react";
import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    DialogTitle,
} from "@material-ui/core";

function DialogTest() {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        console.log("handleClose");
        setOpen(false);
    };
    const handleClickOpen = () => {
        console.log("handleClickOpen");
        setOpen(true);
    };
    return (
        <>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open alert dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending
                        anonymous location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>);
}



class App extends Component {
    render() {
        return (
            <DialogTest />
        );
    }
}
export default App;
