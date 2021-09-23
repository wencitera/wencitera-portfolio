import React from 'react'
import { AppBar, IconButton } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
//import AccountTreeIcon from '@mui/icons-material/AccountTree';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';

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
            <IconButton href='/' label="Inicio" className={classes.button} size="large">
                <HomeIcon fontSize="large" />
            </IconButton>
            <IconButton href='/sobremi' className={classes.button} size="large">
                <AccountBoxIcon fontSize="large" />
            </IconButton>
            <IconButton href='/conocimientos' className={classes.button} size="large">
                <BookIcon fontSize="large" />
            </IconButton>
            {/*<IconButton href='/proyectos' className={classes.button}>
                <AccountTreeIcon fontSize="large" />
        </IconButton>*/}
            <IconButton href='/experiencia' className={classes.button} size="large">
                <WorkIcon fontSize="large" />
            </IconButton>
            <IconButton href='/contacto' className={classes.button} size="large">
                <MailIcon fontSize="large" />
            </IconButton>      
        </AppBar>
    );
}
