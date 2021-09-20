import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import { SiCodewars, SiDiscord, SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        [theme.breakpoints.up('sm')]: {
            marginLeft: "5rem",
        },
    },
    center: {
        textAlign: "center",
    },
    icon: {
        fontSize: "3rem",
        color: theme.palette.secondary.main,
        textDecoration: "none"
    },
    image: {
        padding: '2vw',
        width: "auto",
        maxHeight: "60rem",
        borderRadius: "50% 50%",
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
        <div className={classes.root}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                {socialMedia.map((item, index) => (
                    <Grid key={index} item xs className={classes.center}>
                        <a className={classes.icon} href={item.url} target="_blank" rel="noreferrer">{item.logo}</a>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
