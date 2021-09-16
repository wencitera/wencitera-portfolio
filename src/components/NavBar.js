import React from 'react'
import { AppBar, IconButton, makeStyles } from '@material-ui/core';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 'none',
        backgroundColor: theme.palette.primary.dark,
        [theme.breakpoints.up("md")]: {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: 50,
            left: 0
        }
    },
    button: {
        color: theme.palette.secondary.main,
    }
}));


export default function NavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <AppBar
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            className={classes.appBar}
        >
            <IconButton href='/' label="Inicio" className={classes.button}>
                <HomeIcon fontSize="large" />
            </IconButton>
            <IconButton href='/sobremi' className={classes.button}>
                <AccountBoxIcon fontSize="large" />
            </IconButton>
            <IconButton href='/conocimientos' className={classes.button}>
                <BookIcon fontSize="large" />
            </IconButton>
            <IconButton href='/proyectos' className={classes.button}>
                <AccountTreeIcon fontSize="large" />
            </IconButton>
            <IconButton href='/experiencia' className={classes.button}>
                <WorkIcon fontSize="large" />
            </IconButton>
            <IconButton href='/contacto' className={classes.button}>
                <MailIcon fontSize="large" />
            </IconButton>      
        </AppBar>
    )
}
