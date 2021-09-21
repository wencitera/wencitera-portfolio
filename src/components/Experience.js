import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { SiLinkedin } from 'react-icons/si';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "1rem",
    [theme.breakpoints.up('sm')]:{
      marginLeft: "5rem",
    }
  },
  title: {
    color: theme.palette.secondary.main,
    fontFamily: 'Azeret Mono, monospace',
    fontSize: "1.3rem",
    [theme.breakpoints.up('sm')]:{
      fontSize: "2.2rem",
    }
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
  },
  icon: {
    verticalAlign: 'text-bottom'
  }
}));

const experiencia = [
  {
    inicio: "Julio de 2021",
    fin: "Actualidad",
    empresa: "IT Estudio",
    linkedin: "https://www.linkedin.com/company/itestudio/about/",
  },
]

export default function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}><u>Experiencia</u></Typography>
      <br />
      {experiencia.map((item) => (
        <Typography className={classes.title}>
          • {item.empresa} <i>({item.inicio} - {item.fin})</i> 
          <a href={item.linkedin} target="_blank" rel="noreferrer" className={classes.link}> <SiLinkedin className={classes.icon} /></a>
        </Typography>
      ))}
    </div>
  );
}
