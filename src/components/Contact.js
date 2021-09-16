import { Avatar, List, ListItem, ListItemAvatar, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react'
import { SiCodewars, SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            marginLeft: "5rem",
        }
    },
    list:{
        alignItems: "center",
        justifyContent: 'flex-start',
    },
    text: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
    },
    icon: {
        backgroundColor: theme.palette.secondary.main,
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
    }
]

export default function Contact() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List className={classes.root}>
                {
                    socialMedia.map((social, index) =>
                        <ListItem key={index} className={classes.list}>
                            <ListItemAvatar>
                                <Avatar className={classes.icon}>
                                    {social.logo}
                                </Avatar>
                            </ListItemAvatar>
                            <a className={classes.text} href={social.url}><ListItemText primary={social.name} /></a>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )
}
