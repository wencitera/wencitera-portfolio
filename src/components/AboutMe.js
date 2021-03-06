import { Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react'
import ProfilePicture from '../assets/IMG_0099.JPG'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        height: "100vh",
        padding: "1rem",
        alignItems: "center",
        marginLeft: "8rem",
        [theme.breakpoints.down('lg')]: {
            marginLeft: "1rem",
        },
    },
    title: {
        color: theme.palette.secondary.main,
        fontSize: "5rem",
        fontFamily: 'Azeret Mono, monospace',
        [theme.breakpoints.down('lg')]: {
            fontSize: "1.8rem",
            textAlign: "center"
        },
    },
    textbody: {
        maxWidth: 900,
        color: theme.palette.secondary.light,
        fontSize: "1.3rem",
        textAlign: "justify",
        marginBottom: "70px",
        [theme.breakpoints.down('lg')]: {
            fontSize: "1rem",
            textAlign: "justify",
        },
    },
    image: {
        padding: '2vw',
        width: "100%",
        height: "auto",
        borderRadius: "25% 10%",
    }
}))

export default function AboutMe() {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.root} direction="row" alignItems="center" justifyContent="center">
                <Grid item md={4} xs={12}>
                    <img className={classes.image} src={ProfilePicture} alt="W. A. Citera"/>
                </Grid>
                <Grid item md xs>
                    <Grid container direction="column">
                        <Grid item xs>
                            <Typography className={classes.title}><b>Wenceslao Ariel Citera</b></Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography className={classes.textbody}>
                                Bienvenido a mi portafolio, mi nombre es Wenceslao y soy desarrollador back-end y front-end.<br/>
                                Me apasiona mucho la programaci??n ya que a mi parecer hoy en d??a todos podemos programar pero nos diferenciamos
                                en la calidad de nuestro c??digo, entendiendo c??mo funciona, respetando las bases de la Programacion Orientada a Objetos, 
                                realizando la abstracci??n de la realidad, planteando una planificaci??n para luego resolver el problema. <br/>
                                Me siento m??s c??modo desarrollando back-end, fuerte del lado de la l??gica y estoy instruyendome de forma autodidacta del lado del front-end
                                ya que creo no tener una facilidad para comprender la ergonom??a del usuario pero a??n as?? me esfuerzo a diario para poder considerarme full-stack.<br/>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}