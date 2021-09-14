import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
//import ProfilePicture from '../assets/Profile.png'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        height: "100vh",
        padding: "1rem",
        [theme.breakpoints.up('md')]: {
            marginLeft: "8rem",
        },
    },
    title:{
        fontFamily: 'Open-sans, sans-serif',
        color: theme.palette.secondary.main,
        [theme.breakpoints.up('md')]: {
            fontSize: "6rem",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "3rem",
        },
    },
    typewriter: {
        color: theme.palette.secondary.dark,
        fontFamily: 'Azeret Mono, monospace',
        overflow: "hidden",
        borderRight: `.15em solid ${theme.palette.secondary.dark}`,
        whiteSpace: "nowrap",
        margin: "0 auto",
        letterSpacing: "0.15em",
        animation: `$typing 2.5s steps(20, end), $blink-caret 0.75s step-end infinite`,
        [theme.breakpoints.up('md')]: {
            fontSize: "2rem",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "1rem",
        },
    },

    "@keyframes typing": {
        "from": {
            width: 0
        },
        "to": {
            width: "100%"
        },
    },

    "@keyframes blink-caret": {
        "from to": { borderColor: "transparent" },
        "50%": { borderColor: theme.palette.secondary.main }
    },
    
    "@keyframes untyping": {
        "from": {
            width: "100%"
        },
        "to": {
            width: 0
        },
    }
}))

export default function Home() {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container direction="column" alignItems="flex-start" justifyContent="flex-start">
            <Grid item xs className={classes.background_image}>
                {/*<img className={classes.image} src={ProfilePicture} alt="Foto perfil"/>*/}
            </Grid>
            <Grid item xs>
                <Grid container direction="row" className={classes.container}>
                    <Grid item xs={12}>
                        <Typography className={classes.title}>Hola, soy Wenceslao!</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.typewriter}>Y soy Developer!</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>

            </Grid>
        </Grid>
    )
}
