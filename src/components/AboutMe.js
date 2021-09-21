import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ProfilePicture from '../assets/IMG_0099.JPG'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        height: "100vh",
        padding: "1rem",
        alignItems: "center",
        marginLeft: "8rem",
        [theme.breakpoints.down('md')]: {
            marginLeft: "1rem",
        },
    },
    title: {
        color: theme.palette.secondary.main,
        fontSize: "5rem",
        fontFamily: 'Azeret Mono, monospace',
        [theme.breakpoints.down('md')]: {
            fontSize: "1.8rem",
            textAlign: "center"
        },
    },
    textbody: {
        maxWidth: 1200,
        color: theme.palette.secondary.light,
        fontSize: "1.3rem",
        textAlign: "justify",
        [theme.breakpoints.down('md')]: {
            textAlign: "left",
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
                    <Grid container direction="column" noWrap>
                        <Grid item xs>
                            <Typography className={classes.title}><b>Wenceslao Ariel Citera</b></Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography className={classes.textbody}>
                                Bienvenido a mi porftolio, mi nombre es Wenceslao y soy desarrollador back-end y front-end.<br/>
                                Me apasiona mucho la programación ya que a mi parecer hoy en día todos podemos programar pero nos diferenciamos
                                en la calidad de nuestro código, entendiendo cómo funciona, respetando las bases de la Programacion Orientada a Objetos, 
                                realizando la abstracción de la realidad, planteando una planificación para luego resolver el problema. <br/>
                                Me siento más cómodo desarrollando back-end,fuerte del lado de la lógica y estoy instruyendome de forma autodidacta del lado del front-end
                                ya que creo no tener una facilidad para comprender la ergonomía del usuario pero aún así me esfuerzo a diario para poder considerarme full-stack.<br/>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}