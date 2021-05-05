import React from 'react';
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
 

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import LocationOnIcon from '@material-ui/icons/LocationOn'; 
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function AccordionDetailInner() {
    return (
        <Grid  container direction="row" justify="center" alignItems="flex-start" spacing={1}>
        <Grid item xs={6}>
            <List aria-label="contacts">
                <ListItem className="active">
                    <ListItemIcon>
                        <AssignmentIndIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Kaman Branch TX 93"
                        secondary="Default Contact"
                    />
                </ListItem>                                                     
            </List>
        </Grid >
        <Grid item xs={6}>
            <List aria-label="contacts">
                <ListItem>
                    <ListItemIcon>
                        <AssignmentIndIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Kaman Branch TX 93"
                        secondary="twilson@juice4u.com"
                    />
                </ListItem>                                                     
            </List>
        </Grid> 

        <Grid item xs={12}>
            <TextField
                style={{ backgroundColor: '#fff'}}
                id="outlined-multiline-static"
                label=""
                multiline
                rows={4}
                defaultValue="Write additional comments here"
                variant="outlined"
                fullWidth
            />
        </Grid> 
    </Grid >
    );
}
 
const useStyles = makeStyles((theme) => ({
    actionHeader: {
        '& h6 > button': {
            margin: theme.spacing(0, 0, 0, 2) ,
          },
      },
    
    AccordianColor: {
        backgroundColor: '#EAEDF4',
        margin: theme.spacing(0, 0, 2, 0) ,
    },
    contactDetail: {
        '& li': {
            backgroundColor: '#0169CA',
            color: '#fff',
            borderRadius: '4px',
        },
        '& li.active': {
            backgroundColor: '#0054A1',
            color: '#fff',
            borderRadius: '4px',
        },
        '& p': {
            color: '#ccc',
        },
        '& svg': {
            color: '#fff',
        },
      }, 
      panelSummary: {
        flexDirection: "row-reverse",
        '& .MuiIconButton-edgeEnd':{
            margin: theme.spacing(-1, 2, 0, 0 ),
            backgroundColor: 'rgb(220, 224, 227)',
            borderRadius: '4px',
            padding: theme.spacing(0),
        },
      },
  }));
 
function Distributors() {
    const classes = useStyles();
    
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return ( 
        <> 
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.AccordianColor}>
                <AccordionSummary
                className={classes.panelSummary}
                expandIcon={expanded === 'panel1'?<RemoveIcon />:<AddIcon/>}
                aria-controls="panel1ah-content"
                id="panel1ah-header"
                >
                    <Grid className={classes.actionHeader} container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                        <Grid item xs={6}>
                            <Typography display="block" variant="subtitle2" nowrap={true}>Kaman Industries Inc. <Button variant="contained" color="primary" size="small">Tier 1</Button></Typography>
                        </Grid >
                        <Grid item xs={3}>
                            <Button style={{ color: '#A9A9A9'}}><LocationOnIcon style={{fill: "#3CB371"}}/> Arlington, TX</Button>
                        </Grid>
                        <Grid item xs={3}>                                                    
                            <Button style={{ color: '#A9A9A9'}}>4.25 Miles</Button>
                        </Grid>
                    </Grid >
                </AccordionSummary>
                <AccordionDetails className={classes.contactDetail} >
                    <AccordionDetailInner />
                </AccordionDetails>
            </Accordion> 
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.AccordianColor}>
                <AccordionSummary
                className={classes.panelSummary}
                expandIcon={expanded === 'panel2'?<RemoveIcon />:<AddIcon/>}
                aria-controls="panel2ah-content"
                id="panel2ah-header"
                >
                    <Grid className={classes.actionHeader} container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                        <Grid item xs={6}>
                            <Typography display="block" variant="subtitle2" nowrap={true}>Purvis Industries <Button variant="contained" color="primary" size="small">Tier 1</Button></Typography>
                        </Grid >
                        <Grid item xs={3}>
                            <Button style={{ color: '#A9A9A9'}}><LocationOnIcon style={{fill: "#3CB371"}}/> Arlington, TX</Button>
                        </Grid>
                        <Grid item xs={3}>                                                    
                            <Button style={{ color: '#A9A9A9'}}>4.25 Miles</Button>
                        </Grid>
                    </Grid >
                </AccordionSummary>
                <AccordionDetails className={classes.contactDetail} >
                    <AccordionDetailInner />
                </AccordionDetails>
            </Accordion> 
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.AccordianColor}>
                <AccordionSummary
                className={classes.panelSummary}
                expandIcon={expanded === 'panel3'?<RemoveIcon />:<AddIcon/>}
                aria-controls="panel3ah-content"
                id="panel3ah-header"
                >
                    <Grid className={classes.actionHeader} container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                        <Grid item xs={6}>
                            <Typography display="block" variant="subtitle2" nowrap={true}>B & D Industrial <Button variant="contained" color="secondary" size="small">Tier 2</Button></Typography>
                        </Grid >
                        <Grid item xs={3}>
                            <Button style={{ color: '#A9A9A9'}}><LocationOnIcon style={{fill: "#3CB371"}}/> Arlington, TX</Button>
                        </Grid>
                        <Grid item xs={3}>                                                    
                            <Button style={{ color: '#A9A9A9'}}>4.25 Miles</Button>
                        </Grid>
                    </Grid >
                </AccordionSummary>
                <AccordionDetails className={classes.contactDetail} >
                    <AccordionDetailInner />
                </AccordionDetails>
            </Accordion> 
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.AccordianColor}>
                <AccordionSummary
                className={classes.panelSummary}
                expandIcon={expanded === 'panel4'?<RemoveIcon />:<AddIcon/>}
                aria-controls="panel4ah-content"
                id="panel4ah-header"
                >
                    <Grid className={classes.actionHeader} container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                        <Grid item xs={6}>
                            <Typography display="block" variant="subtitle2" nowrap={true}>Womack Machine <Button variant="contained" color="secondary" size="small">Tier 2</Button></Typography>
                        </Grid >
                        <Grid item xs={3}>
                            <Button style={{ color: '#A9A9A9'}}><LocationOnIcon style={{fill: "#3CB371"}}/> Arlington, TX</Button>
                        </Grid>
                        <Grid item xs={3}>                                                    
                            <Button style={{ color: '#A9A9A9'}}>4.25 Miles</Button>
                        </Grid>
                    </Grid >
                </AccordionSummary>
                <AccordionDetails className={classes.contactDetail} >
                    <AccordionDetailInner />
                </AccordionDetails>
            </Accordion> 
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className={classes.AccordianColor}>
                <AccordionSummary
                className={classes.panelSummary}
                expandIcon={expanded === 'panel5'?<RemoveIcon />:<AddIcon/>}
                aria-controls="panel5ah-content"
                id="panel5ah-header"
                >
                    <Grid className={classes.actionHeader} container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                        <Grid item xs={6}>
                            <Typography display="block" variant="subtitle2" nowrap={true}>Hydraquip <Button variant="contained" color="primary" size="small">Tier 1</Button></Typography>
                        </Grid >
                        <Grid item xs={3}>
                            <Button style={{ color: '#A9A9A9'}}><LocationOnIcon style={{fill: "#3CB371"}}/> Arlington, TX</Button>
                        </Grid>
                        <Grid item xs={3}>                                                    
                            <Button style={{ color: '#A9A9A9'}}>4.25 Miles</Button>
                        </Grid>
                    </Grid >
                </AccordionSummary>
                <AccordionDetails className={classes.contactDetail} >
                    <AccordionDetailInner />
                </AccordionDetails>
            </Accordion> 
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className={classes.AccordianColor}>
                <AccordionSummary
                className={classes.panelSummary}
                expandIcon={expanded === 'panel6'?<RemoveIcon />:<AddIcon/>}
                aria-controls="panel6ah-content"
                id="panel6ah-header"
                >
                    <Grid className={classes.actionHeader} container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                        <Grid item xs={6}>
                            <Typography display="block" variant="subtitle2" nowrap={true}>Texas Instruments <Button variant="contained" color="secondary" size="small">Tier 2</Button></Typography>
                        </Grid >
                        <Grid item xs={3}>
                            <Button style={{ color: '#A9A9A9'}}><LocationOnIcon style={{fill: "#3CB371"}}/> Arlington, TX</Button>
                        </Grid>
                        <Grid item xs={3}>                                                    
                            <Button style={{ color: '#A9A9A9'}}>4.25 Miles</Button>
                        </Grid>
                    </Grid >
                </AccordionSummary>
                <AccordionDetails className={classes.contactDetail} >
                    <AccordionDetailInner />
                </AccordionDetails>
            </Accordion>  
        </>
    )
}
export default Distributors;