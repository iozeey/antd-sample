import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
 
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
 
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import LockIcon from '@material-ui/icons/Lock';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { ProfileIconSvg, CallIconSvg, BagIconSvg, MailIconSvg } from './LeadAppIcons'

const useStyles = makeStyles((theme) => ({
    buttons: {
      '& > *': {
        margin: theme.spacing(2, 2, 1, 0) ,
        borderRadius: '30px',
      },
    },
    ContactCard:{ 
    },
    ContactCardHeader: {
        borderBottom: '1px solid #ccc',
    },
    ContactCardContent: {
      '& dt': {
        color: '#a58c8c',
      },
    },
    cardHeader: {
        padding: theme.spacing(1, 2, 0) ,
        '& .MuiCardHeader-avatar':{
            marginTop: '-48px',
        }
    }, 
    contactDetail: {
      backgroundColor: '#fff',
      '& li': {
        color: '#666',
        padding: theme.spacing(1, 0)
      },
    },
    smallerDot: {
        fontSize: '0.5rem',
    },
    dividerSpacing:{
        margin: theme.spacing(2, 0) ,
    },
    avatarSmall: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    avatarLarge: {
        border: '1px solid #ccc',
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
  }));
function ContactCard() {
    const classes = useStyles();
    
    return ( 
            <Card className={classes.ContactCard}>
                <CardHeader className={classes.ContactCardHeader}             
                    title="Contact Details"
                    subheader=""
                /> 
                <CardContent className={classes.ContactCardContent}  >
                    <Grid container direction="row" spacing={2} justify="center" alignItems="flex-start">
                    <Grid item xs={12}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="placeholder"
                                height="140"
                                image="banner.png"
                                title="Terri Wilson"
                                />
                                <CardHeader
                                    className={classes.cardHeader}
                                    avatar={
                                    <Avatar aria-label="recipe" src="avatar.png" className={classes.avatarLarge} />
                                    }
                                    action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                    }
                                />
                                <CardContent>
                                <Typography variant="h6" component="h6">
                                    Terri Wilson
                                    <Typography variant="caption" color="textSecondary"> <FiberManualRecordIcon className={classes.smallerDot} /> 3rd</Typography>
                                </Typography>
                                <Typography gutterBottom variant="subtitle2" component="p">
                                    Food Engineer at Country Pure Foods Inc.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    The Ohio State University <FiberManualRecordIcon className={classes.smallerDot} /> Country Pure Foods Inc
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    WaterlooRoad, Akron, OH, USA <FiberManualRecordIcon className={classes.smallerDot} /> 500+ connections
                                </Typography>
                                <div className={classes.buttons}>
                                    <Button size="small" variant="contained" color="primary">Connect</Button>
                                    <Button size="small" variant="outlined" color="primary" startIcon={<LockIcon fontSize="small" />}>Message</Button>
                                </div>
                                <Divider className={classes.dividerSpacing} />
                                <Typography variant="body2" color="textSecondary" component="p" noWrap={false}>
                                    I've worked with top levelfood companies to provide the world with
                                    healthy & delicious advance
                                </Typography>    
                                </CardContent>
                            </CardActionArea>
                          
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <List  className={classes.contactDetail} aria-label="contacts">
                            <ListItem>
                                <ListItemIcon>
                                   <ProfileIconSvg />
                                </ListItemIcon>
                                <ListItemText primary="Terri Wilson" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <BagIconSvg />
                                </ListItemIcon>
                                <ListItemText primary="Engineer" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <CallIconSvg />
                                </ListItemIcon>
                                <ListItemText primary="214.620-1317" />
                                <Chip
                                    icon={<CallIconSvg />}
                                    label="Click To Call" 
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <CallIconSvg />
                                </ListItemIcon>
                                <ListItemText primary="972-475-9582" />
                                <Chip
                                    icon={<CallIconSvg />}
                                    label="Click To Call" 
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <MailIconSvg />
                                </ListItemIcon>
                                <ListItemText primary="tWilson@juice4u.com" />
                                <Chip
                                    icon={<MailIconSvg />}
                                    label="Click To Email" 
                                />
                            </ListItem>
                        </List>
                    </Grid>
                                            
                </Grid>                      
            </CardContent>
        </Card>
    )
}
export default ContactCard;