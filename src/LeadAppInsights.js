import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
  

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'; 

import SettingsIcon from '@material-ui/icons/Settings';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import FolderSharedIcon from '@material-ui/icons/FolderShared';

const useStyles = makeStyles((theme) => ({

    HistoryCard:{ 
    },  
    HistoryCardHeader: {
        borderBottom: '1px solid #ccc',
    },
    
    companyInsights: {
        '& li': {
          padding: theme.spacing(1, 0)
        },
    },
    rootInsight: {
        backgroundColor: 'rgb(231, 237, 246)'
    },
    iconLarge: {
        background: '#fff',
        width: theme.spacing(6),
        height: theme.spacing(6),
        padding: theme.spacing(1),
        margin: theme.spacing(0, 2, 0, 0),
        borderRadius: '4px',
    },
  }));

function Insights() {
    const classes = useStyles();
    
    return ( 
            <Card className={classes.HistoryCard}>
                <CardHeader className={classes.HistoryCardHeader}             
                    title="Insights"
                    subheader=""
                /> 
                <CardContent className={classes.HistoryCardContent}  >
                    <Grid container direction="row" spacing={2} justify="center" alignItems="flex-start">
                        <Grid item xs={12}>
                            <Card className={classes.rootInsight}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Company Introduction
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" gutterBottom>
                                        Company Pure Food is an American manufacturer of single-serve, aseptic, frozen and chilled fruit drinks,
                                        juices and concentrates for retail foods purveyous and food service operators.
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" gutterBottom>
                                        It alsoprovides food manufacturer with fruit ingrediants.
                                    </Typography>
                                    <Divider />
                                    <List  className={classes.companyInsights} aria-label="contacts">
                                        <ListItem>
                                            <ListItemIcon className={classes.iconLarge}>
                                                <SettingsIcon fontSize="large" />
                                            </ListItemIcon>                                            
                                            <ListItemText
                                                primary="Primary Products"
                                                secondary="Bottle Sealing Machine, Bottle Filling Sensors"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon className={classes.iconLarge}>
                                                <FolderSharedIcon fontSize="large"  />
                                            </ListItemIcon>
                                            <ListItemText 
                                                primary="New Opportunities"
                                                secondary="Bottle Sealing Machine, Bottle Filling Sensors"
                                                />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon className={classes.iconLarge}>
                                                <FolderSharedIcon fontSize="large"  />
                                            </ListItemIcon>
                                            <ListItemText 
                                                primary="Cross Cell Oppertinities"
                                                secondary="Bottle Sealing Machine, Bottle Filling Sensors"
                                                />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon className={classes.iconLarge}>
                                                <ThreeDRotationIcon fontSize="large"  />
                                            </ListItemIcon>
                                            <ListItemText 
                                                primary="Last Purchase"
                                                secondary="Bottle Sealing Machine, Bottle Filling Sensors"
                                                />
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>                                            
                    </Grid>                      
                </CardContent>
            </Card>
    )
}
export default Insights;