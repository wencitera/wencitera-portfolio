import { Backdrop, IconButton, ImageList, ImageListItem, ImageListItemBar, makeStyles, Modal, Typography, Zoom } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import CsharpIcon from '../assets/csharp.svg';
import ReactIcon from '../assets/ReactIcon.svg';
import JsIcon from '../assets/JsIcon.svg';
import PythonIcon from '../assets/PythonIcon.svg';
import DatabaseIcon from '../assets/DatabaseIcon.svg';
import HtmlIcon from '../assets/HtmlIcon.svg';
import CssIcon from '../assets/CssIcon.svg';
import InfoIcon from '@material-ui/icons/Info'


const itemData = [
    {
        title: "C#",
        alt: "Icono C#",
        image: CsharpIcon,
        stars: "⭐⭐⭐⭐⭐",
        description: "Es mi lenguaje de programación nativo, con el cual desarrollé mis primeras experiencias. Trabajé con .NET desarrollando principalmente back-end"
    },
    {
        title: "JavaScript",
        alt: "Icono Js",
        image: JsIcon,
        stars: "⭐⭐⭐⭐",
        description: "Mi segundo lenguaje más utilizado para front y back. Trabajé con React.js Discord.js y Node.js"
    },
    {
        title: "Python",
        alt: "Icono Python",
        image: PythonIcon,
        stars: "⭐⭐⭐",
        description: "Otra elección para desarrollo de backend, me agrada el dinamismo que posee. Trabajé con SQL Alchemy y Flask"
    },
    {
        title: "React.js",
        alt: "Icono React",
        image: ReactIcon,
        stars: "⭐⭐⭐⭐",
        description: "Este portfolio está hecho con React. Es mi preferencia para realizar front-end"
    },
    {
        title: "HTML 5",
        alt: "Icono html",
        image: HtmlIcon,
        stars: "⭐⭐⭐",
        description: "Poseo conocimientos básicos en cuanto a HTML, tengo mucho apoyo de frameworks al igual que en CSS"
    },
    {
        title: "CSS",
        alt: "Icono css",
        image: CssIcon,
        stars: "⭐⭐",
        description: "Mis conocimientos sobre CSS son básicos, uso de apoyo frameworks como Bootstrap y Material-UI"
    },
    {
        title: "Base de Datos",
        alt: "Icono DB",
        image: DatabaseIcon,
        stars: "⭐⭐⭐",
        description: "No poseo mucha experiencia como Administrador de Bases de Datos, pero estoy preparado para afrontar un desafío. Trabajé con PostgreSQL, MySQL y SQL Server"
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        height: "100vh",
        padding: "1rem",
        marginLeft: "5rem",
        [theme.breakpoints.down('md')]: {
            marginLeft: "1rem",
        },
    },
    transparent:{
        opacity: 0,
    },
    title: {
        textAlign: "center",
        color: theme.palette.secondary.main,
        fontSize: "4rem",
        [theme.breakpoints.down('md')]:{
            fontSize: "1.5rem",
        }
    },
    body: {
        color: theme.palette.secondary.main,
        fontSize: "1.0rem",
        [theme.breakpoints.down('md')]:{
            fontSize: "0.8rem",
        }
    },
    icon: {
        color: theme.palette.secondary.dark,
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
        [theme.breakpoints.down('md')]:{
            maxWidth: "80%",
        }
    },
    itembar:{
        backgroundColor: 'none',
    },
    image: {
        display: 'block',
        margin: "0 auto",
        height: 180,
        width: "auto",
        [theme.breakpoints.down('md')]:{
            height: 140,
        },
        '&:before': {
            filter: 'invert(0%) sepia(4%) saturate(0%) hue-rotate(144deg) brightness(92%) contrast(100%)'
        },
        filter: "invert(72%) sepia(99%) saturate(1551%) hue-rotate(86deg) brightness(100%) contrast(88%)",
        '&:hover': {
            animation: `$shine 1s infinite`
        }
    },
    "@keyframes shine": {
        "from to": { filter: "invert(72%) sepia(99%) saturate(1551%) hue-rotate(86deg) brightness(100%) contrast(88%)" },
        "50%": { filter: "invert(59%) sepia(63%) saturate(426%) hue-rotate(101deg) brightness(113%) contrast(108%)" }
    },
}))



export default function Knowledge() {
    const classes = useStyles();
    const [open, setOpen] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 700;
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

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

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
                        <img className={classes.image} src={obj.image} alt={obj.title} />
                        <Typography className={classes.title}>{obj.title}</Typography>
                        {obj.stars}
                        <Typography className={classes.body}>{obj.description}</Typography>
                    </div>
                </Zoom>
            </Modal>
        )
    }

    function IconGallery(props){
        return(
        <ImageList rowHeight={180} className={classes.imageList} cols={props.cols}>
                {itemData.map((item, index) => (
                    <ImageListItem key={index}>
                        <img className={classes.image} src={item.image} onClick={() => handleOpen(index)} alt={item} />
                        <ImageListItemBar
                            className={classes.itembar}
                            actionIcon={
                                <IconButton className={classes.icon} onClick={() => handleOpen(index)}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                        {modalWindow(item, index)}
                    </ImageListItem>
                ))}
            </ImageList>
        );
    } 

    const RESPONSIVE_COL = {
        PC: 8,
        MOBILE: 2
    }

    return (
        <div className={classes.root}>
            <IconGallery cols={(width > breakpoint) ? RESPONSIVE_COL.PC : RESPONSIVE_COL.MOBILE}/>
        </div>
    )
}

/*
<Grid container direction="column">
                    <Grid item>
                        <Typography className={classes.title}><u>Técnologías</u></Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.body}>Jira, Trello, GitHub, GitLab, BitBucket, Filezilla, Postman</Typography>
                    </Grid>
                </Grid>
<Grid item xs>
                <Grid container direction="column">
                    <Grid item xs>
                        <Typography className={classes.title}><u>Frameworks</u></Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography className={classes.body}>React, Node.js, Discord.js, Bootstrap, Material-UI, .NET, Flask, SQL Alchemy</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <Grid container direction="column">
                    <Grid item>
                        <Typography className={classes.title}><u>Lenguajes</u></Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.body}>C#, Python, Javascript, HTML, CSS, SQL (SQL Server, PostgreSQL, MySQL)</Typography>
                    </Grid>
                </Grid>
            </Grid>
*/
