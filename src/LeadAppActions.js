import React from 'react';
import Grid from '@material-ui/core/Grid'; 

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import ActionsTabs from './LeadAppActionsTabs';
import Distributors from './LeadAppDistributors';
import { PaperPlaneIconSvg, AddCircleIconSvg, EditIconSvg } from './LeadAppIcons';

const useStyles = makeStyles((theme) => ({
    
    ActionCardHeader: {
        borderBottom: '1px solid #ccc',
    },
    actionHeader: {
        '& h6 > button': {
            margin: theme.spacing(0, 0, 0, 2) ,
          },
      },
    vSpacing: {
        margin: theme.spacing(4, 0),
    },
  }));
 
function Actions() {
    const classes = useStyles();
    
    return ( 
            <Card className={classes.ActionCard}>
                <CardHeader className={classes.ActionCardHeader}             
                    title="Lead Action"
                    subheader=""
                /> 
                <CardContent className={classes.ActionCardContent}  >
                    <Grid container direction="row" spacing={2} justify="center" alignItems="flex-start">
                        <Grid item xs={12}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <ActionsTabs />
                                    <div className={classes.vSpacing}></div>
                                    <Distributors />
                                    <div className={classes.vSpacing}></div>
                                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                                        <Grid item xs={6}>
                                            <Button fullWidth variant="contained" color="primary" startIcon={<PaperPlaneIconSvg />}>Submit Lead</Button>
                                        </Grid >
                                        <Grid item xs={3}>
                                            <Button fullWidth variant="contained" color="primary" startIcon={<AddCircleIconSvg />}>Add Contact</Button>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button fullWidth variant="contained" color="primary" startIcon={<EditIconSvg />}>Edit Contact</Button>
                                        </Grid>
                                    </Grid >
                   
                                </CardContent>
                            </Card>
                        </Grid>                                            
                    </Grid>                      
                </CardContent>
            </Card>
    )
}
export default Actions;