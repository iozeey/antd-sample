import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
  

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { BusinessAndTradeIconSvg, MotherAndBabyIconSvg, AddressIconSvg, LocationIconSvg } from './LeadAppIcons'


const useStyles = makeStyles((theme) => ({
    HistoryCard:{ 
    },  
    HistoryCardHeader: {
        borderBottom: '1px solid #ccc',
    },
    
    companyDetail: {
        backgroundColor: '#fff',
        '& li': {
          padding: theme.spacing(1, 0)
        },
      },
  }));

function CompanyCard() {
    const classes = useStyles();
    
    return ( 
            <Card className={classes.HistoryCard}>
                <CardHeader className={classes.HistoryCardHeader}             
                    title="Company Details"
                    subheader=""
                /> 
                <CardContent className={classes.HistoryCardContent}  >
                    <Grid container direction="row" spacing={2} justify="center" alignItems="flex-start">
                        <Grid item xs={12}>
                            <List  className={classes.companyDetail} aria-label="contacts">
                                <ListItem>
                                    <ListItemIcon>
                                        <BusinessAndTradeIconSvg />
                                    </ListItemIcon>
                                    <ListItemText primary="Country Pure Foods Inc" />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon>
                                        <MotherAndBabyIconSvg />
                                    </ListItemIcon>
                                    <ListItemText primary="The J.M. Smucker Company" />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon>
                                        <AddressIconSvg />
                                    </ListItemIcon>
                                    <ListItemText primary="2033 - Canned Fruits, Vegetables, Pres..." />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon>
                                        <AddressIconSvg />
                                    </ListItemIcon>
                                    <ListItemText primary="311421 - Fruits and Vegetables Canning" />
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon>
                                        <LocationIconSvg />
                                    </ListItemIcon>
                                    <ListItemText primary="681 West Waterloo Road, Akron, OH, USA, 44314" />
                                </ListItem>
                            </List>
                        </Grid>                                            
                    </Grid>                      
                </CardContent>
            </Card>
    )
}
export default CompanyCard;