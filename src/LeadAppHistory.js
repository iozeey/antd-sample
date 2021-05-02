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


import VisibilityIcon from '@material-ui/icons/Visibility';
import SendIcon from '@material-ui/icons/Send';
import AddBoxIcon from '@material-ui/icons/AddBox';
const useStyles = makeStyles((theme) => ({
    HistoryCard:{ 
    },  
    HistoryCardHeader: {
        borderBottom: '1px solid #ccc',
    },
    contactDetail: {
      backgroundColor: '#fff',
      '& li': {
        color: '#a58c8c',
      },
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
                                    <ListItemIcon>
                                        <AddBoxIcon fontSize="large" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Lead recieved by Interlynx Systems"
                                        secondary="a day ago"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <SendIcon fontSize="large"  />
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary="Lead sent by Interlynx Systems to RSM"
                                        secondary="a day ago"
                                     />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <VisibilityIcon fontSize="large"  />
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