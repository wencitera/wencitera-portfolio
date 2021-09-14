import React from 'react'
import { Button, makeStyles } from '@material-ui/core';
//import AccountTreeIcon from '@material-ui/icons/AccountTree';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BookIcon from '@material-ui/icons/Book';
const useStyles = makeStyles((theme) => ({
    navbar_nav: {
        position: "fixed",
        backgroundColor: theme.palette.primary.dark,
        overflow: "scroll",
        padding: 0,
        margin: 0,
        alignItems: "center",
        justifyContent: "center",
        '&::-webkit-scrollbar': {
            width: "0%",
        },
        [theme.breakpoints.down("md")]: {
            position: 'relative',
            flexDirection: "row",
            width: "100%",
            bottom: '0',
            display: "flex",
        },
        [theme.breakpoints.up("md")]: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
        }
    },
    button: {
        color: theme.palette.secondary.main,
    }
}));

export default function NavBar() {
    const classes = useStyles();
    return (
        <div className={`${classes.navbar}`}>
            <div className={classes.navbar_nav}>
                <Button href='/' className={classes.button}>
                    <HomeIcon fontSize="large" />
                </Button>
                <Button href='/sobremi' className={classes.button}>
                    <AccountBoxIcon fontSize="large" />
                </Button>
                <Button href='/conocimientos' className={classes.button}>
                    <BookIcon fontSize="large" />
                </Button>
                {/*<Button href='/proyectos' className={classes.button}>
                    <AccountTreeIcon fontSize="large" />
                </Button>*/}
                <Button href='/experiencia' className={classes.button}>
                    <WorkIcon fontSize="large" />
                </Button>
                <Button href='/contacto' className={classes.button}>
                    <MailIcon fontSize="large" />
                </Button>
            </div>
        </div>
    )
}
