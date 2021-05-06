
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'; 

import ContactCard from './LeadAppContactCard'
import History from './LeadAppHistory'
import CompanyCard from './LeadAppCompanyCard'
import Insights from './LeadAppInsights'
import Actions from './LeadAppActions'
import Statistics from './LeadAppStatics'
import AppMenu from './LeadAppMenu'
import {LeadAppLogo} from './LeadAppIcons'

const useStyles = makeStyles((theme) => ({
    root: {
      // display: 'flex',
    },
    leftBarCard:{
      backgroundColor: '#362f3c',
      color: '#ffffff',
    },
    leftBarCardHeader: {
      backgroundColor: '#bfbbc7',
    },
    leftBarCardContent: {
      '& dt': {
        color: '#a58c8c',
      },
    },
    appCardHeader: {
      backgroundColor: '#F7F7F7',
    },
    vSpacing: {
      margin: theme.spacing(2, 0),
    }, 
    applicationArea: {
      backgroundColor: '#f1f1f1',
    },
  }));

function LeadAppDesktop() {
    const classes = useStyles();
   
    return ( 
            <Box mx="auto" p={2} className={classes.applicationArea}>
              <Grid className={classes.navBar} container direction="row" justify="center" alignItems="flex-start" spacing={4}>
                <Grid item xs={9}>
                  <AppMenu /> 
                </Grid>
                <Grid item xs={3} align="right">
                  <LeadAppLogo />
                </Grid>
              </Grid >
              <div className={classes.vSpacing}></div>

              <Statistics />
              <div className={classes.vSpacing}></div>

              <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
              <Grid className={classes.leftBar} item xs={12} md={4} lg={3}>             
                <ContactCard />
                <div className={classes.vSpacing}></div>
                <History />
              </Grid> 
              <Grid className={classes.leftBar} item xs={12} md={4} lg={3}>             
                <CompanyCard />
                <div className={classes.vSpacing}></div>
                <Insights />
              </Grid> 
              <Grid className={classes.leftBar} item xs={12} md={4} lg={6}>             
              <Actions />
              </Grid> 
              </Grid>
            </Box>
    )
}
export default LeadAppDesktop;