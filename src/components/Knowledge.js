//import { makeStyles } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Backdrop, Modal, Typography, Zoom } from '@mui/material';
import { SiCsharp, SiJavascript, SiReact, SiCss3, SiHtml5, SiPython, SiNodeDotJs, SiMaterialUi, SiBootstrap } from 'react-icons/si'
import { HiDatabase } from 'react-icons/hi'

const itemData = [
    {
        title: "C#",
        alt: "Icono C#",
        image: <SiCsharp />,
        description: "Es mi lenguaje de programación nativo, con el cual desarrollé mis primeras experiencias. Trabajé con .NET desarrollando principalmente back-end"
    },
    {
        title: "JavaScript",
        alt: "Icono Js",
        image: <SiJavascript />,
        description: "Mi segundo lenguaje más utilizado para front y back. Trabajé con React.js Discord.js y Node.js"
    },
    {
        title: "Python",
        alt: "Icono Python",
        image: <SiPython />,
        description: "Otra elección para desarrollo de backend, me agrada el dinamismo que posee. Trabajé con SQL Alchemy y Flask"
    },
    {
        title: "React.js",
        alt: "Icono React",
        image: <SiReact />,
        description: "Este portfolio está hecho con React. Es mi preferencia para realizar front-end"
    },
    {
        title: "HTML 5",
        alt: "Icono html",
        image: <SiHtml5 />,
        description: "Poseo conocimientos básicos en cuanto a HTML, tengo mucho apoyo de frameworks al igual que en CSS"
    },
    {
        title: "CSS",
        alt: "Icono css",
        image: <SiCss3 />,
        description: "Mis conocimientos sobre CSS son básicos, uso de apoyo frameworks como Bootstrap y Material-UI"
    },
    {
        title: "Base de Datos",
        alt: "Icono DB",
        image: <HiDatabase />,
        description: "No poseo mucha experiencia como Administrador de Bases de Datos, pero estoy preparado para afrontar un desafío. Trabajé con PostgreSQL, MySQL y SQL Server"
    },
    {
        title: "Node.js",
        alt: "Icono nodejs",
        image: <SiNodeDotJs />,
        description: "Trabajé bastante en el desarrollo de bots para Discord."
    },
    {
        title: "Material-UI",
        alt: "Icono MUI",
        image: <SiMaterialUi />,
        description: "Este portfolio esta realizado con este framework"
    },
    {
        title: "Bootstrap",
        alt: "Icono bootstrap",
        image: <SiBootstrap />,
        description: "Anteriormente utilizaba bootstrap, migré a MaterialUI porque me es más cómodo"
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        //width: "100%",
        height: "100%",
        padding: "1rem",
        marginLeft: "1rem",
        [theme.breakpoints.up('sm')]: {
            marginLeft: "5rem",
            marginRight: "5rem"
        },
    },
    title: {
        textAlign: "center",
        color: theme.palette.secondary.main,
        fontSize: "4rem",
        [theme.breakpoints.down('lg')]: {
            fontSize: "1.5rem",
        }
    },
    body: {
        color: theme.palette.secondary.main,
        fontSize: "1.0rem",
        [theme.breakpoints.down('lg')]: {
            fontSize: "0.8rem",
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.default,
        border: `2px solid ${theme.palette.secondary.dark}`,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        maxWidth: "25vw",
        [theme.breakpoints.down('lg')]: {
            maxWidth: "80%",
        }
    },
    image: {
        width: "auto",
        color: theme.palette.secondary.main,
        fontSize: "10rem",
        textAlign: "center",
        [theme.breakpoints.down('lg')]: {
            fontSize: "6rem",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "8rem",
        }
    },
    image_animation: {
        '&:hover': {
            animation: `$shine 1s infinite`,
            cursor: 'help',
        }
    },
    "@keyframes shine": {
        "from to": { color: theme.palette.secondary.light },
        "50%": { color: theme.palette.secondary.dark }
    },
}))

export default function Knowledge() {
    const classes = useStyles();
    const [open, setOpen] = useState([]);
    const handleOpen = (id) => {
        setOpen({
            [id]: true,
        });
    };

    const handleClose = (id) => {
        setOpen({
            [id]: false,
        });
    };

    useEffect(() => {
        itemData.forEach((index) =>
            setOpen({ [index]: false })
        )
    }, [])

    function modalWindow(obj, index) {
        return (
            <Modal
                className={classes.modal}
                open={open[index]}
                onClose={() => handleClose(index)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Zoom in={open[index]}>
                    <div className={classes.paper}>
                        <div className={classes.image}>
                            {obj.image}
                        </div>
                        <Typography className={classes.title}>{obj.title}</Typography>
                        <Typography className={classes.body}>{obj.description}</Typography>
                    </div>
                </Zoom>
            </Modal>
        )
    }

    function IconGallery() {
        
        return (
            <Grid columns={10} container spacing={1} direction="row">
                {itemData.map((item, index) => (
                    <Grid key={index} item md={2} xs={5}>
                        <div onClick={() => handleOpen(index)} className={`${classes.image} ${classes.image_animation}`}>
                            {item.image}
                        </div>
                        {modalWindow(item, index)}
                    </Grid>
                ))}
            </Grid>
        );
    }

    return (
        <div className={classes.root}>
            <IconGallery />
        </div>
    )
}

