import { Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react'
import { SiCodewars, SiDiscord, SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import ProfileAvatar from '../assets/ProfileAvatar.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "100vh",
        width: "auto",
        [theme.breakpoints.up('sm')]: {
            marginLeft: "5rem",
        },
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    list: {
        marginTop: "10px",
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        margin: 0,
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
        borderRadius: "50% 50%",
        height: "15rem",
        width: "auto",
    },
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
        <div className={`${classes.root} ${classes.center}`}>
            <Typography textAlign="center" className={classes.title} variant="h2">Redes Sociales</Typography>
            <img className={classes.image} src={ProfileAvatar} alt="Profile avatar" />
            <div className={classes.list}>
                {socialMedia.map((item, index) => (
                    <li key={index} item xs className={classes.center}>
                        <a className={classes.icon} href={item.url} target="_blank" rel="noreferrer">{item.logo}</a>
                    </li>
                ))}
            </div>
        </div>
    )
}
