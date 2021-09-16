import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
    height: '100vh',
    alignItems: "flex-start",
    justifyContent: 'center',
    width: "90vw",
    display: 'flex',
    [theme.breakpoints.up('sm')]:{
      marginLeft: "5rem"
    }
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  stepper: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]:{
      width: "50vw" 
    }
  },
  text: {
    fontSize: "1rem",
    color: theme.palette.secondary.main,
  }
}));

function getSteps() {
  return ['Estudios', 'Proyectos', 'Empleos'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "2019 - 2021: Estudié Técnicatura Universitaria en Programación en la Universidad Tecnológica Nacional de Argentina. \n 2021 - Actualidad: Estudio de forma autodidacta desarrollando local en cuanto a front-end y entrenando lógica en Codewars";
    case 1:
      return " 2020 - RejunteBotArv2: Bot de Discord que realiza emparejamiento de equipos y almacena partidas en formato json\n 2021 - gaph.netlify.app: Portfolio hecho con React.js, vinculado con Google Sheets para facilitar su edicion al usuario";
    case 2:
      return "2021 - Actualmente trabajando en IT Estudio como junior back-end con C# .NET";
    default:
      return 'Unknown step';
  }
}

export default function Experience() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  return (
    
    <div className={classes.root}>
      <Stepper alternativeLabel className={classes.stepper} activeStep={activeStep} orientation="horizontal">
        {steps.map((label, index) => (
          <Step key={label} >
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
