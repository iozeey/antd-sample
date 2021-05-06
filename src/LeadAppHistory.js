import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
  

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { ForwardIconSvg, EyeIconSvg, AddIconSvg } from './LeadAppIcons'

const useStyles = makeStyles((theme) => ({
    HistoryCard:{ 
    },  
    HistoryCardHeader: {
        borderBottom: '1px solid #ccc',
    },
    contactDetail: {
      backgroundColor: '#fff',
      '& li': {
        color: '#666666',
        padding: theme.spacing(1, 0)
      },
      '& li:nth-child(2) > div.green': {
            background: '#20B0A7',
      },
    }, 
    iconLarge: {
        background: '#339CFE',
        minWidth: theme.spacing(4),
        height: theme.spacing(4),
        margin: theme.spacing(0, 2, 0, 0),
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    iconLargeGreen: {
        backgroundColor: '#20B0A7',
    },
  }));

function History() {
    const classes = useStyles();
    
    return ( 
            <Card className={classes.HistoryCard}>
                <CardHeader className={classes.HistoryCardHeader}             
                    title="Lead History"
                    subheader=""
                /> 
                <CardContent className={classes.HistoryCardContent}  >
                    <Grid container direction="row" spacing={2} justify="center" alignItems="flex-start">
                        <Grid item xs={12}>
                            <List  className={classes.contactDetail} aria-label="contacts">
                                <ListItem>
                                    <ListItemIcon className={classes.iconLarge}>
                                        <AddIconSvg />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Lead recieved by Interlynx Systems"
                                        secondary="a day ago"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon className={`${classes.iconLarge} ${classes.iconLargeGreen}`}>
                                        <ForwardIconSvg  />
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary="Lead sent by Interlynx Systems to RSM"
                                        secondary="a day ago"
                                     />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon className={classes.iconLarge}>
                                        <EyeIconSvg  />
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary="Lead viewed by Shelly Wilson"
                                        secondary="a day ago"
                                     />
                                </ListItem>
                                
                            </List>
                        </Grid>                                            
                    </Grid>                      
                </CardContent>
            </Card>
    )
}
export default History;