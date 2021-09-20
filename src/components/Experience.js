import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "5rem"
  }
}));

export default function Experience() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
        <LinearProgress color="secondary"></LinearProgress>
        <Typography variant="h3" color="secondary">Whoops, aún no está esta sección!</Typography>
    </div>
  );
}
