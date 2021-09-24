import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from '@mui/material';
import { SiLinkedin } from 'react-icons/si';
import { AiOutlineGlobal } from 'react-icons/ai'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "90vh",
    margin: "1rem",
    [theme.breakpoints.up('sm')]: {
      margin: 0,
      marginLeft: "5rem",
      marginTop: "5rem",

    }
  },
  title: {
    color: theme.palette.secondary.main,
    fontFamily: 'Azeret Mono, monospace',
    fontSize: "1.3rem",
    [theme.breakpoints.up('sm')]: {
      fontSize: "2.2rem",
    }
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
  },
  icon: {
    verticalAlign: 'text-bottom'
  },
  body: {
    fontSize: "1.3rem",
    fontFamily: 'Azeret Mono, monospace',
    color: theme.palette.secondary.main
  }
}));

const experiencia = [
  {
    inicio: "Julio de 2021",
    fin: "Actualidad",
    empresa: "IT Estudio",
    cargo: "Desarrollador Backend con .NET C#",
    linkedin: "https://www.linkedin.com/company/itestudio/about/",
  },
]

const estudios = [
  {
    inicio: "Marzo de 2019",
    fin: "Febrero de 2021",
    titulo: "Técnico Universitario en Programación",
    institucion: "Universidad Tecnológica Nacional F.R.P",
    link: "https://www.frp.utn.edu.ar/info2/?page_id=6235"
  }
]

const proyectos = [
  {
    titulo: "Guadalupe Abreu PH",
    descripcion: "Portafolio personal para oficio de fotografía",
    link: "https://gaph.netlify.app"
  }
]

export default function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" justifyContent="space-between" alignItems="flex-start" spacing={4}>
        <Grid item xs>
          <Typography className={classes.title}><u>Experiencia</u></Typography>
          {experiencia.map((item) => (
            <>
              <Typography className={classes.title}>
                • {item.empresa} <i>({item.inicio} - {item.fin})</i>
                <a href={item.linkedin} target="_blank" rel="noreferrer" className={classes.link}> <SiLinkedin className={classes.icon} /></a>
              </Typography>
              <Typography className={classes.body}>{item.cargo}</Typography>
            </>
          ))}
        </Grid>
        <Grid item xs>
          <Typography className={classes.title}><u>Estudios</u></Typography>
          {estudios.map((item) => (
            <>
              <Typography className={classes.title}>
                • {item.titulo}<br /><i>({item.inicio} - {item.fin})</i>
                <a href={item.link} target="_blank" rel="noreferrer" className={classes.link}> <AiOutlineGlobal className={classes.icon} /></a>
              </Typography>
              <Typography className={classes.body}>En {item.institucion}</Typography>
            </>
          ))}
        </Grid>
        <Grid item xs>
          <Typography className={classes.title}><u>Proyectos</u></Typography>
          {proyectos.map((item) => (
            <>
              <Typography className={classes.title}>
                • {item.titulo}
                <a href={item.link} target="_blank" rel="noreferrer" className={classes.link}> <AiOutlineGlobal className={classes.icon} /></a>
              </Typography>
              <Typography className={classes.body}>{item.descripcion}</Typography>
            </>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
