import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { SiCodewars, SiDiscord, SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import ProfileAvatar from '../assets/ProfileAvatar.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "90vh",
        width: "auto",
        [theme.breakpoints.up('sm')]: {
            marginLeft: "5rem",
        },
    },
    list: {
        marginTop: "10px",
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        margin: 0,
    },
    center: {
        textAlign: "center",
    },
    title_container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    title: {
        fontFamily: 'Quicksand, sans-serif',
        color: theme.palette.secondary.main,
    },
    icon: {
        fontSize: "3rem",
        color: theme.palette.secondary.main,
        textDecoration: "none",
        margin: "5px",
    },
    image: {
        marginTop: "10px",
        borderRadius: "50% 50%",
        display: "block",
        height: "15rem",
        width: "auto",
    }
}))

const socialMedia = [
    {
        name: 'Codewars',
        logo: <SiCodewars />,
        url: 'https://www.codewars.com/users/Wenxi'
    },
    {
        name: 'LinkedIn',
        logo: <SiLinkedin />,
        url: 'https://www.linkedin.com/in/wenceslao-citera-b6a91a1b0/'
    },
    {
        name: 'GitHub',
        logo: <SiGithub />,
        url: 'https://github.com/wencitera',
    },
    {
        name: 'Mail',
        logo: <SiGmail />,
        url: 'mailto:wencitera@gmail.com'
    },
    {
        name: 'Discord',
        logo: <SiDiscord />,
        url: 'https://discordapp.com/users/303695993462063106/',
    }
]

export default function Contact() {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root} justifyContent='center' alignItems="center">
            <Grid item xs className={classes.title_container}>
                <Typography className={classes.title} variant="h2">Contáctame</Typography>
            </Grid>
            <Grid item xs>
                <img className={classes.image} src={ProfileAvatar} alt="Profile avatar" />
            </Grid>
            <Grid item xs className={classes.list}>
                {socialMedia.map((item, index) => (
                    <li key={index} item xs className={classes.center}>
                        <a className={classes.icon} href={item.url} target="_blank" rel="noreferrer">{item.logo}</a>
                    </li>
                ))}
            </Grid>
        </Grid>
    )
}
