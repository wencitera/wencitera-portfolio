import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from '@mui/material';
import { SiLinkedin } from 'react-icons/si';
import { AiFillSafetyCertificate, AiOutlineGlobal } from 'react-icons/ai'

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
    inicio: "Junio de 2022",
    fin: "Febrero de 2023",
    empresa: "Applica Mobile",
    cargo: "App Web Developer JS/CSS/HTML, VB, Oracle/MySQL/SQLServer Integration Services, Crystal Report, Automatización de Procesos",
    linkedin: "https://www.linkedin.com/company/applica-mobile-ar/",
  },
  {
    inicio: "Mayo de 2021",
    fin: "Mayo de 2022",
    empresa: "IT Estudio",
    cargo: "App Web Developer, React - C#/VB .Net SQL Server y uso de ORM",
    linkedin: "https://www.linkedin.com/company/itestudio/about/",
  }
  
]

const estudios = [
  {
    inicio: "Marzo de 2019",
    fin: "Febrero de 2021",
    titulo: "Técnico Universitario en Programación",
    institucion: "Universidad Tecnológica Nacional F.R.P",
    link: "https://www.frp.utn.edu.ar/info2/?page_id=6235",
    cert: "https://drive.google.com/file/d/1-ID92_rIOS0G49lzEjD9w7PYqJlju4Qk/view"
  },
  {
    inicio: "Febrero de 2023",
    fin: "Febrero de 2023",
    titulo: "Desarrollo de APIs .NET",
    institucion: "OpenBootcamp",
    link: "https://campus.open-bootcamp.com/",
    cert: "https://community.open-bootcamp.com/user/wencitera/certificaciones/efb5763d-0983-487b-8f63-fc481a5cd814"
  },
  
]

/* const proyectos = [
  {
    titulo: "Guadalupe Abreu PH",
    descripcion: "Portafolio personal para oficio de fotografía",
    link: "https://gaph.netlify.app"
  }
] */

export default function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="flex-start" spacing={4}>
        <Grid item xs>
          <Typography className={classes.title}><u>Experiencia</u></Typography>
          {experiencia.map((item) => (
            <>
              <Typography className={classes.title}>
                • {item.empresa} <i>({item.inicio} - {item.fin})</i>
                <a href={item.linkedin} target="_blank" rel="noreferrer" className={classes.link}> <SiLinkedin className={classes.icon} /></a>
              </Typography>
              <Typography className={classes.body}>{item.cargo}</Typography>
              <br />
            </>
          ))}
        </Grid>
        <br />
        <Grid item xs>
          <Typography className={classes.title}><u>Estudios</u></Typography>
          {estudios.map((item) => (
            <>
              <Typography className={classes.title}>
                • {item.titulo}<br /><i>({item.inicio} - {item.fin})</i>
                <a href={item.link} target="_blank" rel="noreferrer" className={classes.link}> <AiOutlineGlobal className={classes.icon} />  </a>
                <a href={item.cert} target="_blank" rel="noreferrer" className={classes.link}> <AiFillSafetyCertificate className={classes.icon} />  </a>
              </Typography>
              <Typography className={classes.body}>En {item.institucion}</Typography>
              <br />
            </>
          ))}
        </Grid>
        {/* <Grid item xs>
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
        </Grid> */}
      </Grid>
    </div>
  );
}
